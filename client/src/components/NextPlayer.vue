<template>
  <li :class="current === player ? 'current': null" id='player-count'>{{ player.name }} - {{ player.hand.length }} 
    <span v-if='player.hand.length === 1'>UNO</span>
  </li>
</template>

<script>
export default {
    name: 'next-player',
    props: ['player', 'current']
}
</script>

<style>
.current {
  color: rgb(0, 16, 107);
  font-weight: bold;
}

#player-count {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

#player-count > span {
  margin-left: 10px;
}
</style>