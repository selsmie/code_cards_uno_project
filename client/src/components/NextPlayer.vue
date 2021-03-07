<template>
  <li :class="current === player ? 'current': null">{{ player.name }} - {{ player.hand.length }}</li>
</template>

<script>
export default {
    name: 'next-player',
    props: ['player', 'current']
}
</script>

<style>
.current {
  color: red;
  font-weight: bold;
}
</style>