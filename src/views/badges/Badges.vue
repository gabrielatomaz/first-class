<template>
    <div>
        <div v-for="subject in subjects" :key="subject.title">
            <CardBadges :subject="subject.title" :levels="subject.levels" />
        </div>
    </div>
</template>

<script>
import { CardBadges } from '../../components/badges'

export default {
    name: 'Badges',

    components: { CardBadges },

    data() {
        return {
            subjects: [    
                { title: 'Awards', levels: [
                        { 
                            path: 'training',
                            title: 'Training',
                            badge: {
                                type: 'certificate', 
                                color: 'danger-dark', 
                            },
                        },
                        { 
                            path: 'level-i',
                            title: 'Level I',
                            badge: {
                                type: 'medal', 
                                color: 'warning-dark', 
                            },
                        },
                        { 
                            path: 'level-ii',
                            text: 'Level II',
                            badge: {
                                type: 'medal', 
                                color: 'grey-light', 
                            },
                        },
                        {
                            path: 'level-iii',
                            title: 'Level III',
                            badge: {
                                type: 'medal', 
                                color: 'warning', 
                            }
                        },
                    ]
                },
                { 
                    title: 'CAD',
                    levels: [
                        { 
                            path: 'training',
                            title: 'Training',
                        },
                        { 
                            path: 'level-i',
                            title: 'Level I',
                            badge: {
                                type: 'medal', 
                                color: 'warning-dark', 
                            },
                        },
                        { 
                            path: 'level-ii',
                            text: 'Level II',
                        },
                        {
                            path: 'level-iii',
                            title: 'Level III',
                            badge: {
                                type: 'medal', 
                                color: 'warning', 
                            }
                        },
                    ] 
                },
                { title: 'Drive Team', levels: [
                    { 
                            path: 'training',
                            title: 'Training',
                        },
                        { 
                            path: 'level-i',
                            title: 'Level I',
                        },
                        { 
                            path: 'level-ii',
                            text: 'Level II',
                        },
                        {
                            path: 'level-iii',
                            title: 'Level III',
                        },
                    ] 
                },
                { title: 'Electrical', levels: [] },
                { title: 'Mechanics', levels: [] },
                { title: 'Pneumatics', levels: [] },
                { title: 'Programming', levels: [] },
                { title: 'Strategy', levels: [] },
            ],
        }
    },
}
</script>