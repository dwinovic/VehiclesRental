import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import reservationReducer from './reservationReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  reservation: reservationReducer,
});
export default rootReducers;
