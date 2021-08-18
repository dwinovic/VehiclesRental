import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const StyledSectionCard = styled.section`
  /* START = CONTAINER */
  &.container {
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
  /* START = SECTION  */
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
    margin-bottom: 40px;
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
  .content {
    display: grid;
    grid-template-columns: 280px 280px 280px 280px 280px;
    justify-content: space-between;
    gap: 2rem;
    ${breakpoints.lessThan('2xl')`
          grid-template-columns: 280px 280px 280px 280px; 
        `}
    ${breakpoints.lessThan('xl')`
          grid-template-columns: 33% 33% 33% ; 
        `}
        ${breakpoints.lessThan('lg')`
         grid-template-columns: 33% 33% 33% ; 
          justify-content: flex-start;
        `}
        ${breakpoints.lessThan('md')`
          grid-template-columns: 45% 45%  ; 
          justify-content: center;
        `}
        ${breakpoints.lessThan('xsm')`
          grid-template-columns: 95%  ; 
          justify-content: center;
        `}

        .card {
      position: relative;
      height: 337px;
      filter: drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.05));
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
      ${breakpoints.lessThan('lg')`
          height: 250px;

        `}
      img {
        border-radius: 20px;
      }
      .description {
        position: absolute;
        bottom: 0;
        left: 0;
        background: #ffffff;
        border-radius: 0px 6px 0px 0px;
        width: 120px;
        box-sizing: content-box;
        padding-top: 1rem;
        padding-left: 10px;
      }
    }
  }
  /* END = SECTION  */
`;
