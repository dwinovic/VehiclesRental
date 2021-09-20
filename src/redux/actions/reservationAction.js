import Axios from '../../config/Axios';
import { dispatchTypes, toastify } from '../../utils';

export const reservationAction = (vehicles, router) => (dispatch, getState) => {
  dispatch({ type: dispatchTypes.setReservationVehicles, payload: vehicles });
  return router.push(`/vehicles/${vehicles.idVehicles}/reservation`);
};

export const payNowAction = (data, router) => (dispatch, getState) => {
  data.status = 'pending';
  Axios.post('/reservations', data, { withCredentials: true })
    .then((result) => {
      const responseData = result.data.data;
      return router.push(`/payments/${responseData.idReservation}`);
    })
    .catch((err) => {
      console.log('Error:', err.response);
      if (err.response.status === 501) {
        const message = err.response.data.error;
        toastify(message, 'warning');
      }
    });
};

export const finishPaymentAction = (data, router) => (dispatch, getState) => {
  Axios.patch(`/reservations/${data.idReservation}`, data, {
    withCredentials: true,
  })
    .then((result) => {
      toastify('Reservation success', 'success');
      return router.replace(`/history`);
    })
    .catch((err) => {
      console.log('Error:', err.response);
    });
};

export const deleteReservation =
  (idReservation, router) => (dispatch, getState) => {
    Axios.delete(`/reservations/${idReservation}`, {
      withCredentials: true,
    })
      .then((result) => {
        toastify('Delete success', 'success');
      })
      .catch((err) => {
        console.log('Error:', err.response);
      });
  };
