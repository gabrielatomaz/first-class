import { 
    Login, 
    Register, 
    Subjects, 
    Content, 
    Levels, 
    Badges,
    Students,
    Profile,
} from '../views'
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
                    component: Subjects,
                },
                {
                    path: 'subjects/:subject',
                    component: Levels,
                },
                {
                    path: 'subjects/:subject/:level',
                    component: Content,
                },
                {
                    path: 'badges',
                    component: Badges,
                },
                {
                    path: 'students',
                    component: Students,
                },
                {
                    path: 'Profile',
                    component: Profile,
                }
            ]
        },
    ]
}