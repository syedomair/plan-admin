import AdminDashboard from 'layouts/AdminDashboard.jsx';
import Public from 'layouts/Public.jsx';

const indexRoutes = [
  { path: '/public', name: 'Public', component: Public },
  { path: '/', name: 'Home', component: AdminDashboard },
];

export default indexRoutes;
