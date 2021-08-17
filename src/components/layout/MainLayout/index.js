import Head from 'next/head';
import styled from 'styled-components';
import { breakpoints } from '../../../utils';
import Footer from '../../molecules/Footer';
import Navbar from '../../molecules/Navbar';

const MainLayout = ({ title, children, bgFooter }) => {
  return (
    <StyledMainLayout>
      <Head>
        <title>{title} | Vehicles Rental</title>
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
`;
