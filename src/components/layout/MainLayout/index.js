import Head from 'next/head';
import styled from 'styled-components';
import { breakpoints } from '../../../utils';
import Footer from '../../molecules/Footer';
import Navbar from '../../molecules/Navbar';

const MainLayout = ({ title, children, bgFooter }) => {
  return (
    <StyledMainLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer bgFooter={bgFooter} />
    </StyledMainLayout>
  );
};

export default MainLayout;

const StyledMainLayout = styled.div`
  /* START = CONTAINER */
  .container {
    width: 1500px;
    margin: 0 auto;
    /* background-color: pink; */
    /* padding-top: 70px; */
    ${breakpoints.lessThan('2xl')`
      width: 80%;
    `}
    ${breakpoints.lessThan('lg')`
      width: 90%;
    `}
  }
  /* END = CONTAINER */

  /* START = TYPHOGRAPHY */
  .heading-page {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 24px;
    color: #000000;
  }
  .heading-playfair {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 24px;
    color: #000000;
  }
  .text-nunito-bold {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;

    color: #b8becd;
  }
  /* END = TYPHOGRAPHY */
`;
