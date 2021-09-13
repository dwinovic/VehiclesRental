/* eslint-disable @next/next/no-img-element */
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AVADefault } from '../../../assets';
import { ICEmail } from '../../../assets/icons';
import Axios from '../../../config/Axios';
import { breakpoints } from '../../../utils/Breakpoints';
import { LogoBrand } from '../../atoms';
const { publicRuntimeConfig } = getConfig();

const Navbar = ({ session }) => {
  const userState = useSelector((state) => state.user.user);
  const [collapse, setCollapse] = useState(false);
  const [avatarPop, setAvatarPop] = useState(false);
  const router = useRouter();
  const pathActive = router.pathname.split('/')[1];

  const handleLogout = () => {
    Axios.get('/users/logout', { withCredentials: true })
      .then((res) => {
        // console.log(res);
        router.replace('/login');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  // if (avatar) {
  //   // console.log('avatar in navbar', avatar);
  // } else {
  //   // console.log('false');
  // }
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
                <a className={pathActive === '' ? 'active' : ''}>Home</a>
              </Link>
              <Link href="/vehicles-type">
                <a className={pathActive === 'vehicles-type' ? 'active' : ''}>
                  Vehicle Type
                </a>
              </Link>
              <Link href="/history">
                <a className={pathActive === 'history' ? 'active' : ''}>
                  History
                </a>
              </Link>
              <Link href="/">
                <a className={pathActive === 'about' ? 'active' : ''}>About</a>
              </Link>
            </div>
            {session !== 'login' && (
              <div className="button-wrapper">
                <button
                  className="btn outline"
                  onClick={() => {
                    return router.push('/login');
                  }}
                >
                  Login
                </button>
                <button
                  className="btn primary"
                  onClick={() => {
                    return router.push('/register');
                  }}
                >
                  Register
                </button>
              </div>
            )}
            {session === 'login' && (
              <div className="profile-wrapper">
                <div className="item email">
                  <Image src={ICEmail} alt="email" layout="fill" />
                  <div className="circle">2</div>
                </div>
                <div
                  className="item avatar"
                  onClick={() => {
                    avatarPop ? setAvatarPop(false) : setAvatarPop(true);
                    // return router.push(`/profile/${idUser}`);
                  }}
                >
                  <img
                    className="avatar"
                    src={userState.avatar ? userState.avatar : AVADefault}
                    alt="user profile"
                  />
                </div>
                {avatarPop && (
                  <div className="avatar-popup">
                    <div
                      className="row"
                      onClick={() => {
                        return router.push(`/profile`);
                      }}
                    >
                      <p>Edit Profile</p>
                      <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M9.66019 7.74375C9.85437 7.56875 10 7.30625 10 7C10 6.7375 9.85437 6.475 9.66019 6.25625L3.05825 0.30625C2.81553 0.13125 2.52427 0 2.23301 0C1.8932 0 1.60194 0.13125 1.40777 0.30625L0.339806 1.3125C0.0970874 1.53125 0 1.79375 0 2.05625C0 2.3625 0.0970874 2.625 0.339806 2.8L5 7L0.339806 11.2C0.0970874 11.4187 0 11.6812 0 11.9438C0 12.25 0.0970874 12.5125 0.339806 12.6875L1.40777 13.6938C1.60194 13.9125 1.8932 14 2.23301 14C2.52427 14 2.81553 13.9125 3.05825 13.6938L9.66019 7.74375Z"
                          fill="#999999"
                        />
                      </svg>
                    </div>
                    <div className="divider" />
                    <div className="row">
                      <p>Help</p>
                      <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M9.66019 7.74375C9.85437 7.56875 10 7.30625 10 7C10 6.7375 9.85437 6.475 9.66019 6.25625L3.05825 0.30625C2.81553 0.13125 2.52427 0 2.23301 0C1.8932 0 1.60194 0.13125 1.40777 0.30625L0.339806 1.3125C0.0970874 1.53125 0 1.79375 0 2.05625C0 2.3625 0.0970874 2.625 0.339806 2.8L5 7L0.339806 11.2C0.0970874 11.4187 0 11.6812 0 11.9438C0 12.25 0.0970874 12.5125 0.339806 12.6875L1.40777 13.6938C1.60194 13.9125 1.8932 14 2.23301 14C2.52427 14 2.81553 13.9125 3.05825 13.6938L9.66019 7.74375Z"
                          fill="#999999"
                        />
                      </svg>
                    </div>
                    <div className="divider" />
                    <div className="row" onClick={() => handleLogout()}>
                      <p>Logout</p>
                      <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M9.66019 7.74375C9.85437 7.56875 10 7.30625 10 7C10 6.7375 9.85437 6.475 9.66019 6.25625L3.05825 0.30625C2.81553 0.13125 2.52427 0 2.23301 0C1.8932 0 1.60194 0.13125 1.40777 0.30625L0.339806 1.3125C0.0970874 1.53125 0 1.79375 0 2.05625C0 2.3625 0.0970874 2.625 0.339806 2.8L5 7L0.339806 11.2C0.0970874 11.4187 0 11.6812 0 11.9438C0 12.25 0.0970874 12.5125 0.339806 12.6875L1.40777 13.6938C1.60194 13.9125 1.8932 14 2.23301 14C2.52427 14 2.81553 13.9125 3.05825 13.6938L9.66019 7.74375Z"
                          fill="#999999"
                        />
                      </svg>
                    </div>
                  </div>
                )}
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
            {session !== 'login' && (
              <>
                <button
                  className="btn outline"
                  onClick={() => {
                    return router.push('/login');
                  }}
                >
                  Login
                </button>
                <button
                  className="btn primary"
                  onClick={() => {
                    return router.push('/register');
                  }}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </StyledNavbarCollapse>
    </>
  );
};

Navbar.propTypes = {
  session: PropTypes.bool,
};

Navbar.defaultProps = {
  session: '',
};

export default Navbar;

const StyledNavbar = styled.nav`
  padding: 40px 0;
  position: fixed;
  width: 100vw;
  background: #ffffff;
  z-index: 9;
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
        position: relative;
        ${breakpoints.lessThan('md')`
          display: none;
        `}
        .item {
          position: relative;
          height: 50px;
          width: 50px;
          &:hover {
            cursor: pointer;
            opacity: 0.7;
          }
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
          &.avatar {
            img {
              border-radius: 100%;
              width: 100%;
              height: 100%;
            }
          }
        }
        .avatar-popup {
          position: absolute;
          top: 60px;
          right: 0;
          background: #ffffff;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.23);
          border-radius: 10px;
          width: 150px;
          z-index: 9;
          .row {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            p {
              font-style: normal;
              font-weight: bold;
              font-size: 14px;
              line-height: 21px;
              color: #000000;
            }
            &:hover {
              opacity: 0.5;
              cursor: pointer;
            }
          }
          .divider {
            border: 1px solid #dadada;
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
      display: ${({ show }) => (show ? 'flex' : 'none')};
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
