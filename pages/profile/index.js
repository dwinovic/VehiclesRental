import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as Yup from 'yup';
import { AVADefault } from '../../src/assets';
import { Button, DatePicker, MainLayout } from '../../src/components';
import Axios from '../../src/config/Axios';
import { updateUser } from '../../src/redux/actions/userAction';
import {
  breakpoints,
  phoneRegExp,
  requireAuthentication,
  toastify,
} from '../../src/utils';

const ProfileUserPage = ({ userData, avatar, roleUser, cookie, idUser }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user.user);
  const [uploadImage, setUploadImage] = useState([]);
  const [dateBorn, setDateBorn] = useState('');
  const [gender, setGender] = useState();
  const [previewImage, setpreviewImage] = useState();
  const validate = Yup.object({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required')
      .min(11, 'Password must be at least 11 charaters')
      .max(13, 'Password must be less than 13 charaters'),
  });

  const date = new Date(userData?.createdAt);
  const fullDate =
    (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
    '/' +
    (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
    '/' +
    date.getFullYear();

  // HANDLE CHANGE IMAGES
  const changeAvatar = (e) => {
    const file = e.target.files[0];
    if (
      file.type === 'image/jpeg' ||
      file.type === 'image/jpg' ||
      file.type === 'image/png' ||
      file.type === 'image/gif'
    ) {
      if (file.size > 1048576 * 2) {
        toastify('Max size file is 2 mb', 'error');
      } else {
        setUploadImage(file);
        setpreviewImage(URL.createObjectURL(file));
      }
    } else {
      toastify('Only image is allowed', 'error');
    }
    // console.log(file);
  };

  // START = SUBMIT CHANGES

  if (!userData) {
    return null;
  }
  // console.log('userData', userData);
  return (
    <MainLayout
      bgFooter="gray"
      title={userData.name}
      avatar={avatar}
      session={roleUser ? 'login' : false}
    >
      <StyledProfileUser className="container">
        <h1 className="heading-page">Profile</h1>
        <section className="profile-section">
          <div className="avatar-wrapper">
            {!previewImage && !userState && (
              <Image src={AVADefault} alt="username" layout="fill" />
            )}
            {(previewImage || userState) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="preview-img"
                src={previewImage ? previewImage : userState.avatar}
                alt="camera"
              />
            )}

            <div className="edit-avatar">
              <input
                type="file"
                className="change-avatar"
                onChange={(e) => changeAvatar(e)}
              />
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1038 1.71026C13.3158 1.48508 13.5674 1.30646 13.8443 1.18459C14.1212 1.06272 14.418 1 14.7177 1C15.0174 1 15.3142 1.06272 15.5911 1.18459C15.868 1.30646 16.1196 1.48508 16.3315 1.71026C16.5435 1.93544 16.7116 2.20276 16.8263 2.49697C16.941 2.79118 17 3.10651 17 3.42497C17 3.74342 16.941 4.05875 16.8263 4.35296C16.7116 4.64717 16.5435 4.9145 16.3315 5.13968L5.43807 16.714L1 18L2.21038 13.2845L13.1038 1.71026Z"
                  stroke="#393939"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h2 className="heading-playfair">{userState.name}</h2>
          <p className="text-nunito-bold">{userState.email}</p>
          {userState.phone && (
            <p className="text-nunito-bold">{userState.phone}</p>
          )}
          <p className="text-nunito-bold">Has been active since {fullDate}</p>
          <RadioGroup
            defaultValue={userState.gender}
            className="select-gender"
            onChange={(e) => setGender(e)}
            // defaultChecked="male"
            // defaultValue="male"
          >
            <Stack spacing={5} direction="row">
              <Radio name="male" size="lg" colorScheme="orange" value="male">
                Male
              </Radio>
              <Radio
                name="female"
                size="lg"
                colorScheme="orange"
                value="female"
              >
                Female
              </Radio>
            </Stack>
          </RadioGroup>
        </section>
        <Formik
          initialValues={{
            name: userState.name || '',
            email: userState.email,
            address: userState.address || '',
            phone: userState.phone || '',
          }}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            const dataForm = {
              avatar: uploadImage,
              gender,
              birth: dateBorn,
              ...values,
            };
            dispatch(updateUser(dataForm, router, cookie));
            resetForm();
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <div className="profile-update">
                <h4 className="heading-section-form">Contacts</h4>
                <div className="input-group">
                  <label htmlFor="born">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Type your name"
                    {...formik.getFieldProps('name')}
                  />
                  <div className="line" />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="input-error">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email address:</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    disabled
                    {...formik.getFieldProps('email')}
                  />
                  <div className="line" />
                </div>
                <div className="input-group">
                  <label htmlFor="address">Adress :</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Your address"
                    {...formik.getFieldProps('address')}
                  />
                  <div className="line" />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="input-error">{formik.errors.address}</div>
                  ) : null}
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Mobile number :</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    {...formik.getFieldProps('phone')}
                  />
                  <div className="line" />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="input-error">{formik.errors.phone}</div>
                  ) : null}
                </div>
                <div className="input-group">
                  <div className="input-group">
                    <label htmlFor="born">DD/MM/YY</label>
                    <DatePicker
                      onChange={(e) => {
                        setDateBorn(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="action-button">
                <Button theme="light" type="submit">
                  Save Change
                </Button>
                {/* <Button theme="dark">Edit Password</Button> */}
                <Button theme="dark" onClick={formik.handleReset}>
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </StyledProfileUser>
    </MainLayout>
  );
};

export const getServerSideProps = requireAuthentication(async (context) => {
  try {
    const { req, res, params } = context;
    let avatar = null;
    if (res.avatar) {
      avatar = res.avatar;
    }
    const idUser = res.idUser;
    const roleUser = res.role;
    const cookie = context.req.headers.cookie;

    const result = await Axios(`/users/${idUser}`, {
      withCredentials: true,
      headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
    });
    const dataResponse = result.data.data[0];

    console.log('dataResponse server', dataResponse);

    return {
      props: {
        userData: dataResponse,
        avatar,
        roleUser,
        cookie,
        idUser,
      },
    };
  } catch (error) {
    console.log('error server', error);
    return {
      props: { userData: null },
    };
  }
});

// START = STYLING FOR THIS PAGE
const StyledProfileUser = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  .profile-section {
    margin-top: 57px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar-wrapper {
      position: relative;
      width: 200px;
      height: 200px;
      margin-bottom: 2rem;
      .edit-avatar {
        width: 50px;
        height: 50px;
        background: #ffcd61;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
        .change-avatar {
          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 0;
          &:hover {
            cursor: pointer;
          }
        }
      }
      img {
        border-radius: 100%;
        object-fit: cover;
        &.preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .heading-playfair {
      margin-bottom: 2rem;
      ${breakpoints.lessThan('md')`
      font-size: 36px;
    `}
    }
    .text-nunito-bold {
      margin-bottom: 12px;
      ${breakpoints.lessThan('md')`
      font-size: 18px; 
      font-weight: 500;
    `}
    }
    .select-gender {
      margin-top: 2rem;
    }
  }
  .profile-update {
    .heading-section-form {
      font-family: Nunito;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 33px;
      color: #4f5665;
      margin: 30px 0;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 2rem;
      label {
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        color: #9f9f9f;
      }
      input {
        background-color: transparent;
        padding: 8px 0;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 50px;
        color: #000000;
        &:focus {
          outline: none;
        }
      }
      .line {
        border: 1px solid #9f9f9f;
      }
      .input-error {
        color: red;
        font-weight: 500;
      }
    }
  }
  .action-button {
    display: flex;
    gap: 2rem;
    margin-top: 100px;
    ${breakpoints.lessThan('sm')`
      flex-direction: column; 
      gap: 1rem; 
      button {
        height: 48px;
        font-size: 18px;
      }
    `}
  }
`;
// END = STYLING FOR THIS PAGE

export default ProfileUserPage;
