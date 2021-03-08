<template>
  <ul id='player-card-count'>
    <next-player v-for='(player, index) in players' :key='index' :player='player' :current='current'></next-player>
  </ul>
</template>

<script>
import NextPlayer from './NextPlayer.vue'

export default {
    name: 'upcoming-player',
    props: ['players', 'current'],
    components: {
        "next-player": NextPlayer
    }
}
</script>

<style>
#player-card-count {
    display: grid;
    border: 1px black solid;
    width: max-content;
    padding: 5px;
    margin: 0px 30px;
}
</style>