import styled from 'styled-components';
import { breakpoints } from '../../../src/utils';

export const StyledProfileUser = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  .profile-section {
    margin-top: 57px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar-wrapper {
      position: relative;
      width: 200px;
      height: 200px;
      margin-bottom: 2rem;
      .edit-avatar {
        width: 50px;
        height: 50px;
        background: #ffcd61;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
    .heading-playfair {
      margin-bottom: 2rem;
      ${breakpoints.lessThan('md')`
      font-size: 36px;
    `}
    }
    .text-nunito-bold {
      margin-bottom: 12px;
      ${breakpoints.lessThan('md')`
      font-size: 18px; 
      font-weight: 500;
    `}
    }
    .select-gender {
      margin-top: 2rem;
    }
  }
  form.profile-update {
    .heading-section-form {
      font-family: Nunito;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 33px;
      color: #4f5665;
      margin: 30px 0;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 2rem;
      label {
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        color: #9f9f9f;
      }
      input {
        background-color: transparent;
        padding: 8px 0;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 50px;
        color: #000000;
        &:focus {
          outline: none;
        }
      }
      .line {
        border: 1px solid #9f9f9f;
      }
    }
    .action-button {
      display: flex;
      gap: 2rem;
      margin-top: 100px;
      ${breakpoints.lessThan('sm')`
        flex-direction: column; 
        gap: 1rem; 
        button {
          height: 48px;
          font-size: 18px;
        }
      `}
    }
  }
`;
