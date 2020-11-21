<template>
    <div>
        <div class="columns">
            <div class="column mt-5">
                <Button icon="plus" class="is-pulled-right" :fullWidth="false" type="outlined" />
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div v-for="subject in subjects" :key="subject.title">
                    <Card :title="subject.title" :progress="subject.progress" :path="`class/${subject.path}`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Card } from '../../components/subjects'
import Button from '../../components/shared/Button'

export default {
    name: 'Subjects',

    components: { 
        Card,
        Button,
    },

    data() {
        return {
            subjects: [    
                { title: 'Awards', path: 'awards', progress: 35 },
                { title: 'CAD', path: 'cad', progress: 50 },
                { title: 'Drive Team', path: 'drive-team', progress: 40 },
                { title: 'Electrical', path: 'electrical', progress: 100 },
                { title: 'Mechanics', path: 'mechanics', progress: 0 },
                { title: 'Pneumatics', path: 'pneumatics', progress: 0 },
                { title: 'Programming', path: 'programming', progress: 10 },
                { title: 'Strategy', path: 'strategy', progress: 0 },
            ]
        }
    },
}
</script>
