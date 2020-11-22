import { Login, Register, Subjects, Content, Levels } from '../views'
import { Sidebar } from '../components/shared'

export default {
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/logout',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '',
            component: Sidebar,
            children: [
                { 
                    path: 'subjects', 
                    component: Subjects
                },
                {
                    path: 'subjects/:subject',
                    component: Levels,
                },
                {
                    path: 'subjects/:subject/:level',
                    component: Content,
                }
            ]
        },
    ]
}