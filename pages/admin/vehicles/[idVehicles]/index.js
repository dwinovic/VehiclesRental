import {
  Button as ButtonChakra,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ICDelete, ICPlusLight, ILCamera } from '../../../../src/assets';
import { Button, GoBackPage, MainLayout } from '../../../../src/components';
import Axios from '../../../../src/config/Axios';
import {
  breakpoints,
  requireAuthenticationAdmin,
  toastify,
} from '../../../../src/utils';

const AddVehicles = ({ dataVehicle, roleUser, avatar, categories, cookie }) => {
  const { data: vehicle, statusCode } = dataVehicle;
  // console.log('categories', categories);
  const router = useRouter();
  const idVehicles = router.query.idVehicles;

  const [totalStock, setTotalStock] = useState(1);

  // START = MODAL
  const { isOpen, onOpen, onClose } = useDisclosure();
  // END = MODAL

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm();
  // START = CATEGORIES
  // END = CATEGORIES
  // START = UPLOAD IMAGE
  const [uploadImage, setUploadImage] = useState([]);
  const [previewImage1, setpreviewImage1] = useState(vehicle.images[0]);
  const [previewImage2, setpreviewImage2] = useState(vehicle.images[1]);
  const [previewImage3, setpreviewImage3] = useState(vehicle.images[2]);
  const [deleteActive, setDeleteActive] = useState(false);

  const handleInputImageProduct = async () => {
    try {
      const image1 = getValues('image1')[0];
      const image2 = getValues('image2')[0];
      const image3 = getValues('image3')[0];
      const images = [];

      if (image1) {
        const formData = new FormData();
        formData.append('avatar', image1);
        Axios.post(`/vehicles/images`, formData, { withCredentials: true })
          .then(() => {
            images.push(image1);
            setpreviewImage1(URL.createObjectURL(image1));
          })
          .catch((err) => {
            const message = err.response.data.message;
            toastify(message, 'error');
          });
      } else {
        // images.push(vehicle.images[0]);
      }
      if (image2) {
        const formData = new FormData();

        formData.append('avatar', image2);
        Axios.post(`/vehicles/images`, formData, { withCredentials: true })
          .then(() => {
            images.push(image2);
            setpreviewImage2(URL.createObjectURL(image2));
          })
          .catch((err) => {
            const message = err.response.data.message;
            toastify(message, 'error');
          });
      } else {
        // images.push(vehicle.images[1]);
      }
      if (image3) {
        const formData = new FormData();

        formData.append('avatar', image3);
        Axios.post(`/vehicles/images`, formData, { withCredentials: true })
          .then(() => {
            images.push(image3);
            setpreviewImage3(URL.createObjectURL(image3));
          })
          .catch((err) => {
            const message = err.response.data.message;
            toastify(message, 'error');
          });
      } else {
        // images.push(vehicle.images[2]);
      }

      // Check Default Images
      if (setpreviewImage1) {
        // console.log('previewImage1', previewImage1);
        images.push(previewImage1);
      }
      if (setpreviewImage2) {
        // console.log('previewImage2', previewImage2);
        images.push(previewImage2);
      }
      if (setpreviewImage3) {
        // console.log('previewImage3', previewImage3);
        images.push(previewImage3);
      }

      setUploadImage(images);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    // setUploadImage(vehicle.images);
    setTotalStock(vehicle.stock);
  }, [vehicle.stock]);

  // useEffect(() => {
  //   setUploadImage(vehicle.images);
  // }, [vehicle.images]);

  const onSubmit = (data) => {
    const idVehicles = router.query.idVehicles;
    // console.log('token', token);
    // const checkDataSend = {
    //   idVehicles,
    //   name: data.name,
    //   location: data.location,
    //   description: data.description,
    //   price: data.price,
    //   category: data.category,
    //   stock: totalStock,
    //   capacity: 2,
    //   paymentOption: 'per day',
    //   status: data.status,
    // };

    // console.log('checkDataSend', checkDataSend);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('stock', totalStock);
    formData.append('capacity', 2);
    formData.append('paymentOption', 'per day');
    formData.append('status', data.status);
    // formData.append('images', uploadImage);

    // console.log('data.image1', data.image1);
    // console.log('uploadImage 1', uploadImage);

    // if (uploadImage.length === 0) {
    //   images.push(vehicle.images);
    //   console.log('vehicle.images', vehicle.images);
    // } else {
    //   images.push(uploadImage);
    // }

    const imagesExist = [];

    uploadImage.forEach((image) => {
      // console.log('image before', typeof image);
      if (image !== false && image !== undefined) {
        formData.append('images', image);
        imagesExist.push(image);
        console.log('image true', image);
      }
    });

    // console.log('uploadImage', uploadImage);
    // console.log('imagesExist', imagesExist);
    if (imagesExist.length === 0) {
      return toastify('Upps, Images required!', 'warning');
    }
    // console.log('imagesExist.length', imagesExist.length);
    // return;
    return Axios.patch(`/vehicles/${idVehicles}`, formData, {
      withCredentials: true,
      cookie: cookie,
    })
      .then((result) => {
        // console.log(result);
        toastify('Success update vehicles', 'success');
        router.replace(`/vehicles/${idVehicles}`);
      })
      .catch((err) => {
        console.log('Error:', err);
        const message = err.response.data.error;
        toastify(message, 'warning');
      });
    console.log(2);
  };

  const deleteItem = () => {
    Axios.delete(`/vehicles/${idVehicles}`, {
      withCredentials: true,
      cookie: cookie,
    })
      .then((result) => {
        // console.log(result);
        toastify(`Success deleted ${vehicle.name}`, 'success');
        return router.push('/');
      })
      .catch((err) => {
        // console.log(err.response);
        toastify(err.response?.data.message, 'error');
      });
  };

  useEffect(() => {
    setTotalStock(vehicle.stock);
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

  // START = DELETE IMAGE
  const deleteImage = (order) => {
    deleteActive ? setDeleteActive(false) : setDeleteActive(true);
    switch (order) {
      case '0':
        setpreviewImage1(false);
        break;
      case '1':
        setpreviewImage2(false);
        break;
      case '2':
        setpreviewImage3(false);
        break;
      default:
        break;
    }
  };

  // END = DELETE IMAGE
  useEffect(() => {
    handleInputImageProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('image1'), watch('image2'), watch('image3'), deleteActive]);

  const myLoader = ({ src }) => {
    return `${vehicle.images[0]}`;
  };

  if (statusCode !== 200) {
    return <h1>Kooosong</h1>;
  }

  return (
    <MainLayout
      bgFooter="gray"
      title={`Update | ${vehicle.name}`}
      avatar={avatar}
      session={roleUser ? 'login' : false}
    >
      <StyledAddingVehiclesPage className="container">
        <GoBackPage titleBack="Add New Item" />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-content">
            <div className="galery-wrapper">
              <div className="main">
                {!previewImage1 && (
                  <div className="default">
                    <Image src={ILCamera} alt="camera" layout="fill" />
                  </div>
                )}
                {previewImage1 && (
                  <div className="icon-trash">
                    <Image
                      width={32}
                      height={32}
                      src={ICDelete}
                      alt="trash"
                      onClick={() => deleteImage('0')}
                    />
                  </div>
                )}
                {previewImage1 && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="preview-img"
                    src={previewImage1}
                    alt="camera"
                  />
                )}
                <input
                  className="input-upload-file"
                  type="file"
                  name="image1"
                  {...register('image1')}
                />
              </div>
              <div className="item-wrapper">
                <div className="item">
                  {!previewImage2 && (
                    <div>
                      <div className="icon-wrapper">
                        <Image src={ILCamera} alt="camera" layout="fill" />
                      </div>
                      <p>Click to add image</p>
                    </div>
                  )}
                  {previewImage2 && (
                    <div
                      className="icon-trash"
                      onClick={() => deleteImage('1')}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={ICDelete}
                        alt="trash"
                      />
                    </div>
                  )}
                  {previewImage2 && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="preview-img"
                      src={previewImage2}
                      alt="camera"
                    />
                  )}
                  <input
                    className="input-upload-file"
                    type="file"
                    name="image2"
                    {...register('image2')}
                  />
                </div>
                <div className="item">
                  {!previewImage3 && (
                    <div>
                      <div className="icon-wrapper">
                        <Image src={ICPlusLight} alt="camera" layout="fill" />
                      </div>
                      <p>Add more</p>
                    </div>
                  )}
                  {previewImage3 && (
                    <div
                      className="icon-trash"
                      onClick={() => deleteImage('2')}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={ICDelete}
                        alt="trash"
                      />
                    </div>
                  )}
                  {previewImage3 && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="preview-img"
                      src={previewImage3}
                      alt="camera"
                    />
                  )}
                  <input
                    className="input-upload-file"
                    type="file"
                    name="image3"
                    {...register('image3')}
                  />
                </div>
              </div>
            </div>
            <div className="input-group-wrapper">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Name (max up to 50 words)"
                  defaultValue={vehicle.name}
                  {...register('name')}
                />
                <div className="line" />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  defaultValue={vehicle.location}
                  {...register('location')}
                />
                <div className="line" />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="description"
                  placeholder="Description (max up to 150 words)"
                  defaultValue={vehicle.description}
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
                  defaultValue={vehicle.price}
                  {...register('price')}
                />
              </div>
              <div className="select-wrapper">
                <label htmlFor="status">Status :</label>
                <Select
                  bg=" rgba(255, 255, 255, 0.5)"
                  variant="filled"
                  size="lg"
                  defaultValue={vehicle.status}
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
              placeholder={vehicle.category}
              defaultValue={vehicle.idCategory}
              {...register('category')}
            >
              {categories &&
                categories.map((category) => {
                  return (
                    <option
                      key={category.idCategory}
                      value={category.idCategory}
                    >
                      {category.name}
                    </option>
                  );
                })}
            </Select>
            <Button theme="light">Save changes</Button>
            <div className="button-delete-dark" onClick={onOpen}>
              Delete
            </div>
          </div>
        </form>
        <CustomModal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure to delete?</ModalHeader>
            <ModalBody>
              <Heading as="h5" size="lg">
                {vehicle.name}
              </Heading>
            </ModalBody>
            <ModalCloseButton />
            <ModalFooter>
              <ButtonChakra mr={3} colorScheme="red" onClick={deleteItem}>
                Yes
              </ButtonChakra>
              <ButtonChakra onClick={onClose}>Cancel</ButtonChakra>
            </ModalFooter>
          </ModalContent>
        </CustomModal>
      </StyledAddingVehiclesPage>
    </MainLayout>
  );
};

