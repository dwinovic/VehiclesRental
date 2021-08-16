import styled from 'styled-components';
import { AuthPage } from '../../src/components';
import Footer from '../../src/components/molecules/Footer';

const LoginPage = () => {
  return (
    <StyledLogin>
      <AuthPage title="Login"></AuthPage>
      <Footer />
    </StyledLogin>
  );
};

export default LoginPage;

const StyledLogin = styled.div`
  /* background-color: pink; */
`;
