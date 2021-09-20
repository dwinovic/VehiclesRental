/* eslint-disable @next/next/no-img-element */
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import  ILLoading  from '../../../assets/illustrations';

const LoadingScreen = () => {
  const { status } = useSelector((state) => state.loading);
  if (!status) {
    return null;
  }
  return (
    <StyledLoadingScreen>
      <div className="loading-animation-wrapper">
        <img src="./loader.gif" alt="loading" />
      </div>
    </StyledLoadingScreen>
  );
};

export default LoadingScreen;

const StyledLoadingScreen = styled.div`
  background-color: #00000036;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;
