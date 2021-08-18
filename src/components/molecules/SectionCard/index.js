import Image from 'next/image';
import Link from 'next/link';
import { IMGJogja, IMGKalimantan, IMGMalang } from '../../../assets';
import { StyledSectionCard } from './styled';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const SectionCard = ({ heading, data, anchor }) => {
  const router = useRouter();
  console.log(data);
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
        {data &&
          data.map((item) => {
            const myLoader = ({ src }) => {
              return `${item.images}`;
            };
            return (
              <div
                className="card"
                key={item.idVehicles}
                onClick={() => {
                  return router.push({
                    pathname: `/vehicles/${item.idVehicles}`,
                  });
                }}
              >
                <Image
                  loader={myLoader}
                  src={item.images}
                  alt={item.name}
                  layout="fill"
                />
                <div className="description">
                  <h5>{item.name}</h5>
                  <p className="text-regular">{item.location}</p>
                </div>
              </div>
            );
          })}
        {!data && <h1>No vehicles</h1>}
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
