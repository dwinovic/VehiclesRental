/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Select } from '@chakra-ui/react';
import * as moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, MainLayout, SearchInput } from '../../src/components';
import Axios from '../../src/config/Axios';
import { deleteReservation } from '../../src/redux/actions/reservationAction';
import { HistoryStyled } from '../../src/styles/styledPage';
import {
  moneyFormatter,
  requireAuthentication,
  toastify,
} from '../../src/utils';

const History = ({ roleUser, dataHistory, cookie, newArrival }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [history, setHistory] = useState(dataHistory);
  const userState = useSelector((state) => state.user.user);

  const actionDeleteHistory = (idReservation, status) => {
    if (status === 'paid off' || status === 'used') {
      return toastify('Sorry item cannot delete', 'warning');
    }
    dispatch(deleteReservation(idReservation));
  };

  useEffect(() => {
    Axios.get(`/reservations/customer/${userState.idUser}`, {
      withCredentials: true,
      headers: cookie ? { cookie: cookie } : undefined,
    })
      .then((res) => {
        console.log('data', res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [history]);

  return (
    <MainLayout
      bgFooter="gray"
      title="History"
      session={roleUser ? 'login' : false}
    >
      <HistoryStyled className="container">
        <div className="main">
          {/* <div className="search-section">
            <SearchInput
              className="search-input"
              placeholder="Search history"
              onClick={() => {
                return toastify(
                  'Sorry this feature is under development.',
                  'warning'
                );
              }}
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
          </div> */}
          <div className="days-section">
            <h4 className="heading-section text-nunito-regular">Today</h4>
            <h4 className="text-nunito-bold dark">
              {dataHistory.data.length === 0
                ? 'You have no history. Please an order of our service'
                : null}
            </h4>
            <div className="divider" />
            {/* <h4 className="text-nunito-bold dark">
              Your payment has been confirmed!
            </h4> */}
            {/* <div className="divider" /> */}
          </div>
          <div className="days-section">
            <h4 className="heading-section text-nunito-regular">
              {dataHistory.data.length > 0 && 'Your History Reservation'}
            </h4>
            <div className="history-wrapper">
              {history?.data.length > 0 &&
                history?.data.map((item) => {
                  return (
                    <div className="history-item" key={item.idReservation}>
                      <div className="image-wrapper">
                        <img src={item.images} alt="history" />
                      </div>
                      <div className="desc">
                        <h5 className="text-nunito-bold dark">{item.name}</h5>
                        <p className="text-nunito-regular">
                          {moment(item.reservationStartDate).format('D, MMM')} -{' '}
                          {moment(item.reservationEndDate).format(
                            'D, MMM, YYYY'
                          )}
                        </p>
                        <p className="text-nunito-bold dark">
                          Prepayment : Rp. Rp.{' '}
                          {moneyFormatter.format(item.priceTotal)}
                        </p>
                        {item.status === 'pending' && (
                          <p className="text-nunito-regular red">
                            Finish payment
                          </p>
                        )}
                        {item.status === 'paid off' && (
                          <p className="text-nunito-regular orange">
                            Has been paid off and waiting confirmation
                          </p>
                        )}
                        {item.status === 'used' && (
                          <p className="text-nunito-regular blue">
                            Happy using
                          </p>
                        )}
                        {item.status === 'returned' && (
                          <p className="text-nunito-regular green">
                            Has been returned
                          </p>
                        )}
                      </div>
                      <div className="btn-delete-wrapper">
                        <Button
                          theme="light"
                          className="btn-delete"
                          onClick={() =>
                            actionDeleteHistory(item.idReservation, item.status)
                          }
                        >
                          Delete
                        </Button>
                        {roleUser === 'admin' && (
                          <Button
                            theme="dark"
                            className="btn-delete"
                            onClick={() =>
                              router.push(`/payments/${item.idReservation}`)
                            }
                          >
                            Approve
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="right-section">
          <h3 className="text-playfair">New Arrival</h3>
          <div className="content">
            {newArrival?.data &&
              newArrival?.data.map((newItem) => {
                return (
                  <>
                    <div
                      className="card"
                      key={newItem.idVehicles}
                      onClick={() => {
                        return router.push({
                          pathname: `/vehicles/${newItem.idVehicles}`,
                        });
                      }}
                    >
                      <img
                        // loader={myLoader}
                        src={newItem.images}
                        alt="image"
                        // layout="fill"
                        // unoptimized
                      />
                      <div className="description">
                        <h5>{newItem.name}</h5>
                        <p className="text-regular">{newItem.location}</p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <div
            className="view-more"
            onClick={() => router.push('/vehicles-type')}
          >
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

    const roleUser = res.role;
    const idUser = res.idUser;
    const cookie = context.req.headers.cookie;
    const { data } = await Axios.post(
      `/reservations/history/${idUser}`,
      { role: roleUser },
      {
        withCredentials: true,
        headers: req ? { cookie: cookie } : undefined,
      }
    );

    const { data: newArrival } = await Axios.get(`/vehicles?limit=2`, {
      withCredentials: true,
      headers: req ? { cookie: cookie } : undefined,
    });
    console.log('newArrival', newArrival);

    return {
      props: {
        roleUser: roleUser ? roleUser : null,
        cookie: cookie ? cookie : null,
        dataHistory: data ? data : null,
        newArrival: newArrival ? newArrival : null,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error ? error : null,
      },
    };
  }
});

export default History;
