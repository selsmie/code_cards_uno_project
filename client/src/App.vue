<template>
    <main id="main">
            <header-main v-on:click="backHome"></header-main>
        <section>
            <button class="play-button" v-if="gameInProgress === null" v-on:click='setup'>Play</button>
            <player-form :players='players' v-if="gameInProgress === false"></player-form>
            <game :players='players' :drawPile='drawPile' :discardPile='discardPile' :currentPlayer='currentPlayer' :winner='winner'></game>
        </section>
    </main>
</template>

<script>
import PlayerForm from './components/PlayerForm.vue'
import Game from './components/Game.vue'
import Header from './components/Header.vue'
import GameService from '@/services/GameService'
import { eventBus } from './main'

export default {
    name: 'App',
    data() {
        return {
            gameInProgress: null,
            players: [],
            drawPile: [],
            discardPile: [],
            currentPlayer:  null,
            selectedCard: null,
            winner: false,
        }
    },
    components: {
        "player-form": PlayerForm,
        "game": Game,
        "header-main": Header,
    },

    mounted() {
        this.getCardsAndLeaders()

        eventBus.$on('new-game', () => {
            this.shuffle()
            this.startDiscardPile()
            this.deal()
            this.startPlayer()
            this.sortCardColors()
            this.gameInProgress = true
        })

        eventBus.$on('play-again', () => {
            this.gameInProgress = false
            this.winner = false
            this.getCardsAndLeaders()
            this.discardPile = []
            this.currentPlayer = null
            this.selectedCard = null
        })

        eventBus.$on('new-player', (name) => {
            if (!this.players.find(player => player.name === name)) {
                if (this.leaderboard.find(player => player.name === name)) {
                    const playerToAdd = this.leaderboard.find(player => player.name === name)
                    this.players.push(playerToAdd)
                } 
                else {
                    GameService.addPlayer({
                        name: name,
                        hand: [],
                        playCount: 0,
                        winCount: 0
                    })
                    .then(response => this.players.push(response))
                }
            } 
            else {
                alert("Be original! There can only be 'uno' player with that name.")
            }
            })

        eventBus.$on('delete-player', (playerToDelete) => {
            const i = this.players.findIndex(player => playerToDelete === player)
            this.players.splice(i, 1)
        })

        eventBus.$on('selected-card', (card) => {
            this.selectedCard = card
            const index = this.currentPlayer.hand.indexOf(this.selectedCard)
            this.currentPlayer.hand.splice(index, 1)
            this.discardPile.unshift(this.selectedCard)
            this.selectedCard = null
            if (this.discardPile[0].number === "🎨") {
                return
            } else {
                this.handleChangeDirectionCard()
                this.winnerIs()
                this.handlePlus4Card()
                this.handlePlus2Card()
                this.handleSkipCard()
            }
     
        })

        eventBus.$on('draw-card', (card) => {
            this.currentPlayer.hand.push(card)
            this.nextTurn()
        })

        eventBus.$on('draw-pile-empty', () => {
            this.discardPile.map((card, index) => {
                if (index > 0) {
                    this.drawPile.push(card)
                }
            })
            this.discardPile.splice(1, this.discardPile.length)
        })
    },

    methods: {
        backHome: function() {
            this.gameInProgress = null
        },

        setup: function() {
            this.gameInProgress = false
        },

        getCardsAndLeaders: function() {
            GameService.getCards()
                .then(originalDeck => this.drawPile = originalDeck)

            GameService.getLeaderboard()
                .then(leaderboard => this.leaderboard = leaderboard)
        },

        shuffle() {
            for (let i = this.drawPile.length - 1; i > 0; i--) {
                let randomIndex = Math.floor(Math.random() * i)
                let temp = this.drawPile[i]
                this.$set(this.drawPile, i, this.drawPile[randomIndex])
                this.$set(this.drawPile, randomIndex, temp)
            }
        },

        deal() {
            for (const player of this.players) {
                const newHand = this.drawPile.splice(-7, 7)
                this.$set(player, 'hand', newHand)
            }
        },

        startDiscardPile() {
            this.discardPile = this.drawPile.splice(-1, 1)
        },

        startPlayer: function() {
            let index = Math.floor(Math.random() * this.players.length)
            this.currentPlayer = this.players[index]
        },

        nextTurn: function() {
            const currentIndex = this.players.indexOf(this.currentPlayer)
            if (currentIndex <= (this.players.length - 2)) {
                this.currentPlayer = this.players[currentIndex + 1]
            } else {
                this.currentPlayer = this.players[0]
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
                this.addPlayCount()
                this.addWinCount()
                this.players.forEach((player) => {
                    GameService.updatePlayerCounts(player, player._id)
                })
            }
        },

        addPlayCount: function() {
            this.players.forEach(player => player.playCount++)
        },

        addWinCount: function() {
            this.currentPlayer.winCount++
        },

        handlePlus4Card() {
            if (this.discardPile[0].number === "+4") {
                let i = 0
                while (i < 4) {
                    this.currentPlayer.hand.push(this.drawPile.shift())
                    i++
                }
            }
        },

        handlePlus2Card() {
            if (this.discardPile[0].number === "+2") {
                let i = 0
                while (i < 2) {
                    this.currentPlayer.hand.push(this.drawPile.shift())
                    i++
                }
            }
        },
        
        handleSkipCard() {
            if (this.discardPile[0].number === "🚫") {
                this.nextTurn()
            }
        },

        handleChangeDirectionCard() {
            if (this.discardPile[0].number === "↩️") {
                this.players.reverse()
            }
        },
    }
}
</script>

<style>
body {
    margin: 0;
    /* background-color: #700c0c; */
    background-color: #31700c;
    background-image: url("./assets/felt-background.png");
    background-size: 250px;
    background-repeat: repeat;
    color: white;
}

#main {
    display: grid;
    grid-template-rows: 13vh 87vh;
    grid-template-columns: 100vw;
}

.play-button {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 150px;
    width: 150px;
    border-radius: 50%;
}
</style>
