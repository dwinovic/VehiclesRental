import { SearchInput, SectionCard } from '../../src/components';
import { MainLayout } from '../../src/components/layout';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../src/config/fetcher';
import { useForm } from 'react-hook-form';

const VehiclesType = () => {
  const [dataVehiclesType, setDataVehiclesType] = useState();
  const { data, error } = useSWR('/vehicles?limit=5', fetcher);

  // START = SEARCHING FEATURE
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setDataVehiclesType(data?.data);
    onSearching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('search')]);

  const onSearching = () => {
    const keyword = getValues('search');
    console.log('keyword', keyword);
  };

  // console.log(('WATCH SEARCHING:', watch('search')));
  // END = SEARCHING FEATURE

  return (
    <MainLayout bgFooter="gray" title="Vehicles Types">
      <StyledVehiclesType>
        <section className="container">
          <form className="search-wrapper" onSubmit={handleSubmit(onSearching)}>
            <SearchInput placeholder="Search" {...register('search')} />
          </form>
        </section>
        <SectionCard
          heading="Popular in town"
          data={dataVehiclesType}
          anchor="/vehicles-type/category"
        />
      </StyledVehiclesType>
    </MainLayout>
  );
};

const StyledVehiclesType = styled.div`
  /* START = SECTION SEARCH FEATURE */
  section.container {
    .search-wrapper {
      margin-top: 70px;
    }
  }
  /* END = SECTION SEARCH FEATURE */
`;
export default VehiclesType;
