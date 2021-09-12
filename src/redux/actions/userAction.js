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

export const updateUser = (data, router, cookie) => (dispatch, getState) => {
  const idUser = getState().user.user.idUser;
  // console.log('cookie', cookie);
  console.log('dataForm', data);
  const formData = new FormData();
  if (data.avatar) {
    formData.append('avatar', data.avatar);
  }
  formData.append('name', data.name);
  if (data.birth) {
    formData.append('born', data.birth);
  }
  formData.append('phone', data.phone);
  formData.append('address', data.address);
  formData.append('gender', data.gender);

  Axios.patch(`/users/${idUser}`, formData, {
    withCredentials: true,
    cookie: cookie,
  })
    .then((result) => {
      dispatch({
        type: dispatchTypes.setUpdateUser,
        payload: result.data.data,
      });
      toastify('Success update profile');
      router.replace('/profile');
    })
    .catch((err) => {
      console.log('Error:', err.response);
      if (err.response.status === 501) {
        const message = err.response.data.error;
        toastify(message, 'warning');
      }
    });
};
