import { dispatchTypes } from '../../utils';

const initialState = {
  vehicles: {},
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case dispatchTypes.setReservationVehicles:
      return {
        ...state,
        vehicles: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
