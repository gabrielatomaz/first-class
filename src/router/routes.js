import { Sidebar } from '../components/shared'
import loginRoutes from './login/routes'
import registerRoutes from './register/routes'
import subjectsRoutes from './subjects/routes'
import levelsRoutes from './subjects/levels/routes'
import contentRoutes from './subjects/levels/content/routes'
import badgesRoutes from './badges/routes'
import studentsRoutes from './students/routes'
import profileRoutes from './profile/routes'

export default {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            component: Sidebar,
            children: [
                subjectsRoutes,
                levelsRoutes,
                contentRoutes,
                badgesRoutes,
                studentsRoutes,
                profileRoutes,
            ]
        },
        loginRoutes,
        registerRoutes,
        {
            path: '/',
            redirect: '/login',
        },
    ]
}