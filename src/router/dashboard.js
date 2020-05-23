import asyncComponent from '../components/asyncComponent';

const Dashboard =  {
    path: '/dashboard',
    component: asyncComponent(() => import('../views/dashboard/Layout')),
    redirect: "/dashboard/main",
    routes: [
        {
            path: '/dashboard/main',
            component: asyncComponent(() => import('../views/dashboard/Main')),
        },
        {
            path: '/dashboard/order',
            component: asyncComponent(() => import('../views/dashboard/Order')),
        }
    ],
}

export default Dashboard;
