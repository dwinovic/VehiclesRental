import { parseCookies } from '.';

export function requireAuthentication(gssp) {
  return async (context) => {
    const { req, res } = context;
    const parseCookie = parseCookies(req);
    const { role, token, idUser } = parseCookie;
    if (!token) {
      // Redirect to login page
      return {
        redirect: {
          destination: '/login',
          statusCode: 302,
        },
      };
    }

    res.role = role;
    res.token = token;
    res.idUser = idUser;

    return await gssp(context);
  };
}
