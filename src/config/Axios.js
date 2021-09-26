import axios from 'axios';
import getConfig from 'next/config';
// const { publicRuntimeConfig } = getConfig();

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
  // withCredentials: true,
});

export default Axios;
