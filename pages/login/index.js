import styled from 'styled-components';
import { AuthPage } from '../../src/components';

const LoginPage = () => {
  return (
    <StyledLogin>
      <AuthPage></AuthPage>
    </StyledLogin>
  );
};

export default LoginPage;

const StyledLogin = styled.div`
  background-color: pink;
`;
