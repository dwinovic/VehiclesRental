import styled from 'styled-components';
import { BgImageLayout, Button, Input } from '../../src/components';
import Footer from '../../src/components/molecules/Footer';
import Link from 'next/link';
import { breakpoints } from '../../src/utils';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();

  return (
    <>
      <BgImageLayout title="Register">
        <StyledContent>
          <div className="content">
            <div className="left">
              <h1 className="heading">Le’ts Explore The World</h1>
              <p className="sign-up">Have account?</p>
              <Button
                type="dark"
                className="btn"
                onClick={() => {
                  return router.push('/login');
                }}
              >
                Login
              </Button>
            </div>
            <div className="center">
              <svg
                width="20"
                height="567"
                viewBox="0 0 20 567"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="vertical"
              >
                <line
                  x1="10.5"
                  y1="10.5"
                  x2="10.5"
                  y2="558.795"
                  stroke="white"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-linecap="round"
                />
                <circle cx="10" cy="10" r="10" fill="white" />
                <circle cx="10" cy="557" r="10" fill="white" />
              </svg>
              <svg
                width="567"
                height="20"
                viewBox="0 0 567 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="horizontal"
              >
                <line
                  x1="556.5"
                  y1="10.5"
                  x2="8.20502"
                  y2="10.5"
                  stroke="white"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-linecap="round"
                />
                <circle
                  cx="557"
                  cy="10"
                  r="10"
                  transform="rotate(90 557 10)"
                  fill="white"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="10"
                  transform="rotate(90 10 10)"
                  fill="white"
                />
              </svg>
            </div>
            <form className="right">
              <div className="form-input">
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input"
                />
              </div>
              <div className="form-input">
                <Input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="form-input">
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input"
                />
              </div>
              <div className="form-input forgot-password-wrapper">
                <Link href="#">
                  <a className="forgot-password">Forgot password?</a>
                </Link>
              </div>
              <div className="btn-wrapper">
                <Button type="light" className="btn">
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </StyledContent>
      </BgImageLayout>
      <Footer />
    </>
  );
};

export default LoginPage;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  .content {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${breakpoints.lessThan('lg')`
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
    `}
    .left {
      width: 390px;
      margin-bottom: 250px;
      ${breakpoints.lessThan('lg')`
      width: 100%;
      margin-bottom: 0;
    `}
      .heading {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        color: #ffffff;
        margin-bottom: 43px;

        ${breakpoints.lessThan('lg')`
        margin-bottom: 20px;
        font-size: 40px;
        text-align: center;
    `}
      }
      .sign-up {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        color: #ffffff;
        margin-bottom: 25px;
      }
      .btn {
        ${breakpoints.lessThan('lg')`
          height: 60px;
          font-size: 22px;
          `}
      }
    }
    .center {
      .vertical {
        ${breakpoints.lessThan('lg')` 
          display: none;
        }
      `}
      }
      .horizontal {
        display: none;
        ${breakpoints.lessThan('lg')` 
          display: inline-block;
        `}
        ${breakpoints.lessThan('md')`
      width: 100%; 
    `}
      }
    }
    .right {
      ${breakpoints.lessThan('lg')`
      width: 100%;
      `}
      .form-input {
        margin-bottom: 34px;
        width: 447px;
        .input {
          ${breakpoints.lessThan('lg')`
          height: 60px;
          font-size: 22px;
        `}
        }

        ${breakpoints.lessThan('lg')`
          width: 100%;
        `}
        &.forgot-password-wrapper {
          margin-top: -25px;
          .forgot-password {
            font-family: Mulish;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 28px;
            text-decoration-line: underline;
            color: #ffffff;
          }
        }
      }
      .btn-wrapper {
        .btn {
          ${breakpoints.lessThan('lg')`
          height: 60px;
          font-size: 22px;
          `}
        }
      }
    }
  }
`;
