import Axios from '../../config/Axios';
import { dispatchTypes, toastify } from '../../utils';

export const registerUser = (data, router, role) => (dispatch, getState) => {
  const dataSend = {
    email: data.email,
    password: data.password,
    name: data.name,
    role: role,
  };
  Axios.post('/users/register', dataSend, { withCredentials: true })
    .then((result) => {
      toastify('Success register. Please login', 'success');
      router.push('/login');
    })
    .catch((err) => {
      console.log('Error:', err.response);
      if (err.response.status === 501) {
        const message = err.response.data.error;
        toastify(message, 'warning');
      }
    });
};

export const loginUser = (data, router) => (dispatch, getState) => {
  Axios.post('/users/login', data, { withCredentials: true })
    .then((result) => {
      // console.log(result);
      dispatch({ type: dispatchTypes.setUserLogin, payload: result.data.data });
      router.replace('/');
    })
    .catch((err) => {
      console.log('Error:', err.response);
      if (err.response.status === 501) {
        const message = err.response.data.error;
        toastify(message, 'warning');
      }
    });
};
