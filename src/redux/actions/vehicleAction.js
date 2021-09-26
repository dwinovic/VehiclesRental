import axios from 'axios';
import Axios from '../../config/Axios';
import { dispatchTypes, toastify } from '../../utils';
import { showLoading } from './loadingAction';

export const addVehicle = (data, router, role) => (dispatch) => {
  dispatch(showLoading(true));
  const formData = new FormData();
  // console.log({
  //   idOwner: idUser,
  //   name: data.name,
  //   location: data.location,
  //   description: data.description,
  //   price: data.price,
  //   category: data.category,
  //   stock: totalStock,
  //   status: 'available',
  // });
  formData.append('idOwner', data.idUser);
  formData.append('name', data.name);
  formData.append('location', data.location);
  formData.append('description', data.description);
  formData.append('price', data.price);
  formData.append('category', data.category);
  formData.append('stock', data.stock);
  formData.append('capacity', 2);
  formData.append('paymentOption', 'per day');
  formData.append('status', 'available');
  // formData.append('images', uploadImage);

  // console.log('data.image1', data.image1);

  const imagesExist = [];

  data.images.forEach((image) => {
    // console.log('image before', typeof image);
    if (image !== false && image !== undefined) {
      formData.append('images', image);
      imagesExist.push(image);
      // console.log('image true', image);
    }
  });

  // console.log('uploadImage', uploadImage);
  // console.log('imagesExist', imagesExist);
  if (imagesExist.length === 0) {
    return toastify('Upps, Images required!', 'warning');
  }
  // console.log('imagesExist.length', imagesExist.length);
  // return;

  Axios.post('/vehicles', formData, {
    withCredentials: true,
    cookie: data.cookie,
  })
    .then((result) => {
      dispatch(showLoading(false));
      // console.log(result);
      toastify('Success ad vehicles', 'success');
      router.replace(`/vehicles/${result.data.data.idVehicles}`);
    })
    .catch((err) => {
      dispatch(showLoading(false));
      console.log('Error:', err.response);
      const message = err.response.data.error;
      toastify(message, 'warning');
    });
};
export const updateVehicle = (data, router) => (dispatch) => {
  dispatch(showLoading(true));
  const idVehicles = data.idVehicles;

  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('location', data.location);
  formData.append('description', data.description);
  formData.append('price', data.price);
  formData.append('category', data.category);
  formData.append('stock', data.stock);
  formData.append('capacity', 2);
  formData.append('paymentOption', 'per day');
  formData.append('status', data.status);
  // if (uploadImage.length === 0) {
  //   images.push(vehicle.images);
  //   console.log('vehicle.images', vehicle.images);
  // } else {
  //   images.push(uploadImage);
  // }
  const imagesExist = [];
  data.images.forEach((image) => {
    // console.log('image before', typeof image);
    if (image !== false && image !== undefined) {
      formData.append('images', image);
      imagesExist.push(image);
      // console.log('image true', image);
    }
  });

  return Axios.patch(`/vehicles/${idVehicles}`, formData, {
    withCredentials: true,
    cookie: data.cookie,
  })
    .then((result) => {
      // console.log(result);
      dispatch(showLoading(false));
      toastify('Success update vehicles', 'success');
      router.replace(`/vehicles/${idVehicles}`);
    })
    .catch((err) => {
      // console.log('Error:', err);
      dispatch(showLoading(false));
      const message = err.response.data.error;
      toastify(message, 'warning');
    });
};
