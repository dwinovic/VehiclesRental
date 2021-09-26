import { parseCookies } from '.';
import { getCookies } from './getCookies';

export function requireAuthenticationAdmin(gssp) {
  return async (context) => {
    const { req, res } = context;
    const parseCookie = parseCookies(req);
    // console.log('parseCookie', parseCookie);
    const { token, role, idUser } = parseCookie;

    res.role = role;
    res.idUser = idUser;

    if (!token) {
      // Redirect to login page
      return {
        redirect: {
          destination: '/login',
          statusCode: 302,
        },
      };
    }

    if (role !== 'admin') {
      return {
        redirect: {
          destination: '/',
          statusCode: 302,
        },
      };
    }

    return await gssp(context);
  };
}
