export const getCookies = (req, name) => {
  const value = `; ${req?.headers.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
