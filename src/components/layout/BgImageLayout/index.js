import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IMGBgLogin } from '../../../assets';

const BgImageLayout = ({ children, imageBg }) => {
  return (
    <>
      <StyledBgImageLayout>
        <div className="bg-image">
          <div className="image-wrapper">
            <Image src={imageBg} layout="fill" alt="jeep" />
          </div>
        </div>
        <div className="content">{children}</div>
      </StyledBgImageLayout>
    </>
  );
};

BgImageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  imageBg: PropTypes.object.isRequired,
};

BgImageLayout.defaultProps = {
  imageBg: IMGBgLogin,
  title: 'Type Title',
};

export default BgImageLayout;

const StyledBgImageLayout = styled.div`
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
