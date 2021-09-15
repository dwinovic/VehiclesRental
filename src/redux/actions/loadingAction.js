import { dispatchTypes } from '../../utils';

export const showLoading = (status) => (dispatch) => {
  dispatch({ type: dispatchTypes.setLoadingScreen, payload: status });
};
