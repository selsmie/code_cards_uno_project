<template>
    <section v-if='currentPlayer'>
        <div class='player-card-counts'>
            <upcoming-player :current="currentPlayer" :players='playerList'></upcoming-player>
        </div>
        <div class='card-decks'>
            <card-deck :remainingCards='remainingCardDeck' :selectedCard='selectedCard'></card-deck>
        </div>
        <div class='current-player-hand' >
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
import CardDeck from './CardDeck.vue'
import UpcomingPlayerList from './UpcomingPlayerList'

export default {
    name: 'game',
    data() {
        return {
            playerList: [],
            remainingCardDeck: [],
            currentPlayer: null,
            selectedCard: null,
        }
    },
    components: {
        "player-hand": PlayerHand,
        "card-deck": CardDeck,
        "upcoming-player": UpcomingPlayerList 
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
            this.sortCardColors()
            this.selectedCard = null
        },
        sortCardColors: function() {
                this.currentPlayer.hand.sort(function (a, b) {
                    return a.color.length - b.color.length
                })
        },
    },
    mounted() {
        // eventBus.$on('card-list', (cardList) => {
        //     this.remainingCardDeck = cardList
        // })

        // eventBus.$on('player-list', (playerList) => {
        //     this.playerList = playerList
        //     this.startPlayer()
        //     this.sortCardColors()
        // })

        eventBus.$on('new-game', (cards, players) => {
            this.remainingCardDeck = cards
            this.playerList = players
            this.startPlayer()
            this.sortCardColors()
        })

        eventBus.$on('selected-card', (card) => {
            this.selectedCard = card
            const index = this.currentPlayer.hand.indexOf(this.selectedCard)
            this.currentPlayer.hand.splice(index, 1)
        })

        eventBus.$on('picked-card', (card) => {
            this.currentPlayer.hand.push(card)
        })
    },

}
</script>

<style>
p {
    color: white;
}
</style>