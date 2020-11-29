<template>
    <div class="mt-5">
        <span class="title is-4 has-text-info"> {{ student.name }} </span>
        <div class="has-text-grey ml-1">
            <p class="is-3"> <i class="fas fa-map-marker-alt"></i> {{ student.address }} - {{ student.country }} </p>
            <p class="is-3"> <i class="fas fa-phone"></i> {{ student.phone }} </p>
        </div>
        <div v-for="subject in student.subjects" :key="subject.title">
            <CardStudentProgress 
                :title="subject.title"
                :progress="subject.progress"
                :levels="subject.levels"
            />
        </div>
    </div>
</template>

<script>
import { CardStudentProgress } from '../../components/students'
export default {
    name: 'Student',

    components: {
        CardStudentProgress,
    },

    data() {
        return {
            student: {
                name: 'Guilherme Luvielmo',
                country: 'Brasil',
                address: 'Rua do Limoeiro',
                phone: '51999999999',
                subjects: [
                    { 
                        title: 'Awards',
                        progress: 90, 
                        levels: [
                            { 
                                title: 'Training', 
                                progress: 100, 
                                badge: {
                                    type: 'certificate', 
                                    color: 'danger-dark',
                                }, 
                            },
                            { 
                                title: 'Level I',
                                progress: 100,
                                 badge: {
                                    type: 'medal', 
                                    color: 'warning-dark', 
                                },
                            },
                            { 
                                title: 'Level II',
                                progress: 100,
                                badge: {
                                    type: 'medal', 
                                    color: 'grey-light', 
                                },
                            },
                            { 
                                title: 'Level III', 
                                progress: 50,
                            },
                        ],
                    },
                    { 
                        title: 'Drive Team', 
                        progress: 70, 
                        levels: [
                            { title: 'Training', progress: 100 },
                            { title: 'Level I', progress: 100 },
                            { title: 'Level II', progress: 100 },
                            { title: 'Level III', progress: 100 },
                            { title: 'Jedi', progress: 90 },
                        ],
                    },
                    { 
                        title: 'Programming',
                        progress: 95,
                        levels: [
                            { title: 'Training', progress: 100 },
                            { title: 'Level I', progress: 100 },
                            { title: 'Level II', progress: 100 },
                            { title: 'Level III', progress: 100 },
                            { title: 'Jedi', progress: 90 },
                        ],
                    },
                    { 
                        title: 'Strategy', 
                        progress: 85,
                        levels: [
                            { title: 'Training', progress: 100 },
                            { title: 'Level I', progress: 100 },
                            { title: 'Level II', progress: 100 },
                            { title: 'Level III', progress: 100 },
                            { title: 'Jedi', progress: 90 },
                        ],
                    },
                ]
            },
        }
    }

}
</script>

<style>

</style>