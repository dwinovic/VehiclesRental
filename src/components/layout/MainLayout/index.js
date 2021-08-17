import Head from 'next/head';
import Navbar from '../../molecules/Navbar';

const MainLayout = ({ title }) => {
  return (
    <>
      <Head>
        <title>Vehicles Rental {title}</title>
      </Head>
      <Navbar />
    </>
  );
};

export default MainLayout;
