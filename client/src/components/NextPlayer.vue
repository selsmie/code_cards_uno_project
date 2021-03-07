<template>
  <li>{{ player.name }} - {{ player.hand.length }}</li>
</template>

<script>
export default {
    name: 'next-player',
    props: ['player']
}
</script>

<style>

</style>