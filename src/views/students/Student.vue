<template>
    <div class="mt-5">
        <Card class="has-background-info-light mb-5"> 
            <span class="title is-4 has-text-info"> {{ student.name }} </span>
            <div class="has-text-grey ml-1">
                <p class="is-3"> <i class="fas fa-map-marker-alt"></i> {{ student.address }} - {{ student.country }} </p>
                <p class="is-3"> <i class="fas fa-phone"></i> {{ student.phone }} </p>
            </div>
        </Card>
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
import { Card } from '../../components/shared'

export default {
    name: 'Student',

    components: {
        CardStudentProgress,
        Card,
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
                        progress: 75, 
                        levels: [
                            { 
                                title: 'Training', 
                                progress: 100,
                                receiveBadge: true, 
                                badge: {
                                    type: 'certificate', 
                                    color: 'danger-dark',
                                }, 
                            },
                            { 
                                title: 'Level I',
                                progress: 100,
                                receiveBadge: true,
                                 badge: {
                                    type: 'medal', 
                                    color: 'warning-dark', 
                                },
                            },
                            { 
                                title: 'Level II',
                                progress: 100,
                                receiveBadge: true,
                                badge: {
                                    type: 'medal', 
                                    color: 'grey-light', 
                                },
                            },
                            { 
                                title: 'Level III', 
                                progress: 50,
                                receiveBadge: false,
                                badge: {
                                    type: 'medal', 
                                    color: 'warning', 
                                },
                            },
                        ],
                    },
                    { 
                        title: 'Drive Team', 
                        progress: 50, 
                        levels: [
                            { 
                                title: 'Training', 
                                progress: 100,
                                receiveBadge: true, 
                                badge: {
                                    type: 'certificate', 
                                    color: 'danger-dark',
                                }, 
                            },
                            { 
                                title: 'Level I',
                                progress: 75,
                                receiveBadge: true,
                                 badge: {
                                    type: 'medal', 
                                    color: 'warning-dark', 
                                },
                            },
                            { 
                                title: 'Level II',
                                progress: 0,
                                receiveBadge: false,
                                badge: {
                                    type: 'medal', 
                                    color: 'grey-light', 
                                },
                            },
                            { 
                                title: 'Level III', 
                                progress: 0,
                                receiveBadge: false,
                                badge: {
                                    type: 'medal', 
                                    color: 'warning', 
                                },
                            },
                        ],
                    },
                    { 
                        title: 'Programming',
                        progress: 50,
                        levels: [
                            { 
                                title: 'Training', 
                                progress: 100,
                                receiveBadge: true, 
                                badge: {
                                    type: 'certificate', 
                                    color: 'danger-dark',
                                }, 
                            },
                            { 
                                title: 'Level I',
                                progress: 100,
                                receiveBadge: true,
                                 badge: {
                                    type: 'medal', 
                                    color: 'warning-dark', 
                                },
                            },
                            { 
                                title: 'Level II',
                                progress: 0,
                                receiveBadge: false,
                                badge: {
                                    type: 'medal', 
                                    color: 'grey-light', 
                                },
                            },
                            { 
                                title: 'Level III', 
                                progress: 0,
                                receiveBadge: false,
                                badge: {
                                    type: 'medal', 
                                    color: 'warning', 
                                },
                            },
                        ],
                    },
                    { 
                        title: 'Strategy', 
                        progress: 100,
                        levels: [
                            { 
                                title: 'Training', 
                                progress: 100,
                                receiveBadge: true, 
                                badge: {
                                    type: 'certificate', 
                                    color: 'danger-dark',
                                }, 
                            },
                            { 
                                title: 'Level I',
                                progress: 100,
                                receiveBadge: true,
                                 badge: {
                                    type: 'medal', 
                                    color: 'warning-dark', 
                                },
                            },
                            { 
                                title: 'Level II',
                                progress: 100,
                                receiveBadge: true,
                                badge: {
                                    type: 'medal', 
                                    color: 'grey-light', 
                                },
                            },
                            { 
                                title: 'Level III', 
                                progress: 100,
                                receiveBadge: true,
                                badge: {
                                    type: 'medal', 
                                    color: 'warning', 
                                },
                            },
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