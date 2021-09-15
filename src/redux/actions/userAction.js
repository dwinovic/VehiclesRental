import axios from 'axios';
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
  const defaultImageValue =
    'https://prairietherapy.ca/wp-content/uploads/2017/03/Blank-Profile-pic.png';

  axios
    .post(`http://localhost:3000/api/login`, data, {
      withCredentials: true,
    })
    .then((result) => {
      // console.log('result in user action:', result);
      const dataUser = result.data.data;
      dataUser.avatar = dataUser.avatar ? dataUser.avatar : defaultImageValue;
      dispatch({ type: dispatchTypes.setUserLogin, payload: result.data.data });
      router.replace('/');
    })
    .catch((err) => {
      console.log('Error:', err.response);
      const message = err.response.data.data.error;
      // console.log('message:', message);
      toastify(message, 'warning');
    });
};

export const updateUser = (data, router, cookie) => (dispatch, getState) => {
  const idUser = getState().user.user.idUser;
  // console.log('cookie', cookie);
  // console.log('dataForm', data);
  const formData = new FormData();
  if (data.avatar.length !== 0) {
    // console.log('data.avatar.length !== 0', data.avatar.length !== 0);
    formData.append('avatar', data.avatar);
  }
  formData.append('name', data.name);
  if (data.birth) {
    formData.append('born', data.birth);
  }
  formData.append('phone', data.phone);
  formData.append('address', data.address);
  if (data.gender) {
    formData.append('gender', data.gender);
  }

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
