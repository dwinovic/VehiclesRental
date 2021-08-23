import { getCookies } from './getCookies';

export function requireAuthentication(gssp) {
  return async (context) => {
    const { req, res } = context;
    // get Cookie
    // const getToken = (req, name) => {
    //   const value = `; ${req.headers.cookie}`;
    //   const parts = value.split(`; ${name}=`);
    //   if (parts.length === 2) return parts.pop().split(';').shift();
    // };
    const token = await getCookies(req, 'tokenvr');
    const avatar = await getCookies(req, 'avatarvr');
    const role = await getCookies(req, 'rolevr');

    res.avatar = avatar;
    res.role = role;
    if (!token) {
      // Redirect to login page
      return {
        redirect: {
          destination: '/login',
          statusCode: 302,
        },
      };
    }

    return await gssp(context);
  };
}
