import styled from 'styled-components';
import Image from 'next/image';
import { IMGBgLogin } from '../../../assets';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
