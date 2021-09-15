/* eslint-disable @next/next/no-img-element */
import { Select } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { ICPlusLight, ILCamera } from '../../../src/assets';
import { Button, GoBackPage, Input, MainLayout } from '../../../src/components';
import Axios from '../../../src/config/Axios';
import {
  breakpoints,
  requireAuthenticationAdmin,
  toastify,
} from '../../../src/utils';

const AddVehicles = ({ roleUser, avatar, cookie, categories, idUser }) => {
  const router = useRouter();
  const validate = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .max(50, 'Maximum 50 character'),
    location: Yup.string().required('Location is required'),
    description: Yup.string().max(150, 'Maximum 150 character'),
    price: Yup.number('Price must be a number')
      .required('Price is required')
      .nullable(),
  });

  const [totalStock, setTotalStock] = useState(1);
  // START = UPLOAD IMAGE
  const [uploadImage, setUploadImage] = useState([]);
  const [previewImage1, setpreviewImage1] = useState();
  const [previewImage2, setpreviewImage2] = useState();
  const [previewImage3, setpreviewImage3] = useState();

  // START = UPLOAD IMAGE

  const actionSubmitData = (data) => {
    const formData = new FormData();

    // console.log({
    //   idOwner: idUser,
    //   name: data.name,
    //   location: data.location,
    //   description: data.description,
    //   price: data.price,
    //   category: data.category,
    //   stock: totalStock,
    //   status: 'available',
    // });
    formData.append('idOwner', idUser);
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('stock', totalStock);
    formData.append('capacity', 2);
    formData.append('paymentOption', 'per day');
    formData.append('status', 'available');
    // formData.append('images', uploadImage);

    // console.log('data.image1', data.image1);

    const imagesExist = [];

    uploadImage.forEach((image) => {
      // console.log('image before', typeof image);
      if (image !== false && image !== undefined) {
        formData.append('images', image);
        imagesExist.push(image);
        // console.log('image true', image);
      }
    });

    // console.log('uploadImage', uploadImage);
    // console.log('imagesExist', imagesExist);
    if (imagesExist.length === 0) {
      return toastify('Upps, Images required!', 'warning');
    }
    // console.log('imagesExist.length', imagesExist.length);
    // return;

    Axios.post('/vehicles', formData, {
      withCredentials: true,
      cookie: cookie,
    })
      .then((result) => {
        // console.log(result);
        toastify('Success ad vehicles', 'success');
        router.replace(`/vehicles/${result.data.data.idVehicles}`);
      })
      .catch((err) => {
        console.log('Error:', err.response);
        const message = err.response.data.error;
        toastify(message, 'warning');
      });
  };

  const handleImage1 = (e) => {
    if (
      e.target.files[0].type === 'image/jpeg' ||
      e.target.files[0].type === 'image/jpg' ||
      e.target.files[0].type === 'image/png' ||
      e.target.files[0].type === 'image/gif'
    ) {
      if (e.target.files[0].size > 1048576 * 2) {
        toastify('Max size file is 2 mb', 'error');
      } else {
        // images.push(image1);
        setUploadImage([...uploadImage, e.target.files[0]]);
        setpreviewImage1(URL.createObjectURL(e.target.files[0]));
      }
    } else {
      toastify('Only image is allowed', 'error');
      setpreviewImage1(previewImage1 ? previewImage1 : null);
    }
  };

  const handleImage2 = (e) => {
    if (
      e.target.files[0].type === 'image/jpeg' ||
      e.target.files[0].type === 'image/jpg' ||
      e.target.files[0].type === 'image/png' ||
      e.target.files[0].type === 'image/gif'
    ) {
      if (e.target.files[0].size > 1048576 * 2) {
        toastify('Max size file is 2 mb', 'error');
      } else {
        // images.push(image1);
        setUploadImage([...uploadImage, e.target.files[0]]);
        setpreviewImage2(URL.createObjectURL(e.target.files[0]));
      }
    } else {
      toastify('Only image is allowed', 'error');
      setpreviewImage2(previewImage2 ? previewImage2 : null);
    }
  };
  const handleImage3 = (e) => {
    if (
      e.target.files[0].type === 'image/jpeg' ||
      e.target.files[0].type === 'image/jpg' ||
      e.target.files[0].type === 'image/png' ||
      e.target.files[0].type === 'image/gif'
    ) {
      if (e.target.files[0].size > 1048576 * 2) {
        toastify('Max size file is 2 mb', 'error');
      } else {
        // images.push(image1);
        setUploadImage([...uploadImage, e.target.files[0]]);
        setpreviewImage3(URL.createObjectURL(e.target.files[0]));
      }
    } else {
      toastify('Only image is allowed', 'error');
      setpreviewImage3(previewImage3 ? previewImage3 : null);
    }
  };

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
  return (
    <MainLayout
      bgFooter="gray"
      title="Add new vehicles"
      session={roleUser ? 'login' : false}
      avatar={avatar}
    >
      <StyledAddingVehiclesPage className="container">
        <GoBackPage titleBack="Add New Item" />
        <Formik
          initialValues={{
            name: '',
            location: '',
            description: '',
            price: '',
            status: '',
            category: '',
            description: '',
          }}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            actionSubmitData(values);
          }}
        >
          {({
            values,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            errors,
          }) => (
            <Form onSubmit={handleSubmit} className="form">
              <div className="form-content">
                <div className="galery-wrapper">
                  <div className="main">
                    {!previewImage1 && (
                      <div className="default">
                        <Image src={ILCamera} alt="camera" layout="fill" />
                      </div>
                    )}
                    {previewImage1 && (
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
                      onChange={(e) => handleImage1(e)}
                    />
                  </div>
                  <div className="item-wrapper">
                    <div className="item">
                      {!previewImage2 && (
                        <div className="default-wrapper">
                          <div className="icon-wrapper">
                            <Image src={ILCamera} alt="camera" layout="fill" />
                          </div>
                          <p>Click to add image</p>
                        </div>
                      )}
                      {previewImage2 && (
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
                        onChange={(e) => handleImage2(e)}
                      />
                    </div>
                    <div className="item">
                      {!previewImage3 && (
                        <div className="default-wrapper">
                          <div className="icon-wrapper">
                            <Image
                              src={ICPlusLight}
                              alt="camera"
                              layout="fill"
                            />
                          </div>
                          <p>Add more</p>
                        </div>
                      )}
                      {previewImage3 && (
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
                        onChange={(e) => handleImage3(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="input-group-wrapper">
                  <div className="input-wrapper">
                    <input
                      className="input-data"
                      type="text"
                      name="name"
                      placeholder="Name (max up to 50 words)"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <div className="line" />
                    {touched.name && errors.name ? (
                      <div className="input-error">{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location}
                    />
                    <div className="line" />
                    {touched.location && errors.location ? (
                      <div className="input-error">{errors.location}</div>
                    ) : null}
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="description"
                      placeholder="Description (max up to 150 words)"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                    <div className="line" />
                    {touched.description && errors.description ? (
                      <div className="input-error">{errors.description}</div>
                    ) : null}
                  </div>
                  <div className="select-wrapper">
                    <label htmlFor="price">Price :</label>
                    <Input
                      name="price"
                      type="text"
                      placeholder="Price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    />
                    {touched.price && errors.price ? (
                      <div className="input-error">{errors.price}</div>
                    ) : null}
                  </div>
                  <div className="select-wrapper">
                    <label htmlFor="status">Status :</label>
                    <Select
                      bg=" rgba(255, 255, 255, 0.5)"
                      variant="filled"
                      size="lg"
                      defaultValue="available"
                      name="status"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.status}
                    >
                      <option value="available">Available</option>
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
                  // {...register('category')}
                  name="category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                >
                  {/* <option
                onClick={() => {
                  // console.log('open');
                  return onOpen;
                }}
              >
                Add item to
              </option> */}
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
                {touched.category && errors.category ? (
                  <div className="input-error">{errors.category}</div>
                ) : null}
                <Button
                  disabled={
                    !isValid ||
                    (Object.keys(touched).length === 0 &&
                      touched.constructor === Object)
                  }
                  theme="light"
                >
                  Save item
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </StyledAddingVehiclesPage>
    </MainLayout>
  );
};

export const getServerSideProps = requireAuthenticationAdmin(
  async (context) => {
    try {
      const { req, res } = context;
      const avatar = res.avatar;
      const roleUser = res.role;
      const idUser = res.idUser;
      const cookie = context.req.headers.cookie;

      const resCategories = await Axios.get(`/category`);
      const categories = resCategories.data.data;

      return {
        props: {
          avatar,
          roleUser,
          cookie,
          categories,
          idUser,
        },
      };
    } catch (error) {}
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
            .default-wrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .icon-wrapper {
                width: 65px;
                height: 70px;
                position: relative;
                img {
                  object-fit: contain;
                }
              }
              p {
                font-family: Nunito;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 24px;
                color: #b8becd;
              }
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
            width: 100%;

            background-color: transparent;
            &:focus {
              outline: none;
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
      .add-category {
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
    }
    .input-error {
      color: red;
      margin-top: 8px;
    }
  }
`;
export default AddVehicles;
