<template>
  <section>
      <div class='player-card-counts'>

      </div>
      <div class='card-decks'>
          <!-- <card-deck></card-deck> -->
      </div>
      <div class='current-player-hand'>
          <!-- <player-hand></player-hand> -->
      </div>
      <div class='action-buttons'>
          <button v-on:click="startPlayer">Start</button>
          <button v-on:click="nextTurn">End Turn</button>
      </div>
  </section>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'game',
    data() {
        return {
            playerList: [
                {
                    name: "Simon",
                    hand: [],
                    played: 0,
                    wins: 0
                },
                {
                    name: "Alex",
                    hand: [],
                    played: 0,
                    wins: 0
                },
                {
                    name: "Jenny",
                    hand: [],
                    played: 0,
                    wins: 0
                },
                {
                    name: "Mark",
                    hand: [],
                    played: 0,
                    wins: 0
                }
            ],
            remainingCardDeck: [],
            currentPlayer: null,
            selectedCard: null,
            currentTopCard: null,
        }
    },
    props: ['playersList', 'cardList'],
    componenets: {
        // "player-hand": PlayerHand,
        // "card-deck": CardDeck
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
        eventBus.$on('card-list', (cardList, playerList) => {
            this.remainingCardDeck = cardList,
            this.playerList = playerList
        }),

        eventBus.$on('top-card', (card) => {
            this.currentTopCard = card
        })
    }

}
</script>

<style>

</style>