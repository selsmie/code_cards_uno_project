<template>
  <ul id='testing'>
    <next-player v-for='(player, index) in players' :key='index' :player='player' :current='current'></next-player>
  </ul>
</template>

<script>
import NextPlayer from './NextPlayer.vue'

export default {
    name: 'upcoming-player',
    data() {
        return {
            nextIndex: null
        }
    },
    props: ['players', 'current'],
    components: {
        "next-player": NextPlayer
    },
    computed: {
        currentIndex() {
            const index = this.players.indexOf(this.current)
            this.nextIndex = index + 1
        }
    }
}
</script>

<style>
#testing {
    display: grid;
}
</style>