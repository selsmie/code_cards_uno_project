<template>
    <section v-if='currentPlayer'>
        <div class='player-card-counts'>
            <upcoming-player :current="currentPlayer" :players='playerList'></upcoming-player>
        </div>
        <div class='card-decks'>
            <card-deck :remainingCards='remainingCardDeck' :discardCard="discardPile"></card-deck>
        </div>
        <div class='current-player-hand' >
            <p>{{ currentPlayer.name}}'s turn</p>
            <player-hand :hand="currentPlayer.hand" :topCard="discardPile[0]"></player-hand>
        </div>
        <div class='action-buttons'>
            <button>UNO!</button>
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
            discardPile: [],
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
        eventBus.$on('new-game', (cards, players, discard) => {
            this.remainingCardDeck = cards
            this.playerList = players
            this.discardPile = discard
            this.startPlayer()
            this.sortCardColors()
        })

        eventBus.$on('selected-card', (card) => {
            this.selectedCard = card
            const index = this.currentPlayer.hand.indexOf(this.selectedCard)
            this.currentPlayer.hand.splice(index, 1)
            this.discardPile.unshift(this.selectedCard)
            this.selectedCard = null
        })

        eventBus.$on('draw-card', (card) => {
            this.currentPlayer.hand.push(card)
        })
    },

}
</script>

<style>
.current-player-hand > p {
    color: white;
    text-align: center;
    font-size: 25px;
    margin: 5px;
}

.action-buttons {
    display: flex;
    justify-content: space-between;
    padding: 0px 30px;
}

.action-buttons > button {
    width: 80px;
    height: 60px;
    border-radius: 12px;
}

.player-card-counts {
    width: 200px;
    margin: 0px;
}
</style>