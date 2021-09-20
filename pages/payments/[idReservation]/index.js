/* eslint-disable @next/next/no-img-element */
import { Select } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, GoBackPage, MainLayout } from '../../../src/components';
import Axios from '../../../src/config/Axios';
import {
  breakpoints,
  moneyFormatter,
  requireAuthentication,
} from '../../../src/utils';
import * as moment from 'moment';
import { finishPaymentAction } from '../../../src/redux/actions/reservationAction';
import { useRouter } from 'next/router';

const PaymentReservation = ({ session, reservationItem }) => {
  const userState = useSelector((state) => state.user.user);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const actionFinishPayment = () => {
    const reservationDataUpdate = {
      idReservation: reservationItem.idReservation,
      status: 1,
      payment_method: paymentMethod,
    };
    dispatch(finishPaymentAction(reservationDataUpdate, router));
  };

  return (
    <MainLayout
      bgFooter="gray"
      title="Payment Reservation"
      session={session ? 'login' : false}
    >
      <StyledReservationPayment className="container">
        <GoBackPage titleBack="Payment" />
        <div className="detail-vehicle">
          <div className="image-wrapper">
            <img src={reservationItem.images} alt={reservationItem.name} />
          </div>
          <div className="desc">
            <h1 className="title-vehicle">{reservationItem.name}</h1>
            <p className="location">{reservationItem.location}</p>
            <p className="status default">No Prepayment</p>
            <p className="price">
              Rp. {moneyFormatter.format(reservationItem.priceTotal)}
            </p>
            {/* <Button theme="light" className="btn-copy">
              Copy booking code
            </Button> */}
          </div>
        </div>
        <div className="detail-reservation">
          <div className="detail-row">
            <div className="left">
              <p className="text-nunito-bold dark">
                Quantity : {reservationItem.reservationQty}
              </p>
            </div>
            <div className="right date-wrapper">
              <p className="text-nunito-bold dark">Reservation Date :</p>
              <p className="text-nunito-regular">
                {moment(reservationItem.reservationStartDate).format('D, MMM')}{' '}
                -{' '}
                {moment(reservationItem.reservationEndDate).format(
                  'D, MMM, YYYY'
                )}
              </p>
            </div>
          </div>
          <div className="detail-row">
            <div className="left order-detail">
              <p className="text-nunito-bold dark">Order details :</p>
              {/* <p className="text-nunito-regular">1 bike : Rp. 78.000</p> */}
              <p className="text-nunito-regular">
                1 unit : Rp. {moneyFormatter.format(reservationItem.price)}
              </p>
              <p className="text-nunito-bold dark">
                Total : {moneyFormatter.format(reservationItem.priceTotal)}
              </p>
            </div>
            <div className="right order-detail">
              <p className="text-nunito-bold dark">Identity :</p>
              <p className="text-nunito-regular">
                {userState.name} {userState.phone}
              </p>
              <p className="text-nunito-regular">{userState.email}</p>
            </div>
          </div>
        </div>
        <div className="payment-method-wrapper">
          <h5 className="text-nunito-bold dark">Payment Code :</h5>
          <div className="code-copy-btn">
            <p className="invoice-code">#{reservationItem.idReservation}</p>
            {/* <Button className="btn-copy" theme="dark">
              Copy
            </Button> */}
          </div>
          <div className="input-group">
            <Select
              bg=" rgba(255, 255, 255, 0.5)"
              variant="filled"
              placeholder="Transfer Method"
              className="select-method"
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Cash">Cash</option>
              <option value="Transfer">Transfer</option>
            </Select>
          </div>
        </div>
        {session === 'customer' && (
          <Button
            className="btn-finish"
            theme="light"
            disabled={!paymentMethod && true}
            onClick={actionFinishPayment}
          >
            Finish payment {/* : <span className="timer">59:30</span> */}
          </Button>
        )}
        {session === 'admin' && (
          <Button className="btn-finish" theme="light">
            Approve Payments
          </Button>
        )}
      </StyledReservationPayment>
    </MainLayout>
  );
};
// // START = SERVER SIDE PROPS
export const getServerSideProps = requireAuthentication(async (context) => {
  let session;
  try {
    const { res, params } = context;
    const roleUser = res.role;
    const resReservation = await Axios.get(
      `/reservations/${params.idReservation}`,
      {
        withCredentials: true,
        headers: context.req
          ? { cookie: context.req.headers.cookie }
          : undefined,
      }
    );
    const reservationItem = resReservation.data.data[0];
    return {
      props: {
        session: roleUser ? roleUser : null,
        reservationItem: reservationItem ? reservationItem : null,
      },
    };
  } catch (error) {
    session = error.response;
    return { props: { session: session ? session : null } };
  }
});
// // END = SERVER SIDE PROPS
const StyledReservationPayment = styled.div`
  /* WARNING!!! */
  /*
    STYLING INI JUGA DIGUNAKAN DI PAGE /ADMIN/APPROVE-PAYMENTS/INDEX.JS
  */
  padding-top: 50px;
  .detail-vehicle {
    display: flex;
    gap: 3rem;
    ${breakpoints.lessThan('sm')`
      flex-direction: column;
    `}
    .image-wrapper {
      position: relative;
      width: 400px;
      height: 310px;
      ${breakpoints.lessThan('sm')`
        width: 100%;
      `}
      img {
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .desc {
      .btn-copy {
        height: 42px;
        margin-top: 40px;
      }
    }
  }
  .detail-reservation {
    margin-top: 50px;
    .detail-row {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      ${breakpoints.lessThan('sm')`
      flex-direction: column;
      `}
      .left {
        padding: 42px;
        border: 1px solid #80918e;
        box-sizing: border-box;
        border-radius: 10px;
        width: 40%;
        ${breakpoints.lessThan('sm')`
         width: 100%;
         padding: 24px;
        `}

        &.order-detail {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
      .right {
        width: 60%;
        padding: 42px;
        border: 1px solid #80918e;
        box-sizing: border-box;
        border-radius: 10px;

        ${breakpoints.lessThan('sm')`
         width: 100%;
        `}
        ${breakpoints.lessThan('sm')`
         padding: 24px;
        `}
        &.date-wrapper {
          display: flex;
          justify-content: space-between;
          ${breakpoints.lessThan('sm')`
            flex-direction: column; 
            gap: 8px;
          `}
        }
        &.order-detail {
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: center;
        }
      }
    }
  }
  .payment-method-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    ${breakpoints.lessThan('sm')`
      flex-direction: column;
      align-items: flex-start;
    `}

    .code-copy-btn {
      border: 1px solid #80918e;
      box-sizing: border-box;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      flex: 1;
      ${breakpoints.lessThan('sm')`
      width: 100%; 
      padding: 1rem;
        `}
      padding: 0 2rem;
      .invoice-code {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        color: #393939;
      }
      .btn-copy {
        height: max-content;
        font-size: 18px;
        width: max-content;
        padding: 0px 12px;
      }
    }
    .input-group {
      flex: 1;
      ${breakpoints.lessThan('sm')`
              width: 100%;
        `}
      .select-method {
        border: 1px solid #80918e;
        box-sizing: border-box;
        height: 80px;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;

        color: #80918e;
        ${breakpoints.lessThan('sm')`
              height: 60px;
        `}
      }
    }
  }
  .btn-finish {
    margin-top: 60px;
    .timer {
      color: #9b0a0a;
    }
  }
`;
export default PaymentReservation;
