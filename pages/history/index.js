import { Button, MainLayout, SearchInput } from '../../src/components';
import { HistoryStyled } from '../../src/styles/styledPage';
import { Select } from '@chakra-ui/react';
import Image from 'next/image';
import { IMGJogja } from '../../src/assets';
import { requireAuthentication } from '../../src/utils';

const History = ({ avatar, roleUser }) => {
  return (
    <MainLayout
      bgFooter="gray"
      title="History"
      avatar={avatar}
      session={roleUser ? 'login' : false}
    >
      <HistoryStyled className="container">
        <div className="main">
          <div className="search-section">
            <SearchInput
              className="search-input"
              placeholder="Search history"
            />
            <div className="filter-wrapper">
              <Select
                bg=" rgba(255, 255, 255, 0.5)"
                variant="filled"
                placeholder="Filter"
              >
                <option value="Type">Type</option>
                <option value="Date Added">Date Added</option>
                <option value="option3">Name</option>
              </Select>
            </div>
          </div>
          <div className="days-section">
            <h4 className="heading-section text-nunito-regular">Today</h4>
            <h4 className="text-nunito-bold dark">
              Please finish your payment for vespa for Vespa Rental Jogja
            </h4>
            <div className="divider" />
            <h4 className="text-nunito-bold dark">
              Your payment has been confirmed!
            </h4>
            <div className="divider" />
          </div>
          <div className="days-section">
            <h4 className="heading-section text-nunito-regular">A week ago</h4>
            <div className="history-wrapper">
              <div className="history-item">
                <div className="image-wrapper">
                  <Image src={IMGJogja} alt="history" layout="fill" />
                </div>
                <div className="desc">
                  <h5 className="text-nunito-bold dark">Vespa Matic</h5>
                  <p className="text-nunito-regular">Jan 18 to 21 2021</p>
                  <p className="text-nunito-bold dark">
                    Prepayment : Rp. 245.000
                  </p>
                  <p className="text-nunito-regular green">Has been returned</p>
                </div>
                <div className="btn-delete-wrapper">
                  <Button type="light" className="btn-delete">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <h3 className="text-playfair">New Arrival</h3>
          <div className="content">
            <div
              className="card"
              // key={item.idVehicles}
              // onClick={() => {
              //   return router.push({
              //     pathname: `/vehicles/${item.idVehicles}`,
              //   });
              // }}
            >
              <Image
                // loader={myLoader}
                src={IMGJogja}
                alt="image"
                layout="fill"
                unoptimized
              />
              <div className="description">
                <h5>Lamborghini</h5>
                <p className="text-regular">South Jakarta</p>
              </div>
            </div>
            <div
              className="card"
              // key={item.idVehicles}
              // onClick={() => {
              //   return router.push({
              //     pathname: `/vehicles/${item.idVehicles}`,
              //   });
              // }}
            >
              <Image
                // loader={myLoader}
                src={IMGJogja}
                alt="image"
                layout="fill"
                unoptimized
              />
              <div className="description">
                <h5>Lamborghini</h5>
                <p className="text-regular">South Jakarta</p>
              </div>
            </div>
          </div>
          <div className="view-more">
            <p>View more</p>
            <svg
              width="43"
              height="22"
              viewBox="0 0 43 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.4732 1L24.1875 11.6667C22.6518 13 20.3482 13 18.8125 11.6667L6.52678 1C4.99107 -0.333333 2.6875 -0.333333 1.15179 1C-0.383928 2.33333 -0.383928 4.33333 1.15179 5.66667L18.8125 21C20.3482 22.3333 22.6518 22.3333 24.1875 21L41.8482 5.66667C43.3839 4.33333 43.3839 2.33333 41.8482 1C40.3125 -0.333333 38.0089 -0.333333 36.4732 1Z"
                fill="#4A4C53"
              />
            </svg>
          </div>
        </div>
      </HistoryStyled>
    </MainLayout>
  );
};

export const getServerSideProps = requireAuthentication(async (context) => {
  try {
    const { req, res, params, query } = context;
    const avatar = res.avatar;
    const roleUser = res.role;
    const cookie = context.req.headers.cookie;

    return {
      props: {
        avatar: avatar,
        roleUser: roleUser,
        cookie: cookie,
      },
    };
  } catch (error) {}
});

export default History;
