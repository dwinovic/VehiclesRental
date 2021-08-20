import { useRouter } from 'next/router';
import { MainLayout, SectionCard } from '../../../src/components';
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { fetcher } from '../../../src/config/fetcher';
import Axios from '../../../src/config/Axios';

const VehiclesType = () => {
  const router = useRouter();
  const { type } = router.query;
  const [dataVehiclesType, setDataVehiclesType] = useState();
  const [totalPage, setTotalPage] = useState();

  const titlePage = type?.split('-').join(' ');

  // START = PAGINATION CONTROL
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    Axios.get(`/vehicles?page=${value}&limit=3`)
      .then((result) => {
        console.log('pagination', result);
        setDataVehiclesType(result.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    setPage(value);
  };

  // START = PAGINATION CONTROL

  useEffect(() => {
    Axios.get(`/vehicles?limit=3`)
      .then((result) => {
        setDataVehiclesType(result.data.data);
        setTotalPage(result.data.meta);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout bgFooter="gray" title={titlePage}>
      <StyledDetailTypes>
        <header className="container">
          <h1 className="heading-page">Popular in Town</h1>
          <p className="sub-heading">
            Click item to see details and reservation
          </p>
        </header>
        <SectionCard data={dataVehiclesType} anchor="/vehicles-type/category" />
        <section className="container pagination-wrapper">
          <Pagination
            count={totalPage?.totalPage}
            page={page}
            onChange={handleChange}
          />
        </section>
        <p className="no-content">There is no vehicle left</p>
      </StyledDetailTypes>
    </MainLayout>
  );
};

const StyledDetailTypes = styled.div`
  margin-top: 70px;

  /* START = HEADER SECTION */
  header.container {
    .heading-page {
      font-family: Playfair Display;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 50px;
      color: #000000;
      mix-blend-mode: normal;
      margin-bottom: 22px;
    }
    .sub-heading {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 50px;
      text-align: center;
      color: #b8becd;
    }
  }
  .no-content {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #b8becd;
    text-align: center;
    margin-top: 50px;
  }
  /* END = HEADER SECTION */

  /* START = PAGINATION SECTION */
  .pagination-wrapper {
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
  }
  /* END = PAGINATION SECTION */
`;
export default VehiclesType;
