export const authRole = {
  admin: ['admin'],
  user: ['user', 'admin'],
};

export const RoutePermittedRole = {
  admin: 'admin',
  user: 'user',
};
export const defaultUser = {
  displayName: 'John Alex',
  email: 'demo@example.com',
  token: 'access-token',
  role: 'user',
  photoURL: '/assets/images/avatar/A11.jpg',
};
export const initialUrl = '/ico/main'; // this url will open after login
