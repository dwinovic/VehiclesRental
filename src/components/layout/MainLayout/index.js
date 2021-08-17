import Head from 'next/head';
import Footer from '../../molecules/Footer';
import Navbar from '../../molecules/Navbar';

const MainLayout = ({ title, children, bgFooter }) => {
  return (
    <>
      <Head>
        <title>Vehicles Rental {title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer bgFooter={bgFooter} />
    </>
  );
};

export default MainLayout;
