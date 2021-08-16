import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ children, type, onClick, className }) => {
  return (
    <StyledButton type={type} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: 'Title Button',
  type: 'light',
};

export default Button;

const StyledButton = styled.button`
  background-color: ${({ type }) => {
    switch (type) {
      case 'light':
        return '#FFCD61';
      case 'dark':
        return '#393939';
      default:
        return '#FFFFFF';
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case 'light':
        return '#393939';
      case 'dark':
        return '#FFCD61';
      default:
        return '#393939';
    }
  }};
  box-shadow: ${({ type }) => {
    switch (type) {
      case 'light':
        return '0px 0px 20px rgba(248, 161, 112, 0.47)';
      case 'dark':
        return 'box-shadow: 0px 0px 20px rgba(218, 218, 218, 0.25);';
      default:
        break;
    }
  }};
  border-radius: 10px;
  /* padding: 23px 0; */
  height: 78px;
  width: 100%;
  font: inherit;
  font-family: Nunito;
  border: 0;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
