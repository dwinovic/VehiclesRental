import { Select } from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ILCircle, ILPlus, IMGBGhome, IMGDMUser } from '../src/assets';
import { SectionCard } from '../src/components';
import { Button } from '../src/components/atoms';
import { BgImageLayout, MainLayout } from '../src/components/layout';
import { breakpoints } from '../src/utils';
import useSWR from 'swr';
import { fetcher } from '../src/config/fetcher';
import { useRouter } from 'next/router';
import Axios from '../src/config/Axios';

function Home(props) {
  console.log('PROPS', props);
  const [dataUser, setDataUser] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const { data, error } = useSWR('/vehicles?limit=5', fetcher);
  const dataVehicles = data?.data;

  useEffect(() => {
    const roleLocal = localStorage.getItem('role');
    if (roleLocal === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  console.log(dataUser);

  return (
    <MainLayout bgFooter="gray" title="Home">
      <StyledHomepage>
        <header>
          <BgImageLayout imageBg={IMGBGhome}>
            <div className="container header">
              <h1 className="heading">Explore and Travel</h1>
              <div className="sub-heading-wrapper">
                <h4>Vehicle Finder</h4>
                <div className="line"></div>
              </div>
              <form className="form">
                <div className="input-group">
                  <Select
                    bg=" rgba(255, 255, 255, 0.5)"
                    variant="filled"
                    placeholder="Location"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Select
                    bg=" rgba(255, 255, 255, 0.5)"
                    variant="filled"
                    placeholder="Type"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
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
                <Button className="btn-action">Explore</Button>
              </form>
            </div>
          </BgImageLayout>
        </header>
        <main>
          <SectionCard
            heading="Popular in town"
            data={dataVehicles}
            anchor="/vehicles-type/category"
          />
          {isAdmin && (
            <div className="container add-new-item">
              <Button
                type="dark"
                onClick={() => {
                  return router.push('/admin/vehicles');
                }}
              >
                Add new item
              </Button>
            </div>
          )}

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
                  money and enjoy the trip. It was an amazing experience to have
                  a ride for wildlife trip!”
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
        </main>
      </StyledHomepage>
    </MainLayout>
  );
}

// export async function getServerSideProps() {
//   const res = Axios.get('/vehicles');
//   const data = res.data;

//   // Pass data to the page via props
//   return { props: { data } };
// }
export default Home;
// STYLING = HOMEPAGE

const StyledHomepage = styled.div`
  /* TESTING BREAKPOINT */
  /* ${breakpoints.lessThan('2xl')`
      background-color: yellow;
    `}
  ${breakpoints.lessThan('xl')`
      background-color: blue;
    `}
    ${breakpoints.lessThan('lg')`
      background-color: cyan;
    `}
    ${breakpoints.lessThan('md')`
      background-color: pink;
    `}
    ${breakpoints.lessThan('sm')`
      background-color: green;
    `}
    ${breakpoints.lessThan('xsm')`
      background-color: pink;
    `} */

  /* START = CONTAINER */
  .container {
    width: 1500px;
    margin: 0 auto;
    /* padding-top: 70px; */
    ${breakpoints.lessThan('2xl')`
      width: 80%;
    `}
    ${breakpoints.lessThan('lg')`
      width: 90%;
    `}
  }
  /* END = CONTAINER */

  /* START = HEADER PAGE */
  .header {
    padding-top: 82px;
    ${breakpoints.lessThan('md')`
      padding-top: 170px;
    `}
    ${breakpoints.lessThan('md')`
      padding-top: 100px;
    `}
    ${breakpoints.lessThan('xsm')`
      padding-top: 170px;
    `}
    h1.heading {
      font-family: Playfair Display;
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 80px;
      color: #ffffff;
      margin: 0;
      width: 500px;
      margin-bottom: 70px;
      ${breakpoints.lessThan('md')`
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
      `}
      ${breakpoints.lessThan('xsm')`
        font-size: 34px;
        line-height: 40px; 
      `}
    }
    .sub-heading-wrapper {
      width: 500px;
      ${breakpoints.lessThan('md')`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
      h4 {
        font-family: Nunito;
        font-style: normal;
        font-weight: 900;
        font-size: 22px;
        line-height: 30px;
        color: #ffffff;
        ${breakpoints.lessThan('xsm')`
        font-size: 18px;
        line-height: 26px; 
      `}
      }
      .line {
        margin-top: 16px;
        width: 60px;
        height: 4px;
        background: #ffffff;
        border-radius: 4px;
      }
    }
    .form {
      width: 500px;
      margin-top: 48px;
      ${breakpoints.lessThan('md')`
        width: 100%;
      `}
      .input-group {
        display: flex;
        gap: 30px;
        margin-bottom: 35px;
      }
      .btn-action {
        width: 200px;
        height: 40px;
        font-size: 18px;
        ${breakpoints.lessThan('md')`
        width: 100%;
      `}
      }
    }
  }
  /* END = HEADER PAGE */

  main {
    section {
      padding-top: 82px;
      ${breakpoints.lessThan('2xl')`
      padding-top: 40px; 
    `}
      ${breakpoints.lessThan('md')`
        padding-top: 40px; 
        `}
      .heading-section {
        display: flex;
        justify-content: space-between;
        margin-bottom: 55px;
        ${breakpoints.lessThan('2xl')`
          margin-bottom: 25px; 
        `}
        ${breakpoints.lessThan('md')`
          margin-bottom: 15px; 
        `} 
        ${breakpoints.lessThan('xsm')` 
          flex-direction: column; 
        `}
        h2 {
          margin: 0;
          font-family: Playfair Display;
          font-style: normal;
          font-weight: bold;
          font-size: 36px;
          line-height: 50px;
          color: #000000;
        }
        a.anchor {
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          line-height: 60px;
          display: flex;
          align-items: center;
          color: #fb8f1d;
          &:hover {
            opacity: 0.7;
            cursor: pointer;
          }
        }
      }
    }

    .add-new-item {
      margin-top: 2rem;
    }

    /* START = SECTION TESTIMONIALS */
    section.testimonials-sections {
      .content {
        display: flex;
        gap: 20rem;
        ${breakpoints.lessThan('xl')`
          gap: 5rem;
        `}
        ${breakpoints.lessThan('lg')`
          gap: 2rem;
        `}
        ${breakpoints.lessThan('sm')`
          flex-direction: column-reverse;
        `}
        .left {
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 480px;
          ${breakpoints.lessThan('xl')`
            width: 100%;
          `}
          .star-wrapper {
            display: flex;
            gap: 1rem;
            margin-bottom: 30px;
          }
          .text-regular {
            font-family: Mulish;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 36px;
            color: #393939;
          }
          .identity {
            margin-top: 40px;
            h5 {
              font-family: Nunito;
              font-style: normal;
              font-weight: bold;
              font-size: 22px;
              color: #000000;
              mix-blend-mode: normal;
            }
            .text-regular {
              font-family: Nunito;
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              color: rgba(57, 57, 57, 0.85);
              mix-blend-mode: normal;
            }
          }
        }
        .right {
          ${breakpoints.lessThan('sm')`
            display: flex;
            justify-content: center;
          `}
          .card-profile {
            position: relative;
            width: 380px;
            height: 490px;
            filter: drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.05));
            ${breakpoints.lessThan('xl')`
              width: 300px;
              height: 400px;
            `}

            img {
              border-radius: 25px;
            }
            .icon-illustration {
              position: relative;
              width: 32px;
              height: 32px;
              position: absolute;
              &.plus {
                bottom: -10px;
                left: -10px;
              }
              &.circle {
                top: -10px;
                right: -10px;
              }
            }
            .btn-action {
              position: absolute;
              background-color: white;
              display: flex;
              justify-content: flex-end;
              gap: 1rem;
              border-radius: 16px 0px 0px 0px;
              padding: 16px 8px 8px 16px;
              width: max-content;
              height: max-content;
              bottom: 0;
              right: 0;
              svg {
                &:hover {
                  cursor: pointer;
                  opacity: 0.5;
                }
              }
            }
          }
        }
      }
    }
    /* END = SECTION TESTIMONIALS */
  }
`;
