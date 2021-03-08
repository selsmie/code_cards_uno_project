<template>
<div>
    <main v-if='!winner'>
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
                <!-- <button v-if='currentPlayer.hand.length === 1'>UNO!</button> -->
            </div>
        </section>
    </main>
    <section v-if='winner'>
        <h1>{{ currentPlayer.name }} Wins!</h1>
        <button v-on:click='playAgain'>Play again?</button>
    </section>
</div>
    
    
</template>

<script>
import { eventBus } from '../main.js'

import PlayerHand from './PlayerHand.vue'
import CardDeck from './CardDeck.vue'
import UpcomingPlayerList from './UpcomingPlayerList.vue'
import GameService from '../services/GameService.js'

export default {
    name: 'game',
    data() {
        return {
            playerList: [],
            remainingCardDeck: [],
            discardPile: [],
            currentPlayer: null,
            selectedCard: null,
            winner: false
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
        },
        sortCardColors: function() {
                this.currentPlayer.hand.sort(function (a, b) {
                    return a.color.length - b.color.length
                })
        },
        winnerIs: function() {
            if (this.currentPlayer.hand.length) {
                this.nextTurn()
            } else {
                this.winner = true
                // GameService.addWinner(this.currentPlayer.name)
            }
        },
        playAgain: function() {
            eventBus.$emit('play-again')
            this.winner = false
            this.playerList = []
            this.remainingCardDeck = []
            this.discardPile = []
            this.currentPlayer = null
            this.selectedCard = null
        }
        
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
            this.winnerIs()
        })

        eventBus.$on('draw-card', (card) => {
            this.currentPlayer.hand.push(card)
            this.nextTurn()
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
    justify-content: center;
    padding: 0px;
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