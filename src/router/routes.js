import { Login, Register } from '../views'
import { Sidebar } from '../components/shared'

export default {
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/index',
            name: 'sidebar',
            component: Sidebar,
        }
    ]
}