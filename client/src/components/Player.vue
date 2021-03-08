<template>
  <div>
      <p>Name: {{ player.name }}
          <span>
              <button v-on:click="handleDelete" id='test'>X</button>
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




<style scoped>
#test {
    border-radius: 50%;
    height: 25px;
    width: 25px;
    color: black;
    font-weight: bold;
    background-color: red;
}
</style>