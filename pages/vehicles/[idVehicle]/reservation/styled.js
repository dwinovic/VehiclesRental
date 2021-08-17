import styled from 'styled-components';
import { breakpoints } from '../../../../src/utils';

export const StyledReservationVehicle = styled.div`
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
      margin-bottom: 2rem;
    }
  }
`;
