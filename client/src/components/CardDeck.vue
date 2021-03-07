<template>
  <div>
      <p v-if='discardPile.length'>Top card: {{discardPile[0].number}} - {{discardPile[0].color}}</p>
      <button class="draw-card" v-on:click="handleDrawCard">Draw Card</button>
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
        handleDrawCard() {
            eventBus.$emit("draw-card", this.remainingCardDeck.shift())
        },

        handleInitialCard() {
            if(this.discardPile.length === 0) {
                this.discardPile.push(this.remainingCardDeck[0])
                this.remainingCardDeck.splice(0, 1)
            } else {
                return
            }
        },
        loadCards() {
            this.remainingCardDeck = this.remainingCards
        }
    },

    mounted() {
        this.loadCards()
        this.handleInitialCard()

        eventBus.$on('selected-card', (card) => this.discardPile.unshift(card))
    },
    computed: {
        sendTopCard: function() {
            eventBus.$emit("top-card", this.discardPile[0])
        }  
    },

    
}

</script>

<style>

.draw-card {
    background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fed3bb24-454f-4bdf-a721-6aa8f23e7cef/d9gnihf-ec16caeb-ec9c-4870-9480-57c7711d844f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZmVkM2JiMjQtNDU0Zi00YmRmLWE3MjEtNmFhOGYyM2U3Y2VmXC9kOWduaWhmLWVjMTZjYWViLWVjOWMtNDg3MC05NDgwLTU3Yzc3MTFkODQ0Zi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gou6LQOyuHdVqL_nFIsWaiBXlt4AVGipFl75lBWiWIM');
}
</style>