<template>
  <li v-if='player._id !== current._id'>{{ player.name }} - {{ player.hand.length }}</li>
</template>

<script>
export default {
    name: 'next-player',
    props: ['player', 'current']
}
</script>

<style>

</style>