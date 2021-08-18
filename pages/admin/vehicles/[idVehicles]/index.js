import Image from 'next/image';
import { ICPlusLight, ILCamera, ILPlus } from '../../../../src/assets';
import {
  Button,
  GoBackPage,
  Input,
  MainLayout,
} from '../../../../src/components';
import { StyledAddingVehiclesPage } from '../styled';
import { Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '../../../../src/config/fetcher';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from '../../../../src/config/Axios';
import { toastify } from '../../../../src/utils';

const AddVehicles = () => {
  const router = useRouter();
  const idVehicles = router.query.idVehicles;
  const { data, error } = useSWR(`/vehicles/${idVehicles}`, fetcher);
  const dataVehicles = data?.data;
  const [totalStock, setTotalStock] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm();

  // Upload Image
  const [uploadImage, setUploadImage] = useState([]);
  const [previewAvatar, setPreviewAvatar] = useState([]);

  const handleInputImageProduct = async () => {
    try {
      const getImage = getValues('images')[0];
      const preview = URL.createObjectURL(getImage);
      setUploadImage(getImage);
      setPreviewAvatar(preview);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    const allValue = getValues();
    // console.log('allValue', allValue);

    handleInputImageProduct();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('images')]);

  const onSubmit = (data) => {
    console.log(data);
    const token = localStorage.getItem('token');
    const idUser = localStorage.getItem('idUser');

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('type', data.category);
    formData.append('stock', totalStock);
    formData.append('capacity', 2);
    formData.append('paymentOption', 'per day');
    formData.append('status', data.status);
    // formData.append('images', data.image);

    // console.log('data.image1', data.image1);
    const imageMultiple = [];
    imageMultiple.push(data.images[0]);
    // imageMultiple.push(data.images2[0]);
    // imageMultiple.push(data.images3[0]);
    Array.from(imageMultiple).forEach((image) => {
      formData.append('images', image);
    });

    Axios.post(`/vehicles/${idUser}`, formData)
      .then((result) => {
        console.log(result);
        router.back();
      })
      .catch((err) => {
        console.log('Error:', err.response);
        const message = err.response.data.error;
        toastify(message, 'warning');
      });
  };

  const deleteItem = () => {
    Axios.delete(`/vehicles/${idVehicles}`)
      .then((result) => {
        console.log(result);
        return router.push('/');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    setTotalStock(dataVehicles.stock);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // START = COUNTER STOCK

  const handleIncrement = () => {
    let currentValue = totalStock;
    currentValue += 1;
    setTotalStock(currentValue);
  };
  const handleDecrement = () => {
    if (totalStock === 1) {
      return null;
    } else {
      let currentValue = totalStock;
      currentValue -= 1;

      setTotalStock(currentValue);
    }
  };
  // END = COUNTER STOCK

  const myLoader = ({ src }) => {
    return `${dataVehicles.images[0]}`;
  };

  return (
    <MainLayout bgFooter="gray" title="Update new vehicles">
      <StyledAddingVehiclesPage className="container">
        <GoBackPage titleBack="Add New Item" />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-content">
            <div className="galery-wrapper">
              <div className="main">
                {!dataVehicles.images[0] && (
                  <div className="default">
                    <Image src={ILCamera} alt="camera" layout="fill" />
                  </div>
                )}
                {dataVehicles.images[0] && (
                  <Image
                    src={dataVehicles.images[0]}
                    loader={myLoader}
                    alt={dataVehicles.name}
                    layout="fill"
                  />
                )}
                <input
                  className="input-upload-file"
                  type="file"
                  multiple
                  name="images"
                  {...register('images')}
                />
              </div>

              <div className="item-wrapper">
                <div className="item">
                  <div className="icon-wrapper">
                    <Image src={ILCamera} alt="camera" layout="fill" />
                  </div>
                  <p>Click to add image</p>
                  {/* <input
                    className="input-upload-file"
                    type="file"
                    multiple
                    name="images"
                  /> */}
                </div>
                <div className="item">
                  <div className="icon-wrapper">
                    <Image src={ICPlusLight} alt="camera" layout="fill" />
                  </div>
                  <p>Add more</p>
                  {/* <input
                    className="input-upload-file"
                    type="file"
                    multiple
                    name="images"
                  /> */}
                </div>
              </div>
            </div>
            <div className="input-group-wrapper">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Name (max up to 50 words)"
                  defaultValue={dataVehicles.name}
                  {...register('name')}
                />
                <div className="line" />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  defaultValue={dataVehicles.location}
                  {...register('location')}
                />
                <div className="line" />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="description"
                  placeholder="Description (max up to 150 words)"
                  defaultValue={dataVehicles.description}
                  {...register('description')}
                />
                <div className="line" />
              </div>
              <div className="select-wrapper">
                <label htmlFor="price">Price :</label>
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  defaultValue={dataVehicles.price}
                  {...register('price')}
                />
              </div>
              <div className="select-wrapper">
                <label htmlFor="status">Status :</label>
                <Select
                  bg=" rgba(255, 255, 255, 0.5)"
                  variant="filled"
                  size="lg"
                  defaultValue={dataVehicles.status}
                  {...register('status')}
                >
                  <option value="available">Available</option>
                  <option value="full-booked">Full Booked</option>
                </Select>
              </div>
              <div className="select-wrapper counter-wrapper">
                <label htmlFor="status">Stock :</label>
                <div className="counter">
                  <div className="icon plus" onClick={handleIncrement}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.28 9.344C22.08 9.344 22.752 9.616 23.296 10.16C23.84 10.704 24.112 11.376 24.112 12.176C24.112 12.976 23.84 13.664 23.296 14.24C22.752 14.784 22.08 15.056 21.28 15.056H15.232V21.056C15.232 21.856 14.96 22.528 14.416 23.072C13.904 23.616 13.232 23.888 12.4 23.888C11.6 23.888 10.928 23.616 10.384 23.072C9.84 22.528 9.568 21.856 9.568 21.056V15.056H3.52C2.72 15.056 2.048 14.784 1.504 14.24C0.96 13.664 0.688 12.976 0.688 12.176C0.688 11.376 0.96 10.704 1.504 10.16C2.048 9.616 2.72 9.344 3.52 9.344H9.568V3.296C9.568 2.496 9.84 1.824 10.384 1.28C10.928 0.735999 11.6 0.464 12.4 0.464C13.2 0.464 13.872 0.735999 14.416 1.28C14.96 1.824 15.232 2.496 15.232 3.296V9.344H21.28Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className="count">{totalStock}</p>
                  <div className="icon minus" onClick={handleDecrement}>
                    <svg
                      width="18"
                      height="8"
                      viewBox="0 0 18 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.48106 7.448C1.82506 7.448 0.497063 6.328 0.497063 4.088C0.497063 1.88 1.82506 0.775999 4.48106 0.775999H13.5051C14.8491 0.775999 15.8411 1.064 16.4811 1.64C17.1531 2.216 17.4891 3.032 17.4891 4.088C17.4891 5.144 17.1531 5.976 16.4811 6.584C15.8411 7.16 14.8491 7.448 13.5051 7.448H4.48106Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-action">
            <Select
              bg=" rgba(255, 255, 255, 0.5)"
              variant="filled"
              size="lg"
              className="add-category"
              placeholder="Add item to"
              defaultValue={dataVehicles.type}
            >
              <option value="cars">Cars</option>
              <option value="motorbike">Motorbike</option>
            </Select>
            <Button type="light">Save changes</Button>
            <Button type="dark" onClick={deleteItem}>
              Delete
            </Button>
          </div>
        </form>
      </StyledAddingVehiclesPage>
    </MainLayout>
  );
};

export default AddVehicles;
