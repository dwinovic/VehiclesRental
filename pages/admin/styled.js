import styled from 'styled-components';
import { breakpoints } from '../../src/utils';

export const StyledAdminHomepage = styled.div`
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
  /* END = BUTTON ACTION ADD ITEM */
  .button-wrapper {
    margin-top: 80px;
  }
  /* END = BUTTON ACTION ADD ITEM */
  /* START = SECTION TESTIMONIALS */
  section.testimonials-sections {
    margin-top: 50px;
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
  /* END = SECTION TESTIMONIALS */
`;
