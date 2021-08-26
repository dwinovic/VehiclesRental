import { IMGJogja } from '../../../../src/assets';
import {
  Button,
  DatePicker,
  GoBackPage,
  MainLayout,
} from '../../../../src/components';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import styled from 'styled-components';
import { breakpoints, requireAuthentication } from '../../../../src/utils';
import Axios from '../../../../src/config/Axios';
import { useEffect, useState } from 'react';

const ReservationVehicle = ({ dataVehicle, roleUser, avatar }) => {
  const { data: vehicle, statusCode } = dataVehicle;

  const [totalCount, setTotalCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(vehicle.price || 0);
  const myLoader = ({ src }) => {
    return `${vehicle?.images[0]}`;
  };

  // console.log('avatar', avatar);
  // START = COUNTER STOCK

  const handleIncrement = () => {
    let currentValue = totalCount;
    currentValue += 1;
    setTotalCount(currentValue);
  };
  const handleDecrement = () => {
    if (totalCount === 1) {
      return null;
    } else {
      let currentValue = totalCount;
      currentValue -= 1;

      setTotalCount(currentValue);
    }
  };
  // END = COUNTER STOCK
  return (
    <MainLayout
      bgFooter="gray"
      title={`Reservation | ${vehicle.name}`}
      avatar={avatar}
      session={roleUser ? 'login' : false}
    >
      <StyledReservationVehicle className="container">
        <GoBackPage titleBack="Reservation" />
        <div className="main">
          {vehicle?.images[0] && (
            <div className="image-wrapper">
              <Image
                src={vehicle?.images[0]}
                loader={myLoader}
                alt={vehicle.name}
                layout="fill"
              />
            </div>
          )}
          {!vehicle?.images[0] && (
            <div className="image-wrapper">
              <Image src={IMGJogja} layout="fill" alt="image" />
            </div>
          )}
          <div className="detail-wrapper">
            <h1 className="title-vehicle">{vehicle.name}</h1>
            <p className="location">{vehicle.locaton}</p>
            <p className="status green">{vehicle.status}</p>
            <div className="amount-wrapper">
              <button className="btn primary" onClick={handleIncrement}>
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
              <p className="btn count">{totalCount}</p>
              <button className="btn secondary" onClick={handleDecrement}>
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
            <h3 className="date-title">Reservation Date :</h3>
            <div className="input-group">
              {/* <Input
                placeholder="Select date"
                size="lg"
                variant="filled"
                bg=" rgba(57, 57, 57, 0.8)"
              /> */}
              <div className="col">
                <p>Start</p>
                <DatePicker />
              </div>
              <div className="col">
                <p>End</p>
                <DatePicker />
              </div>
            </div>
            <div className="input-group">
              {/* <Select
                bg=" rgba(57, 57, 57, 0.8)"
                variant="filled"
                size="lg"
                placeholder="1 Day"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select> */}
            </div>
          </div>
        </div>
        <Button type="light">Pay now : Rp. {totalPrice}</Button>
      </StyledReservationVehicle>
    </MainLayout>
  );
};

export const getServerSideProps = requireAuthentication(async (context) => {
  let dataVehicle;
  try {
    const { req, res, params } = context;
    const avatar = res.avatar;
    console.log('avatar in server', avatar);
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
        avatar,
        roleUser,
      },
    };
  } catch (error) {
    dataVehicle = error.response;
    console.log(error);
    return { props: { dataVehicle } };
  }
});

const StyledReservationVehicle = styled.div`
  /* WARNING!!! */
  /*
    STYLING INI JUGA DIGUNAKAN DI PAGE /ADMIN/RESERVATION/INDEX.JS
  */
  padding-top: 40px;
  .main {
    display: flex;
    gap: 2rem;
    margin-bottom: 16px;
    ${breakpoints.lessThan('md')`
      flex-direction: column; 
    `}
    .image-wrapper {
      width: 50%;
      height: 500px;
      position: relative;
      ${breakpoints.lessThan('md')`
        width: 100%;
        height: 400px;
      `}
      img {
        object-fit: cover;
        border-radius: 25px;
        filter: drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.05));
      }
    }
    .detail-wrapper {
      width: 50%;
      ${breakpoints.lessThan('md')`
        width: 100%;
      `}
      .title-vehicle {
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
      }
      .status {
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
      }
      .amount-wrapper {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin: 50px 0;
        .btn {
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
    .date-title {
      margin: 1rem 0;
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 25px;
      color: #393939;
    }
    .input-group {
      display: flex;
      gap: 24px;
      margin-bottom: 2rem;
      select {
        background: rgba(203, 203, 212, 0.2);
      }
    }
  }
`;
export default ReservationVehicle;
