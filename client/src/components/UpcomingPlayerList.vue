<template>
  <ul>
      <li id='current'>{{ currentPlayer.name }} - {{ currentPlayer.hand.length }}</li>
      <next-player :player='upNext' ></next-player>
  </ul>
</template>

<script>
import NextPlayer from './NextPlayer.vue'

export default {
    name: 'upcoming-player',
    props: ['players', 'currentPlayer'],
    components: {
        "next-player": NextPlayer
    },
    computed: {
        upNext: function() {
            this.players.forEach((player) => {
                if (player !== this.currentPlayer) {
                    return player
                }
            })
        }
    }
}
</script>

<style>

</style>