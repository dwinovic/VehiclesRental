import styled from 'styled-components';
import Image from 'next/image';
import { IMGBgLogin } from '../../../assets';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../molecules/Footer';

const AuthPage = ({ children, imageBg, title }) => {
  return (
    <>
      <Head>
        <title>Vehicles Rent | {title}</title>
      </Head>
      <StyledAuthPage>
        <div className="bg-image">
          <div className="image-wrapper">
            <Image src={IMGBgLogin} layout="fill" alt="jeep" />
          </div>
        </div>
        <div className="content">{children}</div>
      </StyledAuthPage>
      <Footer />
    </>
  );
};

AuthPage.propTypes = {
  children: PropTypes.element.isRequired,
  imageBg: PropTypes.object.isRequired,
};

AuthPage.defaultProps = {
  imageBg: IMGBgLogin,
  title: 'Type Title',
};

export default AuthPage;

const StyledAuthPage = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.4);
  .bg-image {
    position: absolute;
    height: 758px;
    width: 100vw;
    z-index: -9;
    .image-wrapper {
      position: relative;
      height: 100%;
      img {
        object-fit: cover;
      }
    }
  }
  .content {
    height: 758px;
    width: 100vw;
  }
`;
