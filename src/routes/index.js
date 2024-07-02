import App from '../pages/App';
import Calendar from '../pages/Calendar';

const Routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/calendar',
    component: Calendar,
    exact: true
  }
];

export default Routes;
