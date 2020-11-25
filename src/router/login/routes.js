import {  Login } from '../../views'

export default {
        path: '/login',
        component: Login,
        children: [
        {
            path: '/logout',
            component: Login,
        },
    ],
}