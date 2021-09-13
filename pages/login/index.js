import { Form, Formik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as Yup from 'yup';
import { BgImageLayout, Button, Input } from '../../src/components';
import Footer from '../../src/components/molecules/Footer';
import { loginUser } from '../../src/redux/actions/userAction';
import { breakpoints, isLoginAuthentication } from '../../src/utils';

const LoginPage = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
  });

  return (
    <>
      <Head>
        <title>Vehicles Rental | Login</title>
      </Head>
      <BgImageLayout>
        <StyledContent>
          <div className="content">
            <div className="left">
              <h1 className="heading">Le’ts Explore The World</h1>
              <p className="sign-up">Don’t have account?</p>
              <Button
                type="light"
                className="btn"
                onClick={() => {
                  return router.push('/register');
                }}
              >
                Sign Up
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
                  strokeLinecap="round"
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
                  strokeLinecap="round"
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
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validate}
              onSubmit={(values, { resetForm }) => {
                // console.log(values);
                dispatch(loginUser(values, router));
                resetForm();
              }}
            >
              {({
                values,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
              }) => (
                <Form onSubmit={handleSubmit} className="right">
                  <div className="form-input">
                    <Input
                      theme="text-white"
                      name="email"
                      type="text"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <div className="form-input">
                    <Input
                      theme="text-white"
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </div>
                  {/* <div className="form-input forgot-password-wrapper">
                    <Link href="#">
                      <a className="forgot-password">Forgot password?</a>
                    </Link>
                  </div> */}
                  <div className="btn-wrapper">
                    <Button
                      disabled={
                        !isValid ||
                        (Object.keys(touched).length === 0 &&
                          touched.constructor === Object)
                      }
                      theme="light"
                    >
                      Login
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </StyledContent>
      </BgImageLayout>
      <Footer />
    </>
  );
};

LoginPage.getInitialProps = isLoginAuthentication(async (ctx) => {
  return { data: null };
});

// LoginPage.getInitialProps = async (ctx) => {
//   const { req, res } = ctx;

//   const getCookies = (name) => {
//     const value = `; ${req.headers.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//   };

//   const token = await getCookies('token');

//   if (token) {
//     // Redirect homepage
//     res.writeHead(302, {
//       // or 301
//       Location: '/',
//     });
//     res.end();
//   } else {
//     return { stars: null };
//   }
// };

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
    }
  }
`;
export default LoginPage;
