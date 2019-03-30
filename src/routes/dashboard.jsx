// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import People from '@material-ui/icons/People';
import Assignment from '@material-ui/icons/Assignment';
// import ContentPaste from "@material-ui/icons/ContentPaste";
// import Unarchive from '@material-ui/icons/Unarchive';
// core components/views
import DashboardPage from 'views/Dashboard.jsx';
import UsersList from 'views/UsersList.jsx';
import PlansList from 'views/PlansList.jsx';
import Plan from 'views/Plan.jsx';
import Restricted from '../components/HOC/restricted';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Material Dashboard',
    icon: Dashboard,
    component: Restricted(DashboardPage),
  },
  {
    path: '/users',
    sidebarName: 'User List',
    navbarName: 'User List',
    icon: People,
    component: Restricted(UsersList),
  },
  {
    path: '/plans',
    sidebarName: 'Plans',
    navbarName: 'Plans',
    icon: Assignment,
    component: Restricted(PlansList),
  },
  {
    path: '/plans-detail/:id',
    sidebarName: 'PlanDetails',
    navbarName: 'PlanDetails',
    icon: Assignment,
    component: Restricted(Plan),
    hidden: true,
  },
  {
    redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect',
  },
];

export default dashboardRoutes;
