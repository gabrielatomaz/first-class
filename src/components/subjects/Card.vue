<template>
  <div class="card mt-3">
      <div class="card-content">
          <div  v-if="path">
            <router-link class="title is-4 has-text-info" :to="path"> {{ title }} </router-link>
            <progress class="progress is-info mt-3" :value="progress" max="100" />
          </div>
          <div v-else>
            <span class="title is-4 has-text-info"> {{ title }} </span>
            <div class="is-pulled-right">
                <Button color="white" :fullWidth="false"  icon="eye" :iconColor="iconColor()" :event="setWatched"/>
                <Button color="white" :fullWidth="false"  icon="question-circle" iconColor="has-text-grey-light"/>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Button from '../shared/Button'

export default {
    name: 'Card',

    components: { Button },

    props: {
        title: {
            type: String,
            required: true,
        },
        path: {
            type: String,
        },
        progress: {
            type: Number,
        },
        watched: {
            type: Boolean,
        }
    },

    data() {
        return {
            watchedContent: this.watched
        }
    },

    methods: {
        iconColor() {
            return this.watchedContent ? 'has-text-info' : 'has-text-grey-light'
        },

        setWatched() {
            this.watchedContent = !this.watchedContent 
        }
    }
}
</script>