import { SearchInput, SectionCard } from '../../src/components';
import { MainLayout } from '../../src/components/layout';
import { StyledVehiclesType } from './styled';

const VehiclesType = () => {
  return (
    <MainLayout bgFooter="gray" title="Vehicles Types">
      <StyledVehiclesType>
        <section className="container">
          <form className="search-wrapper">
            <SearchInput placeholder="Search" />
          </form>
        </section>
        <SectionCard
          heading="Popular in town"
          anchor="vehicles-type/pupular-in-town"
        />
        <SectionCard heading="Cars" />
        <SectionCard heading="Motorbike" />
        <SectionCard heading="Bike" />
      </StyledVehiclesType>
    </MainLayout>
  );
};

export default VehiclesType;
