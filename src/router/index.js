import asyncComponent from '../components/asyncComponent';
import Dashboard from './dashboard';

const routes = [{
    path: '/',
    component: asyncComponent(() => import('../views/Root')),
    redirect: '/dashboard', 
    routes: [
        Dashboard
    ],
}];

export {
    routes
}