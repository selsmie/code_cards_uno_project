<template>
  <div>
      <player v-for="player, index in playerList" :key="index"
      :player="player" />
  </div>
</template>

<script>
import Player from './Player';

export default {
    name: 'added-players',
    components: {
        'player': Player
    },
    props: ['playerList']
}
</script>

<style>

</style>