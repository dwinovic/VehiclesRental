import styled from 'styled-components';
import { breakpoints } from '../../../src/utils';

export const StyledDetailVehicle = styled.div`
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
        }
        .item-main {
          display: flex;
          gap: 1rem;
          .item {
            position: relative;
            width: 200px;
            height: 150px;
            ${breakpoints.lessThan('2xl')`
              width: 150px; 
            `}
            ${breakpoints.lessThan('md')`
              width: 200px;
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
      .price {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        line-height: 25px;
        text-align: right;
        color: #000000;
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
