import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '../../../utils/Breakpoints';
import { LogoBrand } from '../../atoms';
import { AVADefault } from '../../../assets';
import { ICEmail } from '../../../assets/icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Navbar = ({ session }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <StyledNavbar>
        <div className="content">
          <div className="logo-wrapper">
            <LogoBrand />
          </div>
          <div className="navigation-wrapper">
            <div className="navbar-items-wrapper">
              <Link href="/">
                <a className="active">Home</a>
              </Link>
              <Link href="/vehicles-type">
                <a className="">Vehicle Type</a>
              </Link>
              <Link href="/history">
                <a className="">History</a>
              </Link>
              <Link href="/about">
                <a className="">About</a>
              </Link>
            </div>
            {session !== 'login' && (
              <div className="button-wrapper">
                <button className="btn outline">Login</button>
                <button className="btn primary">Register</button>
              </div>
            )}
            {session === 'login' && (
              <div className="profile-wrapper">
                <div className="item email">
                  <Image src={ICEmail} alt="email" layout="fill" />
                  <div className="circle">2</div>
                </div>
                <div className="item">
                  <Image src={AVADefault} alt="user profile" layout="fill" />
                </div>
              </div>
            )}
            <div
              className="toggler"
              onClick={() => {
                return collapse ? setCollapse(false) : setCollapse(true);
              }}
            >
              <svg
                width="459"
                height="459"
                viewBox="0 0 459 459"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 382.5H459V331.5H0V382.5ZM0 255H459V204H0V255ZM0 76.5V127.5H459V76.5H0Z"
                  fill="#9B9B9B"
                />
              </svg>
            </div>
          </div>
        </div>
      </StyledNavbar>
      <StyledNavbarCollapse show={collapse}>
        <div className="content">
          {session === 'login' && (
            <div className="header-profile">
              <h3 className="username">Username</h3>
              <div className="profile-wrapper">
                <div className="item email">
                  <Image src={ICEmail} alt="email" layout="fill" />
                  <div className="circle">2</div>
                </div>
                <div className="item">
                  <Image src={AVADefault} alt="user profile" layout="fill" />
                </div>
              </div>
            </div>
          )}
          <div className="body">
            <Link href="/">
              <a className="active">Home</a>
            </Link>
            <Link href="/vehicles-type">
              <a className="">Vehicle Type</a>
            </Link>
            <Link href="/history">
              <a className="">History</a>
            </Link>
            <Link href="/about">
              <a className="">About</a>
            </Link>
          </div>
          <div className="footer">
            {session === 'login' && (
              <>
                <button className="btn outline">Login</button>
                <button className="btn primary">Register</button>
              </>
            )}
          </div>
        </div>
      </StyledNavbarCollapse>
    </>
  );
};

Navbar.propTypes = {
  session: PropTypes.string,
};

Navbar.defaultProps = {
  session: '',
};

export default Navbar;

const StyledNavbar = styled.nav`
  padding: 40px 0;
  .content {
    width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    ${breakpoints.lessThan('2xl')`
      width: 80%;
    `}
    ${breakpoints.lessThan('lg')`
      width: 90%;
    `}
    ${breakpoints.lessThan('md')`
      justify-content: flex-start; 
    `}
    ${breakpoints.lessThan('xsm')`
      justify-content: space-between; 
    `}
    .navigation-wrapper {
      display: flex;
      gap: 2rem;
      ${breakpoints.lessThan('md')`
        width: 100%;
      `}
      ${breakpoints.lessThan('xsm')`
        width: max-content; 
      `}
      .navbar-items-wrapper {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        ${breakpoints.lessThan('md')`
          width: 100%;
        `}
        ${breakpoints.lessThan('xsm')`
          display: none; 
        `}
        a {
          text-decoration: none;
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: #b8becd;
          &.active {
            color: #202336;
          }
          &:hover {
            color: #ffcd61;
          }
        }
      }
      .button-wrapper {
        display: flex;
        gap: 1rem;
        ${breakpoints.lessThan('md')`
          display: none;
        `}
        .btn {
          width: 130px;
          height: 45px;
          font-size: 1rem;
          font-size: 15px;
          color: #393939;
          border-radius: 8px;
          border: 0;
          &:hover {
            cursor: pointer;
            opacity: 0.7;
          }
          &.outline {
            background-color: transparent;
            border: 1px solid #ffcd61;
            box-sizing: border-box;
            border-radius: 8px;
          }
          &.primary {
            background: #ffcd61;
          }
        }
      }
      .profile-wrapper {
        display: flex;
        gap: 30px;
        align-items: center;
        ${breakpoints.lessThan('md')`
          display: none;
        `}
        .item {
          position: relative;
          height: 50px;
          width: 50px;
          &.email {
            height: 40px;
            width: 40px;
            position: relative;
            .circle {
              width: 20px;
              height: 20px;
              background: #ffcd61;
              border-radius: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              top: -5px;
              left: -10px;
              font-family: nunito;
              font-style: normal;
              font-weight: bold;
              color: #393939;
            }
          }
        }
      }
      .toggler {
        display: none;
        ${breakpoints.lessThan('md')`
          display: flex;
          align-items: center;
        `}
        svg {
          width: 32px;
          height: 32px;
        }
        /* &:hover {
          path {
            fill: #ffcd61;
          }
        } */
      }
    }
  }
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
`;

const StyledNavbarCollapse = styled.nav`
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.05);
  display: none;
  z-index: -9;
  ${breakpoints.lessThan('md')`
      display: ${({ show }) => (show ? 'flex' : 'nonde')};
  `}
  /* width: 768px; */
  .content {
    width: 90%;
    margin: 0 auto;
    /* background-color: pink; */
    padding: 16px 0;
    .header-profile {
      display: flex;
      justify-content: space-between;
      /* background-color: blue; */
      .username {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        color: #000000;
        line-height: 40px;
      }
      .profile-wrapper {
        display: flex;
        gap: 30px;
        align-items: center;
        .item {
          position: relative;
          height: 50px;
          width: 50px;
          &.email {
            height: 40px;
            width: 40px;
            position: relative;
            .circle {
              width: 20px;
              height: 20px;
              background: #ffcd61;
              border-radius: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              top: -5px;
              left: -10px;
              font-family: nunito;
              font-style: normal;
              font-weight: bold;
              color: #393939;
            }
          }
        }
      }
    }
    .body {
      ${breakpoints.lessThan('xsm')`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1rem 0;
    `}
      display: none;
      a {
        text-decoration: none;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #b8becd;
        &.active {
          color: #202336;
        }
        &:hover {
          color: #ffcd61;
        }
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 2rem;
      .btn {
        width: 100%;
        height: 45px;
        font-size: 1rem;
        font-size: 15px;
        color: #393939;
        border-radius: 8px;
        border: 0;
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
        &.outline {
          background-color: transparent;
          border: 1px solid #ffcd61;
          box-sizing: border-box;
          border-radius: 8px;
        }
        &.primary {
          background: #ffcd61;
        }
      }
    }
  }
`;
