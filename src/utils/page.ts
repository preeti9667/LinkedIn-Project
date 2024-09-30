import { setCookie, deleteCookie } from 'cookies-next';

export const login = () => {
  // Mock login: set a token in cookies
  setCookie('token', 'your-token-value', { maxAge: 60 * 60 * 24 }); // Expires in 1 day
};

export const logout = () => {
  // Remove the token from cookies
  deleteCookie('token');
};
