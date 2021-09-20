import styled from 'styled-components';
import { breakpoints } from '../../utils';

export const HistoryStyled = styled.div`
  padding-top: 50px;
  display: flex;
  position: relative;
  gap: 2rem;
  ${breakpoints.lessThan('lg')`
      flex-direction: column;
    `}

  .main {
    width: 90%;
    ${breakpoints.lessThan('lg')`
      width: 100%; 
    `}
    .search-section {
      display: flex;
      gap: 1rem;
      margin-bottom: 50px;
      .search-input {
        background: rgba(218, 218, 218, 0.27);
        border: 0.5px solid #c4c4c4;
        box-sizing: border-box;
        border-radius: 10px;
      }
      .filter-wrapper {
        select {
          background: rgba(218, 218, 218, 0.27);
          border: 0.5px solid #c4c4c4;
          box-sizing: border-box;
          border-radius: 10px;
          height: 80px;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 36px;
          color: #b8becd;
        }
      }
    }
    .days-section {
      .heading-section {
        margin-bottom: 48px;
      }
      .text-nunito-bold {
        margin-bottom: 1rem;
      }
      .divider {
        border: 0.5px solid #c4c4c4;
        margin-bottom: 26px;
      }
      .history-wrapper {
        .history-item {
          display: flex;
          gap: 1rem;
          .image-wrapper {
            position: relative;
            width: 197px;
            height: 165px;
            img {
              object-fit: cover;
              border-radius: 15px;
            }
          }
          .desc {
            display: flex;
            justify-content: center;
            flex-direction: column;
            p {
            }
          }
          .btn-delete-wrapper {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: center;
            flex-direction: column;
            .btn-delete {
              width: 150px;
              height: 50px;
            }
          }
        }
      }
    }
  }
  .right-section {
    width: 250px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 20px;
    box-sizing: content-box;
    ${breakpoints.lessThan('lg')`
      width: 100%; 
      box-sizing: border-box;

    `}
    .text-playfair {
      margin-bottom: 1rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      ${breakpoints.lessThan('lg')`
        flex-direction: row; 
      `}
      gap: 1rem;
      .card {
        position: relative;
        height: 337px;
        ${breakpoints.lessThan('lg')`
          flex-direction: row; 
          width: 50%;
        `}
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
          width: 100%;
          height: 100%;
          object-fit: cover;
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
    .view-more {
      p {
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 180%;
        color: #b8becd;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
  .red {
    color: red;
  }
  .orange {
    color: orange;
  }
  .blue {
    color: blue;
  }
  .green {
    color: green;
  }
`;
