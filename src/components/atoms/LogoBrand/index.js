import PropTypes from 'prop-types';
import Link from 'next/link';

const LogoBrand = ({ className }) => {
  return (
    <Link className={className} href="/">
      <a>
        <svg
          width="44"
          height="43"
          viewBox="0 0 44 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="22" cy="21.5104" rx="22" ry="21.4523" fill="#393939" />
          <path
            d="M22 30.8589C27.2377 30.8589 31.5487 26.7089 31.5487 21.5105C31.5487 16.3121 27.2377 12.1621 22 12.1621C16.7622 12.1621 12.4512 16.3121 12.4512 21.5105C12.4512 26.7089 16.7622 30.8589 22 30.8589Z"
            fill="#FFCD61"
            stroke="white"
            // eslint-disable-next-line react/no-unknown-property
            stroke-width="3"
          />
        </svg>
      </a>
    </Link>
  );
};

LogoBrand.propTypes = {
  className: PropTypes.string,
};

export default LogoBrand;
