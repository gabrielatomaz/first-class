<template>
    <div>
        <div v-for="subject in subjects" :key="subject.title">
            <CardBadges :subject="subject.title" :badges="subject.badges" />
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
                { title: 'Awards', badges: [
                    { 
                        type: 'certificate', 
                        color: 'danger-dark', 
                        level: {
                            type: 'training',
                            text: 'Training',
                        },
                    },
                    { 
                        type: 'medal', 
                        color: 'warning-dark', 
                        level: {
                            type: 'level-i',
                            text: 'Level I',
                        },
                    },
                    { 
                        type: 'medal', 
                        color: 'grey-light', 
                        level: {
                            type: 'level-ii',
                            text: 'Level II',
                        },
                    },
                    { 
                        type: 'medal', 
                        color: 'warning', 
                        level: {
                            type: 'level-iii',
                            text: 'Level III',
                        },
                    },
                ]},
                { title: 'CAD', badges: [] },
                { title: 'Drive Team', badges: [
                    { 
                        type: 'certificate', 
                        color: 'danger-dark', 
                        level: {
                            type: 'training',
                            text: 'Training',
                        },
                    },
                    { 
                        type: 'medal', 
                        color: 'warning-dark', 
                        level: {
                            type: 'level-i',
                            text: 'Level I',
                        },
                    },
                    { 
                        type: 'medal', 
                        color: 'grey-light', 
                        level: {
                            type: 'level-ii',
                            text: 'Level II',
                        },
                    },
                    { 
                        type: 'medal', 
                        color: 'warning', 
                        level: {
                            type: 'level-iii',
                            text: 'Level III',
                        },
                    },
                ]},
                { title: 'Electrical', badges: [] },
                { title: 'Mechanics', badges: [] },
                { title: 'Pneumatics', badges: [
                    { 
                        type: 'certificate', 
                        color: 'danger-dark', 
                        level: {
                            type: 'training',
                            text: 'Training',
                        },
                    },
                    { 
                        type: 'medal', 
                        color: 'warning-dark', 
                        level: {
                            type: 'level-i',
                            text: 'Level I',
                        },
                    },
                ]},
                { title: 'Programming', badges: [
                    { 
                        type: 'certificate', 
                        color: 'danger-dark', 
                        level: {
                            type: 'training',
                            text: 'Training',
                        },
                    },
                    { 
                        type: 'medal', 
                        color: 'warning-dark', 
                        level: {
                            type: 'level-i',
                            text: 'Level I',
                        },
                    },
                    { 
                        type: 'medal', 
                        color: 'grey-light', 
                        level: {
                            type: 'level-ii',
                            text: 'Level II',
                        },
                    },
                    { 
                        type: 'medal', 
                        color: 'warning', 
                        level: {
                            type: 'level-iii',
                            text: 'Level III',
                        },
                    },
                ]},
                { title: 'Strategy', badges: [] },
            ],
        }
    },
}
</script>