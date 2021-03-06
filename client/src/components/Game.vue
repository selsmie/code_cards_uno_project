<template>
  <section>
      <div class='player-card-counts'>
   
      </div>
      <div class='card-decks'>
          <!-- <card-deck></card-deck> -->
      </div>
      <div class='current-player-hand'>
          <p>{{ currentPlayer.name}}'s turn</p>
          <player-hand :hand="currentPlayer.hand"></player-hand>
      </div>
      <div class='action-buttons'>
          <button v-on:click="nextTurn">End Turn</button>
      </div>
  </section>
</template>

<script>
import { eventBus } from '../main.js'

import PlayerHand from './PlayerHand.vue'

export default {
    name: 'game',
    data() {
        return {
            playerList: [],
            remainingCardDeck: [],
            currentPlayer: null,
            selectedCard: null,
            currentTopCard: null,
        }
    },
    components: {
        "player-hand": PlayerHand,
    },
    methods: {
        startPlayer: function() {
            let index = Math.floor(Math.random() * this.playerList.length)
            this.currentPlayer = this.playerList[index]
        },
        nextTurn: function() {
            const currentIndex = this.playerList.indexOf(this.currentPlayer)
            if (currentIndex <= (this.playerList.length - 2)) {
                this.currentPlayer = this.playerList[currentIndex + 1]
            } else {
                this.currentPlayer = this.playerList[0]
            }
        },
        

    },
    mounted() {
        eventBus.$on('card-list', (cardList) => {
            this.remainingCardDeck = cardList
        })

        eventBus.$on('player-list', (playerList) => {
            this.playerList = playerList
            this.startPlayer()
        })

        eventBus.$on('top-card', (card) => {
            this.currentTopCard = card
        })

        
    }

}
</script>

<style>

</style>