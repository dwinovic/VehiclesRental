import { useRouter } from 'next/router';
import styled from 'styled-components';

const GoBackPage = ({ titleBack }) => {
  const router = useRouter();

  return (
    <StyledGoBackPage>
      <div
        className="back-controll"
        onClick={() => {
          return router.back();
        }}
      >
        <svg
          width="28"
          height="44"
          viewBox="0 0 28 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.7273 37.3014L13.1515 25.0167C11.4545 23.4811 11.4545 21.1777 13.1515 19.6421L26.7273 7.35741C28.4242 5.82182 28.4242 3.51844 26.7273 1.98285C25.0303 0.447266 22.4848 0.447266 20.7879 1.98285L1.27273 19.6421C-0.424242 21.1777 -0.424242 23.4811 1.27273 25.0167L20.7879 42.6759C22.4848 44.2115 25.0303 44.2115 26.7273 42.6759C28.4242 41.1404 28.4242 38.837 26.7273 37.3014Z"
            fill="#4A4C53"
          />
        </svg>
      </div>
      <p className="detail-nav">{titleBack}</p>
    </StyledGoBackPage>
  );
};

GoBackPage.defaultProps = {
  titleBack: 'Title Back',
};

export default GoBackPage;

const StyledGoBackPage = styled.div`
  /* START = NAVIGATION HEADER */
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 50px;
  .detail-nav {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 24px;
    color: #000000;
  }
  /* END = NAVIGATION HEADER */
`;
