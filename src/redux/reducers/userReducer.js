import { dispatchTypes } from '../../utils';

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case dispatchTypes.setUserLogin:
      return {
        ...state,
        user: action.payload,
      };
    case dispatchTypes.setUpdateUser:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case 'LOGOUT':
      return {
        ...state,
        user: action.payload,
        auth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
