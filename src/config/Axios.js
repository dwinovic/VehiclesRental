import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const Axios = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
  // withCredentials: true,
});

export default Axios;
