<template>
    <Card> 
        <span class="title is-4 has-text-info"> {{ subject }} </span>
        <div class="is-pulled-right">
            <Button 
                color="white" 
                :fullWidth="false" 
                icon="arrow-down" 
                iconColor="has-text-grey-light" 
                :event="toggleBadges"
                v-if="hasBadges()"
            />
        </div>
            <transition name="fade">
                <div v-if="showBadges">
                    <nav class="level">
                        <div 
                            class="level-item has-text-centered mt-4" 
                            v-for="badge in badges" 
                            :key="`${badge.type}-${badge.color}`"
                        >
                            <div>
                                <Badge :badge="badge.type" :color="badge.color" />
                                <p class="title is-6 mt-3">{{ badge.level.text }}</p>
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
        badges: {
            type: Array,
            required: true,
        }
    },

    data() {
        return { showBadges: false }
    },

    methods: {
        hasBadges() {
            return this.badges.length > 0
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