import Axios from '../../config/Axios';
import { dispatchTypes, toastify } from '../../utils';

export const reservationAction = (vehicles, router) => (dispatch, getState) => {
  console.log('vehicles masuk', vehicles);
  dispatch({ type: dispatchTypes.setReservationVehicles, payload: vehicles });
  return router.push(`/payments/${vehicles.idVehicles}`);
};
