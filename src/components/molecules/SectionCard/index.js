import Image from 'next/image';
import Link from 'next/link';
import { IMGJogja, IMGKalimantan, IMGMalang } from '../../../assets';
import { StyledSectionCard } from './styled';
import PropTypes from 'prop-types';

const SectionCard = ({ heading, data, anchor }) => {
  return (
    <StyledSectionCard className="container">
      {heading && (
        <div className="heading-section">
          <h2>{heading}</h2>
          <Link href={`/${anchor}`}>
            <a className="anchor">Viewe all</a>
          </Link>
        </div>
      )}

      <div className="content">
        <div className="card">
          <Image src={IMGJogja} alt="image" layout="fill" />
          <div className="description">
            <h5>Merapi</h5>
            <p className="text-regular">Yogyakarta</p>
          </div>
        </div>
        <div className="card">
          <Image src={IMGKalimantan} alt="image" layout="fill" />
          <div className="description">
            <h5>Teluk Bogam</h5>
            <p className="text-regular">Kalimantan</p>
          </div>
        </div>
        <div className="card">
          <Image src={IMGMalang} alt="image" layout="fill" />
          <div className="description">
            <h5>Bromo</h5>
            <p className="text-regular">Malang</p>
          </div>
        </div>
        <div className="card">
          <Image src={IMGJogja} alt="image" layout="fill" />
          <div className="description">
            <h5>Malioboro</h5>
            <p className="text-regular">Yogyakarta</p>
          </div>
        </div>
        <div className="card">
          <Image src={IMGJogja} alt="image" layout="fill" />
          <div className="description">
            <h5>Malioboro</h5>
            <p className="text-regular">Yogyakarta</p>
          </div>
        </div>
      </div>
    </StyledSectionCard>
  );
};

SectionCard.propTypes = {
  heading: PropTypes.string,
  anchor: PropTypes.string,
  data: PropTypes.object,
};

SectionCard.defaultProps = {};
export default SectionCard;
