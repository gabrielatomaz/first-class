<template>
    <Card>
        <div class="mb-5">
            <span class="title is-4 has-text-info"> {{ title }} </span>
            <div class="is-pulled-right">
                <Button 
                    color="white" 
                    :fullWidth="false" 
                    icon="arrow-down" 
                    iconColor="grey-light" 
                    :event="toggleLevels"
                    v-if="hasLevels()"
                />
            </div>
        </div>
        <progress class="progress is-info mt-5" :value="progress" max="100" />
        <transition name="fade">
            <div v-if="showLevels">
                <div class="columns">
                    <div class="column is-10 is-offset-1">
                        <div v-for="level in levels" :key="level.title" class="mt-5">
                            <i class="fas fa-arrow-right has-text-grey-light mr-2"></i> <span class="title has-text-grey is-5"> {{ level.title }} </span>
                            <div class="is-pulled-right">
                                <Button 
                                    color="white" 
                                    :fullWidth="false" 
                                    :icon="!level.badge ? 'hand-holding-medical' : level.badge.type" 
                                    :iconColor="!level.badge ? 'grey-light' : level.badge.color"
                                    :event="() => { toggleBage(level.badge) }"
                                    class="ml-2 mb-1"
                                    size="large"
                                />
                            </div>
                            <progress class="progress is-grey mt-5" :value="level.progress" max="100" />
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </Card>
</template>

<script>
import { Card, Button } from '../shared'

export default {
    name: 'CardStudentProgress',

    components: { 
        Card,
        Button,
    },

    props: {
        title: {
            type: String,
            required: true,
        },
        levels: {
            type: Array,
        },
        progress: {
            type: Number,
        },
    },

    data() {
        return {
            showLevels: false,
        }
    },

    methods: {
        hasLevels() {
            return this.levels.length > 0
        },
        
        toggleLevels() {
            this.showLevels = !this.showLevels
        },

        addBadge() {
            return
        },

        toggleBage() {
            event.preventDefault()
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

.progress.is-grey::-webkit-progress-value {
    background-color: hsl(0, 0%, 71%);
}

.progress.is-grey::-moz-progress-bar {
    background-color: hsl(0, 0%, 71%);
}

.progress.is-grey::-ms-fill {
    background-color: hsl(0, 0%, 71%);
}

.progress.is-grey:indeterminate {
    background-image: hsl(0, 0%, 71%);
}
</style>