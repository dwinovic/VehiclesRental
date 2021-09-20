import { dispatchTypes } from '../../utils';

const initialState = {
  item: {},
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case dispatchTypes.setReservationVehicles:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
