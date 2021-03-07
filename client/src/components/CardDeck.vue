<template>
  <div>
      <button class="deal-card" v-on:click="handleDeal">Deal Card</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

import CardsHeld from './CardsHeld.vue'

export default {
    name: 'CardDeck',
    props: ['card-deck'],
    data() {
        return {
            remainingCardDeck: [],
            discardPile: [],
            currentTopCard: null,
            selectedCard: null
        }
        
    },  
    methods: {
        handleDeal() {
            CardsHeld.push(remainingCardDeck.[1])
        },

        handleTakeTurn() {
            discardPile.push(selectedCard)
        },
    mounted() {
        eventBus.$on('card-list', (cardList) => {
            this.remainingCardDeck = cardList
        })

        eventBus.$on('top-card', (card) => {
            this.currentTopCard = card
        }) 
    }

    }  
}

</script>

<style>

</style>