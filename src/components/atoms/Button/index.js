import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({
  children,
  theme,
  onClick,
  className,
  disabled,
  ...props
}) => {
  // console.log(disabled);
  return (
    <StyledButton
      onClick={onClick}
      className={className}
      disabled={disabled}
      theme={theme}
      {...props}
    >
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
  background-color: ${({ theme, disabled }) => {
    if (disabled) return '#aaaaaa';
    if (theme === 'light') return '#FFCD61';
    if (theme === 'light-outline') return 'transparent';
    if (theme === 'dark') return '#393939';
    return '#FFFFFF';
  }};
  border-color: ${({ theme }) => {
    switch (theme) {
      case 'light':
        return '#FFCD61';
      case 'light-outline':
        return 'transparent';
      case 'dark':
        return '#393939';
      default:
        return '#FFFFFF';
    }
  }};
  border: ${({ theme }) => {
    switch (theme) {
      case 'light':
        return 0;
      case 'light-outline':
        return '2px';
      case 'dark':
        return 0;
      default:
        return 1;
    }
  }}px;
  color: ${({ theme }) => {
    switch (theme) {
      case 'light':
        return '#393939';
      case 'light-outline':
        return '#393939';
      case 'dark':
        return '#FFCD61';
      default:
        return '#393939';
    }
  }};
  box-shadow: ${({ theme }) => {
    switch (theme) {
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
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;
  &:hover {
    opacity: ${({ disabled }) => {
      disabled ? 1 : 0.8;
    }};
    cursor: ${({ disabled }) => {
      disabled ? 'default' : 'pointer';
    }};
  }
`;
