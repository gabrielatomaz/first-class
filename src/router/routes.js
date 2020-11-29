import { Sidebar } from '../components/shared'
import loginRoutes from './login/routes'
import registerRoutes from './register/routes'
import subjectsRoutes from './subjects/routes'
import levelsRoutes from './subjects/levels/routes'
import contentRoutes from './subjects/levels/contents/routes'
import badgesRoutes from './badges/routes'
import { studentsRoutes, studentRoutes } from './students/routes'
import profileRoutes from './profile/routes'
import mentorsRoutes from './mentors/routes'

export default {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '',
            component: Sidebar,
            children: [
                subjectsRoutes,
                levelsRoutes,
                contentRoutes,
                badgesRoutes,
                studentsRoutes,
                studentRoutes,
                profileRoutes,
                mentorsRoutes,
            ]
        },
        loginRoutes,
        registerRoutes,
    ]
}