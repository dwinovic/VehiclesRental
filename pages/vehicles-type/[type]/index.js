import { useRouter } from 'next/router';
import { MainLayout, SectionCard } from '../../../src/components';
import { StyledDetailTypes } from './styled';
import Pagination from '@material-ui/lab/Pagination';
import { useState } from 'react';

const VehiclesType = () => {
  const router = useRouter();
  const { type } = router.query;

  const titlePage = type?.split('-').join(' ');

  // START = PAGINATION CONTROL
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  // START = PAGINATION CONTROL

  return (
    <MainLayout bgFooter="gray" title={titlePage}>
      <StyledDetailTypes>
        <header className="container">
          <h1 className="heading-page">Popular in Town</h1>
          <p className="sub-heading">
            Click item to see details and reservation
          </p>
        </header>
        <SectionCard />
        <SectionCard />
        <section className="container pagination-wrapper">
          <Pagination count={10} page={page} onChange={handleChange} />
        </section>
        <p className="no-content">There is no vehicle left</p>
      </StyledDetailTypes>
    </MainLayout>
  );
};

export default VehiclesType;
