import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useField, Form, FormikProps, Formik } from 'formik';

const Input = ({ label, theme, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <StyledInput
        className={props.className}
        theme={theme}
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <ErrorInput className="error">{meta.error}</ErrorInput>
      ) : null}
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: 'Type here input!',
};

export default Input;

const StyledInput = styled.input`
  /* padding: 23px 0 23px 40px; */
  width: 100%;
  height: 79px;
  padding-left: 23px;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 10px;
  font: inherit;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: ${({ theme }) => {
    switch (theme) {
      case 'text-white':
        return '#ffffff';
      default:
        break;
    }
  }};

  border: 0;
  &:focus {
    outline: 0;
    /* background: rgba(255, 255, 255, 0.582); */
  }
  &::placeholder {
    color: ${({ theme }) => {
      switch (theme) {
        case 'text-white':
          return '#c7c7c7';
        default:
          break;
      }
    }};
  }
`;

const ErrorInput = styled.p`
  margin-top: 8px;
  color: #ffffffff;
  font-weight: 600;
`;
