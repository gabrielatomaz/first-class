import { Students, Student } from '../../views'

const studentsRoutes = {
    path: 'students',
    component: Students,
}

const studentRoutes = {
    path: 'students/:id',
    component: Student,
}

export {
    studentsRoutes,
    studentRoutes,
}