import { combineReducers } from 'redux';
import reservationReducer from './reservation';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  reservation: reservationReducer,
});
export default rootReducers;
