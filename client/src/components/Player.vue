<template>
  <div>
      <p>Name: {{ player.name }}
          <span>
              <button v-on:click="handleDelete">Remove</button>
          </span>
      </p>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    name: 'player',
    props: ['player'],
    methods: {
        handleDelete() {
            eventBus.$emit('delete-player', this.player)
        }
    } 
}
</script>




<style>

</style>