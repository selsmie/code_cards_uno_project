<template>
  <li :class="current === player ? 'current': null" id='player-count'>{{ player.name }} - {{ player.hand.length }}</li>
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

#player-count {
  list-style: none;
}
</style>