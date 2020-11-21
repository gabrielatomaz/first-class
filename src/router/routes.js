import { Login, Register, Subjects } from '../views'
import Levels from '../views/subjects/levels/Levels.vue'
import Content from '../views/subjects/levels/content/Content.vue'
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
            path: '/class',
            component: Sidebar,
            children: [
                { 
                    path: '', 
                    component: Subjects
                },
                {
                    path: ':subject',
                    component: Levels,
                },
                {
                    path: ':subject/:level',
                    component: Content,
                }
            ]
        },
    ]
}