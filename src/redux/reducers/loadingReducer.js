import { dispatchTypes } from '../../utils';

const initialState = {
  status: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case dispatchTypes.setLoadingScreen:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default loadingReducer;
