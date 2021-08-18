import styled from 'styled-components';
import { breakpoints } from '../../../src/utils';

export const StyledReservationPayment = styled.div`
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
