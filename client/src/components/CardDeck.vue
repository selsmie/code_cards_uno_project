<template>
  <div>
      <p>Top Card: {{showTopCard}}</p>
      <button class="draw-card" v-on:click="handleDrawCard">Draw Card</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'CardDeck',
    props: ['remainingCards', 'discardCard'],
    data() {
        return {
            remainingCardDeck: [],
        }
        
    },  
    methods: {
        loadCards() {
            this.remainingCardDeck = this.remainingCards
        },

        handleDrawCard() {
            eventBus.$emit("draw-card", this.remainingCardDeck.shift())
        },

        // handlePlaceCard() {
        //     this.discardPile.unshift(this.selectedCard)
        // },

        // handleInitialCard() {
        //     this.discardPile.unshift(this.remainingCardDeck[0])
        //     this.remainingCardDeck.splice(0, 1)
        // },
        // topCard() {
        //     eventBus.$emit("top-card", this.discardPile[1])
        // },
        
    },

    mounted() {
        this.loadCards()
        // this.handleInitialCard();
        // this.handlePlaceCard();
        // this.topCard();
    },

    computed: {
        showTopCard: function() {
            return this.discardCard[0].color + " " + this.discardCard[0].number
        }
    }
}

</script scoped>

<style>

.pick-card {
    background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fed3bb24-454f-4bdf-a721-6aa8f23e7cef/d9gnihf-ec16caeb-ec9c-4870-9480-57c7711d844f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZmVkM2JiMjQtNDU0Zi00YmRmLWE3MjEtNmFhOGYyM2U3Y2VmXC9kOWduaWhmLWVjMTZjYWViLWVjOWMtNDg3MC05NDgwLTU3Yzc3MTFkODQ0Zi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gou6LQOyuHdVqL_nFIsWaiBXlt4AVGipFl75lBWiWIM');
}
</style>