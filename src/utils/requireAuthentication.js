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
    const token = await getCookies(req, 'token');
    const resAvatar = await getCookies(req, 'avatar');
    let avatar;
    if (resAvatar) {
      avatar = resAvatar.split('%').pop();
    }

    const role = await getCookies(req, 'role');
    const idUser = await getCookies(req, 'idUser');
    // console.log('avatar in private', avatar);
    if (!token) {
      // Redirect to login page
      return {
        redirect: {
          destination: '/login',
          statusCode: 302,
        },
      };
    }

    res.avatar = avatar;
    res.role = role;
    res.token = token;
    res.idUser = idUser;

    return await gssp(context);
  };
}
