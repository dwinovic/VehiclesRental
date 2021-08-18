import Axios from './Axios';

export const fetcher = (url, token) =>
  Axios.get(url, { headers: { Authorization: 'Bearer ' + token } }).then(
    (res) => res.data
  );
