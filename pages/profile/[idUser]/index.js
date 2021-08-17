import { Button, MainLayout } from '../../../src/components';
import { StyledProfileUser } from './styled';
import Image from 'next/image';
import { AVADefault } from '../../../src/assets';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';

const ProfileUserPage = () => {
  const [value, setValue] = useState();

  return (
    <MainLayout bgFooter="gray" title="Nopik">
      <StyledProfileUser className="container">
        <h1 className="heading-page">Profile</h1>
        <section className="profile-section">
          <div className="avatar-wrapper">
            <Image src={AVADefault} alt="username" layout="fill" />
            <div className="edit-avatar">
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
          <h2 className="heading-playfair">Samantha Doe</h2>
          <p className="text-nunito-bold">samanthadoe@mail.com</p>
          <p className="text-nunito-bold">+62833467823</p>
          <p className="text-nunito-bold">Has been active since 2013</p>
          <RadioGroup defaultValue="2" className="select-gender">
            <Stack spacing={5} direction="row">
              <Radio name="male" size="lg" colorScheme="orange" value="1">
                Male
              </Radio>
              <Radio name="female" size="lg" colorScheme="orange" value="2">
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
              placeholder="zulaikha17@gmail.com"
            />
            <div className="line" />
          </div>
          <div className="input-group">
            <label htmlFor="address">Adress :</label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Iskandar Street no. 67 Block A Near Bus Stop"
            />
            <div className="line" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Mobile number :</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="(+62)813456782"
            />
            <div className="line" />
          </div>
          <h4 className="heading-section-form">Identity</h4>
          <div className="input-group-two">
            <div className="input-group">
              <label htmlFor="username">Dsiplay name :</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="zulaikha"
              />
              <div className="line" />
            </div>
            <div className="input-group">
              <label htmlFor="born">DD/MM/YY</label>
              <input
                type="text"
                id="born"
                name="born"
                placeholder="03/09/2003"
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

export default ProfileUserPage;
