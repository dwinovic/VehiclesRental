import { Button, MainLayout } from '../../../src/components';
import Image from 'next/image';
import { AVADefault } from '../../../src/assets';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../src/utils';
import Axios from '../../../src/config/Axios';

const ProfileUserPage = ({ userData }) => {
  // console.log(userData);
  const [value, setValue] = useState();
  const [previewImage, setpreviewImage] = useState(userData?.avatar);

  const date = new Date(userData?.createdAt);
  const fullDate =
    (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
    '/' +
    (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
    '/' +
    date.getFullYear();
  console.log(userData);
  // HANDLE CHANGE IMAGES
  const changeAvatar = (e) => {
    const file = e.target.files;
    const formData = new FormData();
    formData.append('avatar', file);
    console.log(file);
    Axios.patch(`/users/${userData.idUser}`)
      .then((res) => {
        const prevAvatar = URL.createObjectURL(file);
        console.log(prevAvatar);
        console.log(res);
        setpreviewImage(prevAvatar);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <MainLayout bgFooter="gray" title={userData.name}>
      <StyledProfileUser className="container">
        <h1 className="heading-page">Profile</h1>
        <section className="profile-section">
          <div className="avatar-wrapper">
            <Image
              src={previewImage ? previewImage : AVADefault}
              alt="username"
              layout="fill"
            />
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
            <label htmlFor="email">Email address:</label>
            <input
              id="email"
              name="email"
              type="text"
              defaultValue={userData.email}
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
              <input
                type="text"
                id="born"
                name="born"
                defaultValue={userData.born}
                placeholder="Your date of birth"
              />
              <div className="line" />
            </div>
          </div>
          <div className="action-button">
            <Button type="light">Save Change</Button>
            <Button type="dark">Edit Password</Button>
            <Button>Cancel</Button>
          </div>
        </form>
      </StyledProfileUser>
    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const res = await Axios(`/users/${params.idUser}`);
    const dataResponse = res.data.data[0];

    return {
      props: { userData: dataResponse },
    };
  } catch (error) {
    return {
      props: { userData: null },
    };
  }
}

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
  }
`;
// END = STYLING FOR THIS PAGE

export default ProfileUserPage;
