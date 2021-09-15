import cookie from 'cookie';
import Axios from '../../src/config/Axios';

const login = (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    Axios.post('/users/login', { email, password }, { withCredentials: true })
      .then((result) => {
        const response = result.data.data;
        console.log('response ', response);
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.setHeader('Set-Cookie', [
          cookie.serialize('token', response.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 1000 * 60 * 12,
            path: '/',
          }),
          cookie.serialize('idUser', response.idUser, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 1000 * 60 * 12,
            path: '/',
          }),
          cookie.serialize('avatar', response.avatar, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 1000 * 60 * 12,
            path: '/',
          }),
          cookie.serialize('role', response.role, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 1000 * 60 * 12,
            path: '/',
          }),
        ]);
        res.status(200);
        res.json({ data: response });
      })
      .catch((err) => {
        const error = err.response;
        // console.log(error);
        // console.log('error.data', error.data);
        // console.log('error.status', error.status);
        const a = {};
        a.b = a;
        res.status(error.status).json({ data: error.data });
        // res.status(error.status).send(error);
        // res.status(501);
        // res.json({ error: JSON.stringify(error) });
      });
  }
};

export default login;
