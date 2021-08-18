import { Input, Select } from '@chakra-ui/react';
import Image from 'next/image';
import { ILCircle, ILPlus, IMGBgAdmin, IMGDMUser } from '../../src/assets';
import {
  BgImageLayout,
  Button,
  MainLayout,
  SectionCard,
} from '../../src/components';
import { StyledAdminHomepage } from './styled';

const AdminHomepage = () => {
  return (
    <MainLayout>
      <StyledAdminHomepage bgFooter="gray" title="Admin">
        <BgImageLayout imageBg={IMGBgAdmin}>
          <div className="container header">
            <h1 className="heading">Explore and Travel</h1>
            <div className="sub-heading-wrapper">
              <h4>Vehicle Finder</h4>
              <div className="line"></div>
            </div>
            <form className="form">
              <div className="input-group">
                <Input
                  bg=" rgba(255, 255, 255, 0.5)"
                  variant="filled"
                  placeholder="Type the vehicle (ex. motorbike"
                  size="md"
                />
              </div>
              <div className="input-group">
                <Select
                  bg=" rgba(255, 255, 255, 0.5)"
                  variant="filled"
                  placeholder="Payment"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Select
                  bg=" rgba(255, 255, 255, 0.5)"
                  variant="filled"
                  placeholder="Date"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </div>
              <Button className="btn-action">Search</Button>
            </form>
          </div>
        </BgImageLayout>
        <SectionCard heading="Popular in town" />
        <div className="container button-wrapper">
          <Button type="dark">Add new item</Button>
        </div>
        <section className="container testimonials-sections">
          <div className="heading-section">
            <h2>Testimonials</h2>
          </div>
          <div className="content">
            <div className="left">
              <div className="star-wrapper">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M12.5856 20.4355L18.5856 24.094C19.7563 24.8257 21.0734 23.8014 20.7807 22.4843L19.1709 15.6062L24.5856 10.9233C25.61 10.0453 25.0246 8.4355 23.7075 8.28916L16.6831 7.70379L13.9026 1.26477C13.3173 0.0940358 11.7075 0.0940358 11.1222 1.26477L8.34167 7.85013L1.31728 8.4355C0.00021046 8.4355 -0.438814 10.0453 0.439235 10.9233L5.85387 15.6062L4.24411 22.4843C3.95143 23.8014 5.2685 24.6794 6.43924 24.094L12.5856 20.4355Z"
                      fill="#FFBB0C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="25.0244"
                        height="24"
                        fill="white"
                        transform="translate(0 0.386719)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M12.5856 20.4355L18.5856 24.094C19.7563 24.8257 21.0734 23.8014 20.7807 22.4843L19.1709 15.6062L24.5856 10.9233C25.61 10.0453 25.0246 8.4355 23.7075 8.28916L16.6831 7.70379L13.9026 1.26477C13.3173 0.0940358 11.7075 0.0940358 11.1222 1.26477L8.34167 7.85013L1.31728 8.4355C0.00021046 8.4355 -0.438814 10.0453 0.439235 10.9233L5.85387 15.6062L4.24411 22.4843C3.95143 23.8014 5.2685 24.6794 6.43924 24.094L12.5856 20.4355Z"
                      fill="#FFBB0C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="25.0244"
                        height="24"
                        fill="white"
                        transform="translate(0 0.386719)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M12.5856 20.4355L18.5856 24.094C19.7563 24.8257 21.0734 23.8014 20.7807 22.4843L19.1709 15.6062L24.5856 10.9233C25.61 10.0453 25.0246 8.4355 23.7075 8.28916L16.6831 7.70379L13.9026 1.26477C13.3173 0.0940358 11.7075 0.0940358 11.1222 1.26477L8.34167 7.85013L1.31728 8.4355C0.00021046 8.4355 -0.438814 10.0453 0.439235 10.9233L5.85387 15.6062L4.24411 22.4843C3.95143 23.8014 5.2685 24.6794 6.43924 24.094L12.5856 20.4355Z"
                      fill="#FFBB0C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="25.0244"
                        height="24"
                        fill="white"
                        transform="translate(0 0.386719)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M12.5856 20.4355L18.5856 24.094C19.7563 24.8257 21.0734 23.8014 20.7807 22.4843L19.1709 15.6062L24.5856 10.9233C25.61 10.0453 25.0246 8.4355 23.7075 8.28916L16.6831 7.70379L13.9026 1.26477C13.3173 0.0940358 11.7075 0.0940358 11.1222 1.26477L8.34167 7.85013L1.31728 8.4355C0.00021046 8.4355 -0.438814 10.0453 0.439235 10.9233L5.85387 15.6062L4.24411 22.4843C3.95143 23.8014 5.2685 24.6794 6.43924 24.094L12.5856 20.4355Z"
                      fill="#FFBB0C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="25.0244"
                        height="24"
                        fill="white"
                        transform="translate(0 0.386719)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M12.5856 20.4355L18.5856 24.094C19.7563 24.8257 21.0734 23.8014 20.7807 22.4843L19.1709 15.6062L24.5856 10.9233C25.61 10.0453 25.0246 8.4355 23.7075 8.28916L16.6831 7.70379L13.9026 1.26477C13.3173 0.0940358 11.7075 0.0940358 11.1222 1.26477L8.34167 7.85013L1.31728 8.4355C0.00021046 8.4355 -0.438814 10.0453 0.439235 10.9233L5.85387 15.6062L4.24411 22.4843C3.95143 23.8014 5.2685 24.6794 6.43924 24.094L12.5856 20.4355Z"
                      fill="#FFBB0C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="25.0244"
                        height="24"
                        fill="white"
                        transform="translate(0 0.386719)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-regular">
                ”It was the right decision to rent vehicle here, I spent less
                money and enjoy the trip. It was an amazing experience to have a
                ride for wildlife trip!”
              </p>
              <div className="identity">
                <h5>Edward Newgate</h5>
                <p className="text-regular">Founder Circle</p>
              </div>
            </div>
            <div className="right">
              <div className="card-profile">
                <Image src={IMGDMUser} alt="username" layout="fill" />
                <div className="btn-action">
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon previous"
                  >
                    <path
                      d="M22 25.3867L18 20.8867L22 16.3867"
                      stroke="#D7D7D7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="20"
                      cy="20.3867"
                      r="19"
                      transform="rotate(-180 20 20.3867)"
                      stroke="#D7D7D7"
                      strokeWidth="2"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15.3867L22 19.8867L18 24.3867"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="20"
                      cy="20.3867"
                      r="19"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="icon-illustration plus">
                  <Image src={ILPlus} alt="icon" layout="fill" />
                </div>
                <div className="icon-illustration circle">
                  <Image src={ILCircle} alt="icon" layout="fill" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </StyledAdminHomepage>
    </MainLayout>
  );
};

export default AdminHomepage;
