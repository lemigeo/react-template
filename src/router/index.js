import asyncComponent from '../components/asyncComponent';
import Dashboard from './dashboard';

const routes = [{
    path: '/',
    redirect: "/dashboard",
    component: asyncComponent(() => import('../views/Root')), 
    routes: [
        Dashboard
    ],
}];

export {
    routes
}