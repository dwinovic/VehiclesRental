/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { StyledSectionCard } from './styled';

const SectionCard = ({ heading, data, anchor }) => {
  const router = useRouter();
  // console.log('SectionCard:', data);
  return (
    <StyledSectionCard className="container">
      {heading && (
        <div className="heading-section">
          <h2>{heading}</h2>
          <Link href={`/${anchor}`}>
            <a className="anchor">View all</a>
          </Link>
        </div>
      )}

      <div className="content">
        {data &&
          data.map((item) => {
            // const myLoader = ({ src }) => {
            //   return `${item.images}`;
            // };
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
                <img
                  // loader={myLoader}
                  src={item.images}
                  alt={item.name}
                  // layout="fill"
                  // unoptimized
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
  data: PropTypes.array,
};

SectionCard.defaultProps = {};
export default SectionCard;
