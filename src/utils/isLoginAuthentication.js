import { getCookies } from './getCookies';

export function isLoginAuthentication(gssp) {
  return async (context) => {
    const { req, res } = context;
    // get Cookie
    // const getToken = (req, name) => {
    //   const value = `; ${req.headers.cookie}`;
    //   const parts = value.split(`; ${name}=`);
    //   if (parts.length === 2) return parts.pop().split(';').shift();
    // };
    const token = await getCookies(req, 'token');
    const avatar = await getCookies(req, 'avatar');
    const role = await getCookies(req, 'role');
    console.log('token', token);
    if (res?.avatar) {
      res.avatar = avatar;
    }
    if (res?.role) {
      res.role = role;
    }
    if (token) {
      // Redirect homepage
      res.writeHead(302, {
        // or 301
        Location: '/',
      });
      res.end();
    }

    return await gssp(context);
  };
}
