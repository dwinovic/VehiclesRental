import {
  AVADefault,
  ILCamera,
  IMGDefault,
  IMGJogja,
} from '../../../src/assets';
import { Button, GoBackPage, MainLayout } from '../../../src/components';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { fetcher } from '../../../src/config/fetcher';
import styled from 'styled-components';
import { breakpoints, requireAuthentication } from '../../../src/utils';
import NumberFormat from 'react-number-format';
import Axios from '../../../src/config/Axios';
import { useCookie } from 'next-cookie';
const DetailVehicle = ({ dataVehicle, roleUser, avatar }) => {
  const { data: vehicle, statusCode } = dataVehicle;
  const router = useRouter();

  if (statusCode !== 200) {
    return <h1>Kooosong</h1>;
  }

  const myLoader = ({ src }) => {
    return `${vehicle?.images[0]}`;
  };
  const myLoader2 = ({ src }) => {
    return `${vehicle?.images[1]}`;
  };
  const myLoader3 = ({ src }) => {
    return `${vehicle?.images[2]}`;
  };

  return (
    <MainLayout
      bgFooter="gray"
      title={vehicle.name}
      avatar={avatar}
      session={roleUser ? 'login' : false}
    >
      <StyledDetailVehicle className="container">
        <GoBackPage titleBack="Detail" />
        <section className=" detail-vehicle">
          <div className="galery-wrapper">
            {vehicle?.images[0] && (
              <div className="image-main">
                <Image
                  src={vehicle?.images[0]}
                  loader={myLoader}
                  alt={vehicle.name}
                  layout="fill"
                />
              </div>
            )}
            {!vehicle?.images[0] && (
              <div className="image-main">
                <Image
                  src={ILCamera}
                  loader={myLoader}
                  alt={vehicle.name}
                  layout="fill"
                />
              </div>
            )}
            <div className="item-wrapper">
              <div className="control prev">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              </div>
              <div className="item-main">
                {vehicle?.images[1] !== undefined && (
                  <div className="item">
                    <Image
                      src={vehicle?.images[1]}
                      loader={myLoader2}
                      alt="vehicle"
                      layout="fill"
                    />
                  </div>
                )}
                {vehicle?.images[2] !== undefined && (
                  <div className="item">
                    <Image
                      src={vehicle?.images[2]}
                      loader={myLoader3}
                      alt="vehicle"
                      layout="fill"
                    />
                  </div>
                )}
              </div>
              <div className="control next">
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
            </div>
          </div>
          <div className="detail-info">
            <h1 className="title-vehicle">{vehicle.name}</h1>
            <p className="location">{vehicle.location}</p>
            <p className="status green">{vehicle.status}</p>
            <p className="paymentOption red">{vehicle.paymentOption}</p>
            <p className="detail">Capacity : 1 person</p>
            <p className="detail">
              Type : {vehicle.category ? vehicle.type : 'Motor'}
            </p>
            <p className="detail">{vehicle.description}</p>
            <div className="price-wrapper">
              <NumberFormat
                className="price"
                value={vehicle.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rp. '}
              />
              <p className="price kouta">Kouta: {vehicle.stock}</p>
            </div>
            <div></div>
            <div className="amount-wrapper">
              <button className="btn primary">
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
              </button>
              <p className="btn count">2s</p>
              <button className="btn secondary">
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
              </button>
            </div>
          </div>
        </section>
        {roleUser === 'customer' && (
          <section className=" button-action-wrapper">
            <Button theme="dark" className="btn">
              Chat Admin
            </Button>
            <Button
              theme="light"
              className="btn"
              onClick={() => {
                return router.push(
                  `/vehicles/${vehicle.idVehicles}/reservation`
                );
              }}
            >
              Reservation
            </Button>
            <Button theme="dark" className="btn small">
              Like
            </Button>
          </section>
        )}
        {roleUser === 'admin' && (
          <section className=" button-action-wrapper">
            <Button
              theme="dark"
              className="btn"
              onClick={() => {
                return router.push('/');
              }}
            >
              Add to home page
            </Button>
            <Button
              theme="light"
              className="btn"
              onClick={() => {
                return router.push(`/admin/vehicles/${vehicle.idVehicles}`);
              }}
            >
              Edit item
            </Button>
          </section>
        )}
      </StyledDetailVehicle>
    </MainLayout>
  );
};

// // START = SERVER SIDE PROPS
export const getServerSideProps = requireAuthentication(async (context) => {
  let dataVehicle;
  try {
    const { req, res, params } = context;
    const avatar = res.avatar;
    const roleUser = res.role;
    const token = res.token;

    const resDataVehicle = await Axios.get(`/vehicles/${params.idVehicle}`, {
      withCredentials: true,
      headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
    });
    dataVehicle = resDataVehicle.data;
    // console.log('resDataVehicle', dataVehicle);
    // Pass post data to the page via props
    return {
      props: {
        dataVehicle,
        avatar: avatar ? avatar : null,
        roleUser,
      },
    };
  } catch (error) {
    // console.log(error);
    dataVehicle = error.response;
    return { props: { dataVehicle } };
  }
});
// // END = SERVER SIDE PROPS

// START = STATIC GENERATION
// export async function getStaticPaths() {
//   const res = await Axios.get('/vehicles');

//   const paths = res.data.data.map((item) => ({
//     params: { idVehicle: item.idVehicles },
//   }));
//   // console.log(paths);

//   return { paths, fallback: true };
// }

// export async function getStaticProps(context) {
//   const { req, res, params } = context;
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   // const cookie = useCookie(context);
//   // const token = cookie.get('token');
//   // console.log('token', token);
//   let dataVehicle;
//   // console.log(params.idVehicle);
//   try {
//     const res = await Axios(`/vehicles/static/${params.idVehicle}`);
//     dataVehicle = res.data;
//     console.log('dataVehicle in server', dataVehicle);
//     // Pass post data to the page via props
//     return { props: { dataVehicle } };
//   } catch (error) {
//     dataVehicle = error.response;
//     // console.log(dataVehicle);
//     return { props: { dataVehicle } };
//   }
// }
// END = STATIC GENERATION

// STYLING CURRENT PAGE
const StyledDetailVehicle = styled.div`
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

  padding-top: 40px;

  /* START = DETAIL VEHICLES  */
  .detail-vehicle {
    display: flex;
    gap: 3rem;
    margin-bottom: 80px;
    ${breakpoints.lessThan('md')`
      margin-bottom: 50px; 
    `}
    ${breakpoints.lessThan('md')` 
      flex-direction: column; 
    `}
    .galery-wrapper {
      width: 600px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      ${breakpoints.lessThan('2xl')`
        width: 500px; 
      `}
      ${breakpoints.lessThan('xl')`
        width: 400px; 
      `}
      ${breakpoints.lessThan('md')` 
        width: 100%; 
        height: 500px; 
      `}
      .image-main {
        position: relative;
        width: 100%;
        height: 400px;
        img {
          border-radius: 10px;
          filter: drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.05));
          object-fit: cover;
        }
      }
      .item-wrapper {
        display: flex;
        gap: 2rem;
        justify-content: center;
        .control {
          width: max-content;
          display: flex;
          align-items: center;
          display: none;
        }
        .item-main {
          display: flex;
          gap: 1rem;
          width: 100%;
          .item {
            position: relative;
            width: 50%;
            height: 150px;
            ${breakpoints.lessThan('2xl')`
            width: 50%;
            `}
            ${breakpoints.lessThan('md')`
                  width: 50%;
            `}
            
            ${breakpoints.lessThan('xsm')`
              display: none; 
            `}
            img {
              border-radius: 10px;
              filter: drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.05));
              object-fit: cover;
            }
          }
        }
      }
    }
    .detail-info {
      flex: 1;
      position: relative;
      /* .title-vehicle {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        color: #042521;
        margin-bottom: 1rem;
      }
      .location {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 24px;
        color: #393939;
        mix-blend-mode: normal;
        margin-bottom: 2rem;
      } */
      /* .status {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 25px;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        &.green {
          color: #087e0d;
        }
      } */
      .paymentOption {
        font-family: Nunito;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 2rem;
        &.red {
          color: #9b0a0a;
        }
      }
      .detail {
        font-family: Nunito;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 24px;
        color: #393939;
        margin-bottom: 1rem;
      }
      .price-wrapper {
        text-align: right;
        .kouta {
          margin-top: 1rem;
          font-size: 26px;
        }
      }
      .amount-wrapper {
        display: flex;
        justify-content: space-around;
        position: absolute;
        ${breakpoints.lessThan('md')`
          position: relative;
          margin-top: 2rem;
        `}
        bottom: 0;
        width: 100%;
        .btn {
          display: none;
          border: 0;
          box-sizing: content-box;
          padding: 27px;
          border-radius: 10px;
          &.count {
            font-family: Nunito;
            font-style: normal;
            font-weight: 900;
            font-size: 48px;
            line-height: 25px;
            color: #000000;
          }
          &.primary {
            background: #ffcd61;
          }
          &.secondary {
            background: rgba(203, 203, 212, 0.2);
          }
        }
      }
    }
  }
  /* END = DETAIL VEHICLES  */

  /* START = BUTTON ACTION  */
  .button-action-wrapper {
    display: flex;
    gap: 2rem;
    ${breakpoints.lessThan('sm')`
      flex-direction: column; 
      gap: 1rem; 
    `}
    .btn.small {
      width: 50%;
      ${breakpoints.lessThan('sm')`
      width: 100%;
    `}
    }
  }
  /* END = BUTTON ACTION  */
`;
export default DetailVehicle;
