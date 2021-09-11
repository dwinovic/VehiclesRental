import Axios from '../../config/Axios';
import { toastify } from '../../utils';

export const registerUser = (data, router) => (dispatch, getState) => {
  const dataSend = {
    email: data.email,
    password: data.password,
    name: data.name,
    role: 'customer',
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
