import Head from 'next/head';
import styled from 'styled-components';
import { breakpoints } from '../../../utils';
import Footer from '../../molecules/Footer';
import Navbar from '../../molecules/Navbar';
import useSWR from 'swr';
import { fetcher } from '../../../config/fetcher';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

const MainLayout = ({ title, children, bgFooter }) => {
  const [localStrg, setLocalStrg] = useState({
    token: '',
    idUser: '',
  });

  const { data, error } = useSWR(
    [`/users/${localStrg.idUser}`, localStrg.token],
    fetcher
  );

  const dataUser = data?.data[0];
  const session = dataUser ? 'login' : false;

  useEffect(() => {
    setLocalStrg({
      token: localStorage.getItem('token'),
      idUser: localStorage.getItem('idUser'),
    });
  }, []);

  return (
    <StyledMainLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar session={session} data={dataUser} />
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
  .text-playfair {
    font-family: Playfair Display;
    font-weight: 900;
    font-size: 24px;
    line-height: 180%;
    color: #393939;
  }
  .text-nunito-bold {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #b8becd;
    &.dark {
      color: #393939;
    }
    &.light {
      color: #b8becd;
    }
  }
  .text-nunito-regular {
    font-family: Nunito;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 24px;

    color: #393939;
  }
  .title-vehicle {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    color: #042521;
    margin-bottom: 1rem;
  }
  .location {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 24px;
    color: #393939;
    mix-blend-mode: normal;
    margin-bottom: 2rem;
  }
  .status {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 25px;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    &.green {
      color: #087e0d;
    }
    &.default {
      color: #b8becd;
    }
  }
  .price {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 25px;
    text-align: right;
    color: #000000;
  }
  /* END = TYPHOGRAPHY */

  /* START = COLOR */
  .green {
    color: #087e0d !important;
  }
  /* END = COLOR */
`;
