import styled from 'styled-components';
import { breakpoints } from '../../../src/utils';

export const StyledAddingVehiclesPage = styled.div`
  padding-top: 50px;
  .form {
    /* background-color: yellow; */

    .form-content {
      /* background-color: red; */
      display: flex;
      gap: 2rem;
      ${breakpoints.lessThan('md')`
        flex-direction: column; 
      `}
      .galery-wrapper {
        /* background-color: blue; */
        ${breakpoints.lessThan('2xl')`
            width:50%;
          `}
        ${breakpoints.lessThan('md')`
          width: 100%;
      `}
        .main {
          width: 616px;
          height: 412px;
          background: #f5f5f6;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          ${breakpoints.lessThan('2xl')`
            width: 100%;
            height: 380px;
          `}
          .default {
            position: relative;
            width: 130px;
            height: 100px;
          }
        }
        .item-wrapper {
          display: flex;
          margin-top: 1rem;
          gap: 1rem;
          .item {
            background: #f5f5f6;
            border-radius: 10px;
            width: 290px;
            height: 164px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            ${breakpoints.lessThan('md')`
          width: 50%;
      `}
            ${breakpoints.lessThan('2xl')`
            `}
            .icon-wrapper {
              width: 65px;
              height: 70px;
              position: relative;
            }
            p {
              font-family: Nunito;
              font-style: normal;
              font-weight: bold;
              font-size: 18px;
              line-height: 24px;
              color: #b8becd;
            }
          }
        }
      }
      .input-group-wrapper {
        flex: 1;
        width: 50%;
        ${breakpoints.lessThan('md')`
          width: 100%;
      `}
        .input-wrapper {
          margin-bottom: 1rem;
          input {
            font-family: Nunito;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 24px;
            color: #80918e;
            background-color: transparent;
          }
          .line {
            margin-top: 22px;
            border: 1px solid #9f9f9f;
          }
        }
        .select-wrapper {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          label {
            font-family: Playfair Display;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
            color: #393939;
            margin-bottom: 20px;
          }
          input {
            background: #f5f5f6;
            color: #80918e;
          }
          select {
            background: #f5f5f6;
            height: 83px;
          }
          &.counter-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 2rem;
            .counter {
              display: flex;
              gap: 2rem;
              align-items: center;
              justify-content: center;
              .icon {
                border-radius: 10px;
                box-sizing: border-box;
                height: 40px;
                width: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                &.plus {
                  background: #ffcd61;
                }
                &.minus {
                  background: rgba(203, 203, 212, 0.2);
                }
              }
              .count {
                font-family: Nunito;
                font-style: normal;
                font-weight: 900;
                font-size: 24px;
                line-height: 25px;
                color: #393939;
              }
            }
          }
        }
      }
    }
    .form-action {
      display: flex;
      margin-top: 2rem;
      gap: 2rem;
      .add-category {
        background: #393939;
        border-radius: 10px;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 25px;
        display: flex;
        align-items: center;
        color: #ffcd61;
        height: 80px;
      }
    }
  }
`;
