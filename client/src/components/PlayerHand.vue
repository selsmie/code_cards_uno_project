<template>
<div class='player-hand-div'>
    <ul class='player-hand'>
      <cards-held v-for="(card, index) in hand" :key="index" :card="card" :topCard="topCard"></cards-held>
    </ul>
</div>

</template>

<script>
import CardsHeld from './CardsHeld.vue'

export default {
    name: "player-hand",
    props: ['hand', 'topCard'],
    components: {
        "cards-held": CardsHeld
    },
}
</script>

<style>

.player-hand-div {
  display: flex;
  justify-content: center;
  widows: 70%;
}
.player-hand{
    display: flex;
    height: 80px;
    margin: 0px 30px;
    padding: 0px;
    overflow: scroll;
}

ul::-webkit-scrollbar {
  display: none;
}
</style>