export const getServerSideProps = requireAuthenticationAdmin(
  async (context) => {
    let dataVehicle;
    try {
      const { req, res, params } = context;
      const avatar = res.avatar;
      const roleUser = res.role;
      const cookie = context.req.headers.cookie;

      const resDataVehicle = await Axios.get(`/vehicles/${params.idVehicles}`, {
        withCredentials: true,
        headers: context.req
          ? { cookie: context.req.headers.cookie }
          : undefined,
      });
      dataVehicle = resDataVehicle.data;

      const resCategories = await Axios.get(`/category`);
      const categories = resCategories.data.data;
      // console.log('categories', categories);

      // Pass post data to the page via props
      return {
        props: {
          dataVehicle,
          avatar,
          roleUser,
          categories,
          cookie,
        },
      };
    } catch (error) {
      dataVehicle = error.response;
      return { props: { dataVehicle } };
    }
  }
);

const StyledAddingVehiclesPage = styled.div`
  padding-top: 50px;
  .form {
    /* background-color: yellow; */
    .form-content {
      /* background-color: red; */
      display: flex;
      gap: 2rem;
      ${breakpoints.lessThan('md')`
        flex-direction: column; 
      `}
      .galery-wrapper {
        /* background-color: blue; */
        ${breakpoints.lessThan('2xl')`
            width:50%;
          `}
        ${breakpoints.lessThan('md')`
          width: 100%;
        `} 
        .input-upload-file {
          opacity: 0;
          height: 100%;
          position: absolute;
          &:hover {
            cursor: pointer;
          }
        }
        .icon-trash {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: white;
          z-index: 1;
          &:hover {
            opacity: 0.5;
            cursor: pointer;
          }
        }
        .main {
          width: 616px;
          height: 412px;
          background: #f5f5f6;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 0;

          img {
            border-radius: 25px;
            object-fit: cover;
            &.preview-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          ${breakpoints.lessThan('2xl')`
            width: 100%;
            height: 380px;
          `}

          .default {
            position: relative;
            width: 130px;
            height: 100px;
          }
        }
        .item-wrapper {
          display: flex;
          margin-top: 1rem;
          gap: 1rem;
          .item {
            background: #f5f5f6;
            border-radius: 10px;
            width: 290px;
            height: 164px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            position: relative;
            ${breakpoints.lessThan('md')`
              width: 50%;
            `}
            ${breakpoints.lessThan('2xl')`
            `}
            .icon-wrapper {
              width: 65px;
              height: 70px;
              position: relative;
            }
            p {
              font-family: Nunito;
              font-style: normal;
              font-weight: bold;
              font-size: 18px;
              line-height: 24px;
              color: #b8becd;
            }
            img {
              border-radius: 25px;
              object-fit: cover;
              &.preview-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
      .input-group-wrapper {
        flex: 1;
        width: 50%;
        ${breakpoints.lessThan('md')`
          width: 100%;
      `}
        .input-wrapper {
          margin-bottom: 1rem;
          input {
            font-family: Nunito;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 24px;
            color: #80918e;
            background-color: transparent;
            &:focus {
              outline: none;
              width: 100%;
            }
          }
          .line {
            margin-top: 22px;
            border: 1px solid #9f9f9f;
          }
        }
        .select-wrapper {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          label {
            font-family: Playfair Display;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
            color: #393939;
            margin-bottom: 20px;
          }
          input {
            background: #f5f5f6;
            color: #80918e;
            height: 80px;
            padding: 15px;
            font-family: Nunito;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 24px;
            color: #80918e;
            &:focus {
              outline: none;
            }
          }
          select {
            background: #f5f5f6;
            height: 83px;
          }
          &.counter-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 2rem;
            .counter {
              display: flex;
              gap: 2rem;
              align-items: center;
              justify-content: center;
              .icon {
                border-radius: 10px;
                box-sizing: border-box;
                height: 40px;
                width: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                &:hover {
                  opacity: 0.6;
                  cursor: pointer;
                }
                &.plus {
                  background: #ffcd61;
                }
                &.minus {
                  background: rgba(203, 203, 212, 0.2);
                }
              }
              .count {
                font-family: Nunito;
                font-style: normal;
                font-weight: 900;
                font-size: 24px;
                line-height: 25px;
                color: #393939;
              }
            }
          }
        }
      }
    }
    .form-action {
      display: flex;
      margin-top: 2rem;
      gap: 2rem;
      .add-category,
      .button-delete-dark {
        background: #393939;
        border-radius: 10px;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 25px;
        display: flex;
        align-items: center;
        color: #ffcd61;
        height: 80px;
      }
      .button-delete-dark {
        width: 60%;
        justify-content: center;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

const CustomModal = styled(Modal)`
  background-color: yellow;
  /* START = BUTTON DELETE ACTION */
  .btn-delete {
    background-color: blue;
    height: 45px;
  }
  /* END = BUTTON DELETE ACTION */
`;

export default AddVehicles;
