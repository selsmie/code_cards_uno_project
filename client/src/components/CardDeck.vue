<template>
  <div>
      <button class="pick-card" v-on:click="handlePickCard">Pick Card</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'CardDeck',
    props: ['remainingCards', 'selectedCard'],
    data() {
        return {
            remainingCardDeck: [],
            discardPile: [],
        }
        
    },  
    methods: {
        handlePickCard() {
            eventBus.$emit("picked-card", this.remainingCardDeck.shift())
        },

        handlePlaceCard() {
            this.discardPile.unshift(this.selectedCard)
        },

        handleInitialCard() {
            this.discardPile.unshift(this.remainingCardDeck[0])
            this.remainingCardDeck.splice(0, 1)
        },
        topCard() {
            eventBus.$emit("top-card", this.discardPile[0])
        }
    },

    mounted() {
        this.handleInitialCard();
        this.handlePlaceCard();
        this.topCard();
    }

    
}

</script>

<style>

</style>