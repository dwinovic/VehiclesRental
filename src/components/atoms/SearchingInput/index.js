import styled from 'styled-components';

const SearchInput = ({ onChane, value, placeholder, onClick }) => {
  return (
    <StyledSearchInput>
      <input
        type="text"
        onChange={onChane}
        value={value}
        placeholder={placeholder}
      />
      <div className="btn-action">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
        >
          <path
            d="M33 33L25.75 25.75M29.6667 16.3333C29.6667 23.6971 23.6971 29.6667 16.3333 29.6667C8.96954 29.6667 3 23.6971 3 16.3333C3 8.96954 8.96954 3 16.3333 3C23.6971 3 29.6667 8.96954 29.6667 16.3333Z"
            stroke="#393939"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </StyledSearchInput>
  );
};

export default SearchInput;

const StyledSearchInput = styled.div`
  background-color: yellow;
  display: flex;
  width: 100%;
  position: relative;
  input {
    width: 100%;
    border: 0.8px solid #afb0b9;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 20px 46px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #b8becd;
    &:focus {
      outline: none;
    }
    &:valid {
      color: #393939;
    }
  }
  .btn-action {
    position: absolute;
    right: 10px;
    height: 100%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    &:hover {
      stroke: #ffcd61;
    }
  }
`;
