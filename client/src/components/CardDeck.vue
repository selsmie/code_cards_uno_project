<template>
  <div>
      <button class="pick-card" v-on:click="handlePickCard">Pick Card</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

import CardsHeld from './CardsHeld.vue'

export default {
    name: 'CardDeck',
    props: ['remainingCards', 'selectedCard'],
    data() {
        return {
            remainingCardDeck: [],
            discardPile: [],
            currentTopCard: null,
            selectedCard: null
        }
        
    },  
    methods: {
        handlePickCard() {
            eventBus.$emit("picked-card", this.remainingCardDeck.shift())
        },

        handlePlaceCard() {
            discardPile.unshift(this.selectedCard)
        },


    mounted() {
        
    }

    }  
}

</script>

<style>

</style>