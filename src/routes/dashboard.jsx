// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import People from '@material-ui/icons/People';
// import ContentPaste from "@material-ui/icons/ContentPaste";
import Unarchive from '@material-ui/icons/Unarchive';
// core components/views
import DashboardPage from 'views/Dashboard.jsx';


import UsersList from 'views/UsersList.jsx';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Material Dashboard',
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: '/users',
    sidebarName: 'User List',
    navbarName: 'User List',
    icon: People,
    component: UsersList,
  },
  {
    redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect',
  },
];

export default dashboardRoutes;
