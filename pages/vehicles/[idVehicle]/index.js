import { AVADefault, IMGDefault, IMGJogja } from '../../../src/assets';
import { Button, GoBackPage, MainLayout } from '../../../src/components';
import { StyledDetailVehicle } from './styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { fetcher } from '../../../src/config/fetcher';

const DetailVehicle = () => {
  const [dataUser, setDataUser] = useState();
  const [role, setRole] = useState('');
  const router = useRouter();
  const idVehicles = router.query.idVehicle;

  const { data, error } = useSWR(`/vehicles/${idVehicles}`, fetcher);
  const dataVehicles = data?.data;

  useEffect(() => {
    const roleLocal = localStorage.getItem('role');
    setRole(roleLocal);
  }, []);

  if (!dataVehicles) {
    return <h1>Kooosong</h1>;
  }

  const myLoader = ({ src }) => {
    return `${dataVehicles.images[0]}`;
  };

  return (
    <MainLayout bgFooter="gray" title="Fixie - Gray Only">
      <StyledDetailVehicle className="container">
        <GoBackPage titleBack="Detail" />
        <section className=" detail-vehicle">
          <div className="galery-wrapper">
            <div className="image-main">
              <Image
                src={dataVehicles.images[0]}
                loader={myLoader}
                alt={dataVehicles.name}
                layout="fill"
              />
            </div>
            <div className="item-wrapper">
              <div className="control prev">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 25.3867L18 20.8867L22 16.3867"
                    stroke="#D7D7D7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="20"
                    cy="20.3867"
                    r="19"
                    transform="rotate(-180 20 20.3867)"
                    stroke="#D7D7D7"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="item-main">
                <div className="item">
                  <Image src={IMGDefault} alt="vehicle" layout="fill" />
                </div>
                <div className="item">
                  <Image src={IMGDefault} alt="vehicle" layout="fill" />
                </div>
              </div>
              <div className="control next">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15.3867L22 19.8867L18 24.3867"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="20"
                    cy="20.3867"
                    r="19"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="detail-info">
            <h1 className="title-vehicle">{dataVehicles.name}</h1>
            <p className="location">{dataVehicles.location}</p>
            <p className="status green">{dataVehicles.status}</p>
            <p className="paymentOption red">{dataVehicles.paymentOption}</p>
            <p className="detail">Capacity : 1 person</p>
            <p className="detail">
              Type : {dataVehicles.type ? dataVehicles.type : 'Motor'}
            </p>
            <p className="detail">{dataVehicles.description}</p>
            <p className="price">Rp. {dataVehicles.price}/day</p>
            <div className="amount-wrapper">
              <button className="btn primary">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.28 9.344C22.08 9.344 22.752 9.616 23.296 10.16C23.84 10.704 24.112 11.376 24.112 12.176C24.112 12.976 23.84 13.664 23.296 14.24C22.752 14.784 22.08 15.056 21.28 15.056H15.232V21.056C15.232 21.856 14.96 22.528 14.416 23.072C13.904 23.616 13.232 23.888 12.4 23.888C11.6 23.888 10.928 23.616 10.384 23.072C9.84 22.528 9.568 21.856 9.568 21.056V15.056H3.52C2.72 15.056 2.048 14.784 1.504 14.24C0.96 13.664 0.688 12.976 0.688 12.176C0.688 11.376 0.96 10.704 1.504 10.16C2.048 9.616 2.72 9.344 3.52 9.344H9.568V3.296C9.568 2.496 9.84 1.824 10.384 1.28C10.928 0.735999 11.6 0.464 12.4 0.464C13.2 0.464 13.872 0.735999 14.416 1.28C14.96 1.824 15.232 2.496 15.232 3.296V9.344H21.28Z"
                    fill="black"
                  />
                </svg>
              </button>
              <p className="btn count">2</p>
              <button className="btn secondary">
                <svg
                  width="18"
                  height="8"
                  viewBox="0 0 18 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.48106 7.448C1.82506 7.448 0.497063 6.328 0.497063 4.088C0.497063 1.88 1.82506 0.775999 4.48106 0.775999H13.5051C14.8491 0.775999 15.8411 1.064 16.4811 1.64C17.1531 2.216 17.4891 3.032 17.4891 4.088C17.4891 5.144 17.1531 5.976 16.4811 6.584C15.8411 7.16 14.8491 7.448 13.5051 7.448H4.48106Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        {role === 'customer' && (
          <section className=" button-action-wrapper">
            <Button type="dark" className="btn">
              Chat Admin
            </Button>
            <Button type="light" className="btn">
              Reservation
            </Button>
            <Button type="dark" className="btn small">
              Like
            </Button>
          </section>
        )}
        {role === 'admin' && (
          <section className=" button-action-wrapper">
            <Button
              type="dark"
              className="btn"
              onClick={() => {
                return router.push('/');
              }}
            >
              Add to home page
            </Button>
            <Button
              type="light"
              className="btn"
              onClick={() => {
                return router.push(
                  `/admin/vehicles/${dataVehicles.idVehicles}`
                );
              }}
            >
              Edit item
            </Button>
          </section>
        )}
      </StyledDetailVehicle>
    </MainLayout>
  );
};

export default DetailVehicle;
