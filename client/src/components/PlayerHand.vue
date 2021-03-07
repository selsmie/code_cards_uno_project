<template>
<div>
    <ul>
      <cards-held v-for="(card, index) in hand" :key="index" :card="card"></cards-held>
    </ul>
</div>

</template>

<script>
import CardsHeld from './CardsHeld.vue'

export default {
    name: "player-hand",
    props: ['hand'],
    components: {
        "cards-held": CardsHeld
    },
}
</script>

<style scoped>
ul{
    display: flex;
    overflow: scroll;
}

ul::-webkit-scrollbar {
  display: none;
}
</style>