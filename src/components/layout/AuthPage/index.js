import styled from 'styled-components';
import Image from 'next/image';
import { IMGBgLogin } from '../../../assets';
import PropTypes from 'prop-types';

const AuthPage = ({ children, imageBg }) => {
  return (
    <StyledAuthPage>
      <div className="bg-image">
        <div className="image-wrapper">
          <Image src={IMGBgLogin} layout="fill" alt="jeep" />
        </div>
      </div>
      {children}
    </StyledAuthPage>
  );
};

AuthPage.propTypes = {
  children: PropTypes.element.isRequired,
  imageBg: PropTypes.object.isRequired,
};

AuthPage.defaultProps = {
  imageBg: IMGBgLogin,
};

export default AuthPage;

const StyledAuthPage = styled.div`
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
`;
