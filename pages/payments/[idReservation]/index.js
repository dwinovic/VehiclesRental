import { Button, GoBackPage, MainLayout } from '../../../src/components';
import Image from 'next/image';
import { IMGMalang } from '../../../src/assets';
import { Select } from '@chakra-ui/react';
import styled from 'styled-components';
import { breakpoints } from '../../../src/utils';
const PaymentReservation = () => {
  const role = 'seller';
  return (
    <MainLayout bgFooter="gray" title="Payment Reservation">
      <StyledReservationPayment className="container">
        <GoBackPage titleBack="Payment" />
        <div className="detail-vehicle">
          <div className="image-wrapper">
            <Image src={IMGMalang} alt="image" layout="fill" />
          </div>
          <div className="desc">
            <h1 className="title-vehicle">Fixie - Gray Only </h1>
            <p className="location">Yogyakarta</p>
            <p className="status default">No Prepayment</p>
            <p className="price">#FG1209878YZS</p>
            <Button theme="light" className="btn-copy">
              Copy booking code
            </Button>
          </div>
        </div>
        <div className="detail-reservation">
          <div className="detail-row">
            <div className="left">
              <p className="text-nunito-bold dark">Quantity : 2 bikes</p>
            </div>
            <div className="right date-wrapper">
              <p className="text-nunito-bold dark">Reservation Date :</p>
              <p className="text-nunito-regular"> Jan 18 - 20 2021</p>
            </div>
          </div>
          <div className="detail-row">
            <div className="left order-detail">
              <p className="text-nunito-bold dark">Order details :</p>
              <p className="text-nunito-regular">1 bike : Rp. 78.000</p>
              <p className="text-nunito-regular">1 bike : Rp. 78.000</p>
              <p className="text-nunito-bold dark">Total : 178.000</p>
            </div>
            <div className="right order-detail">
              <p className="text-nunito-bold dark">Identity :</p>
              <p className="text-nunito-regular">Samantha Doe (+6290987682)</p>
              <p className="text-nunito-regular">samanthadoe@mail.com</p>
            </div>
          </div>
        </div>
        <div className="payment-method-wrapper">
          <h5 className="text-nunito-bold dark">Payment Code :</h5>
          <div className="code-copy-btn">
            <p className="invoice-code">#FG1209878YZS</p>
            <Button className="btn-copy" theme="dark">
              Copy
            </Button>
          </div>
          <div className="input-group">
            <Select
              bg=" rgba(255, 255, 255, 0.5)"
              variant="filled"
              placeholder="Transfer Method"
              className="select-method"
            >
              <option value="cash">Cash</option>
              <option value="transfer">Transfer</option>
            </Select>
          </div>
        </div>
        {role === 'customer' && (
          <Button className="btn-finish" theme="light">
            Finish payment : <span className="timer">59:30</span>
          </Button>
        )}
        {role === 'seller' && (
          <Button className="btn-finish" theme="light">
            Approve Payments
          </Button>
        )}
      </StyledReservationPayment>
    </MainLayout>
  );
};

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
