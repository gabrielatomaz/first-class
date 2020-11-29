<template>
    <Card> 
        <span class="title is-4 has-text-info"> {{ subject }} </span>
        <div class="is-pulled-right">
            <Button 
                color="white" 
                :fullWidth="false" 
                icon="arrow-down" 
                iconColor="grey-light" 
                :event="toggleBadges"
                v-if="hasBadges()"
            />
        </div>
        <transition name="fade">
            <div v-if="showBadges">
                <nav class="level">
                    <div 
                        class="level-item has-text-centered mt-4" 
                        v-for="level in mapLevels()" 
                        :key="`${level.badge.type}-${level.badge.color}`"
                    >
                        <div>
                            <Badge :badge="level.badge.type" :color="level.badge.color" />
                            <p class="title is-6 mt-3">{{ level.text }}</p>
                        </div>
                    </div>
                </nav>
            </div>
        </transition>
    </Card>
</template>

<script>
import { Card, Button } from '../shared'
import Badge from './Badge.vue'

export default {
    name: 'CardBadges',

    components: { 
        Card,
        Badge,
        Button,
    },

    props: {
        subject: {
            type: String,
            required: true,
        },
        levels: {
            type: Array,
            required: true,
        }
    },

    data() {
        return { 
            showBadges: false,
            badges: null,
        }
    },
    
    methods: {
        hasBadges() {
            return !this.levels.every(level => !level.badge)
        },

        mapLevels() {
            return this.levels.filter(({ badge }) => badge)
        },

        toggleBadges() {
            this.showBadges = !this.showBadges
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
</style>