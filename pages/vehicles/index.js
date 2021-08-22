import styled from 'styled-components';
import { MainLayout } from '../../src/components';

const Vehicles = () => {
  return (
    <MainLayout bgFooter="gray" title="Mencari vehicles">
      <StyledVehiclesPage className="container">
        <h1>In Development</h1>
      </StyledVehiclesPage>
    </MainLayout>
  );
};

export default Vehicles;

// START = STYLING THIS PAGE
const StyledVehiclesPage = styled.div`
  background-color: yellow;
`;
// END = STYLING THIS PAGE
