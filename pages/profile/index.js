import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { AVADefault } from '../../src/assets';
import { Button, DatePicker, MainLayout } from '../../src/components';
import Axios from '../../src/config/Axios';
import { breakpoints, requireAuthentication, toastify } from '../../src/utils';

const ProfileUserPage = ({ userData, avatar, roleUser, cookie, idUser }) => {
  // console.log('userData', userData);
  const [value, setValue] = useState();
  const [uploadImage, setUploadImage] = useState([]);
  const [dateBorn, setDateBorn] = useState('');
  const [previewImage, setpreviewImage] = useState(userData?.avatar);
  // console.log(userData);

  // START = HANDLE FORM
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  // END = HANDLE FORM
  // console.log(userData?.avatar, 3);

  const date = new Date(userData?.createdAt);
  const fullDate =
    (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
    '/' +
    (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
    '/' +
    date.getFullYear();
  // console.log(userData);
  // HANDLE CHANGE IMAGES
  const changeAvatar = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('avatar', file);
    // console.log(file);
    Axios.post(`/vehicles/images`, formData, { withCredentials: true })
      .then(() => {
        setUploadImage(file);
        setpreviewImage(URL.createObjectURL(file));
      })
      .catch((err) => {
        const message = err.response.data.message;
        toastify(message, 'error');
      });
  };

  // START = SUBMIT CHANGES

  const onSubmit = (data) => {
    // console.log('token', token);
    // const checkDataSend = {
    //   idUser,
    //   avatar: uploadImage,
    //   address: data.address,
    //   phone: data.phone,
    //   born: dateBorn,
    //   name: data.name,
    // };
    // console.log('checkDataSend', checkDataSend);
    const formData = new FormData();
    // formData.append('avatar', uploadImage);
    formData.append('name', data.name);
    // formData.append('born', dateBorn);
    // formData.append('phone', data.phone);
    // formData.append('address', data.address);

    if (uploadImage) {
      formData.append('avatar', uploadImage);
    }

    // console.log('uploadImage', uploadImage);
    // console.log('imagesExist', imagesExist);

    // console.log('imagesExist.length', imagesExist.length);
    // return;
    // console.log('cookie', cookie);
    // console.log(checkDataSend);
    // console.log(1);
    Axios.patch(`/users/${idUser}`, formData, {
      withCredentials: true,
      cookie: cookie,
    })
      .then((result) => {
        // console.log(result);
        toastify('Success update user', 'success');
        router.replace(`/profile`);
      })
      .catch((err) => {
        console.log('Error:', err);
        return;
        // const message = err.response.data.error;
        toastify('message', 'warning');
      });
    // console.log(2);
  };
  // END = SUBMIT CHANGES

  // START = CANCEL STATE
  // useEffect(() => {
  //   reset(userData);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [reset]);

  const cancelChanges = () => {
    return reset({
      avatar: userData.avatar,
      address: userData.address,
      phone: userData.phone,
      born: userData.born,
      name: userData.name,
    });
  };
  // END = CANCEL STATE

  if (!userData) {
    return null;
  }
  console.log('previewImage', previewImage);
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
            {!previewImage && (
              <Image src={AVADefault} alt="username" layout="fill" />
            )}
            {previewImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="preview-img" src={previewImage} alt="camera" />
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
          <h2 className="heading-playfair">{userData.name}</h2>
          <p className="text-nunito-bold">{userData.email}</p>
          {userData.phone && (
            <p className="text-nunito-bold">{userData.phone}</p>
          )}
          <p className="text-nunito-bold">Has been active since {fullDate}</p>
          <RadioGroup defaultValue={userData.gender} className="select-gender">
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
        <form className="profile-update">
          <h4 className="heading-section-form">Contacts</h4>
          <div className="input-group">
            <label htmlFor="born">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={userData.name}
              placeholder="Your date of birth"
              {...register('name')}
            />
            <div className="line" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email address:</label>
            <input
              id="email"
              name="email"
              type="text"
              defaultValue={userData.email}
              disabled
            />
            <div className="line" />
          </div>
          <div className="input-group">
            <label htmlFor="address">Adress :</label>
            <input
              id="address"
              type="text"
              name="address"
              defaultValue={userData.address}
              placeholder="Your address"
              {...register('address')}
            />
            <div className="line" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Mobile number :</label>
            <input
              type="text"
              id="phone"
              name="phone"
              defaultValue={userData.phone}
              placeholder="Your phone number"
              {...register('phone')}
            />
            <div className="line" />
          </div>
          {/* <h4 className="heading-section-form">Identity</h4> */}
          <div className="input-group-two">
            {/* <div className="input-group">
              <label htmlFor="username">Display name :</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="zulaikha"
              />
              <div className="line" />
            </div> */}
            <div className="input-group">
              <label htmlFor="born">DD/MM/YY</label>
              {/* <input
                type="text"
                id="born"
                name="born"
                defaultValue={userData.born}
                placeholder="Your date of birth"
                {...register('born')}
              /> */}
              <DatePicker
                onChange={(e) => {
                  setDateBorn(e.target.value);
                }}
              />
              {/* <div className="line" /> */}
            </div>
          </div>
        </form>
        <div className="action-button">
          <Button type="light" onClick={handleSubmit(onSubmit)}>
            Save Change
          </Button>
          <Button type="dark">Edit Password</Button>
          <Button onClick={cancelChanges}>Cancel</Button>
        </div>
      </StyledProfileUser>
    </MainLayout>
  );
};

export const getServerSideProps = requireAuthentication(async (context) => {
  try {
    const { req, res, params } = context;
    const avatar = res.avatar;
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
  form.profile-update {
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
