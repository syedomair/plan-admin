import Login from 'views/Login.jsx';
import Register from 'views/Register.jsx';

const publicRoutes = [
  {
    path: '/public/login',
    sidebarName: 'Table List',
    navbarName: 'Table List',
    icon: 'content_paste',
    component: Login,
  },
  {
    path: '/public/register',
    sidebarName: 'Table List',
    navbarName: 'Table List',
    icon: 'content_paste',
    component: Register,
  },
  {
    redirect: true,
    path: '/public',
    pathTo: '/public/login',
    navbarName: 'Redirect',
  },
];

export default publicRoutes;
