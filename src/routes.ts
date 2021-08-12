
import { lazy } from 'react';

// containers
const Home = lazy(() => import('features/Home'));
const WhatsUpNew = lazy(() => import('features/WhatsUpNew'))

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/home', exact: true,component: Home },
  { path: '/aboutus' },
  { path: '/products'},
  { path: '/services'},
  { path: '/whatsupnew',  exact: true, component: WhatsUpNew },
  { path: '/upcomming' },
  { path: '/support', },
];

export default routes;