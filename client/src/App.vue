<template>
    <main id="main">
            <header-main v-on:click="backHome"></header-main>
        <section>
            <button class="play-button" v-if="gameInProgress === null" v-on:click='setup'>Play</button>
            <player-form v-if="gameInProgress === false"></player-form>
            <game></game>
        </section>
    </main>
</template>

<script>
import PlayerForm from './components/PlayerForm.vue'
import Game from './components/Game.vue'
import Header from './components/Header.vue'
import { eventBus } from './main'

export default {
    name: 'App',
    data() {
        return {
            gameInProgress: null,
            players: [],
            drawPile: [],
            discardPile: [],
        }
    },
    components: {
        "player-form": PlayerForm,
        "game": Game,
        "header-main": Header,
    },
    mounted() {
        eventBus.$on('new-game', () => {
            this.gameInProgress = true
        })

        eventBus.$on('play-again', () => {
            this.gameInProgress = false
        })

// start refactor of playerForm
        GameService.getCards()
            .then(originalDeck => this.cards = originalDeck)

        eventBus.$on('new-player', (name) => {
            if (!this.players.find(player => player.name === name)) {
                this.players.push({
                    name: name,
                    hand: []
                })
            } else {
                alert("Be original! There can only be 'uno' player with that name.")
            }
            })

        eventBus.$on('delete-player', (playerToDelete) => {
            const i = this.players.findIndex(player => playerToDelete === player)
            this.players.splice(i, 1)
        })

        eventBus.$on('new-game', () => {
            this.shuffle()
            this.startDiscardPile()
            this.deal()
            this.gameInProgress = true
        })
// end refactor of playerForm


    },
    methods: {
        backHome: function() {
            this.gameInProgress = null
        },
        setup: function() {
            this.gameInProgress = false
        },

// start refactor of playerForm
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
                const newHand = this.drawPile.splice(-7, 1)
                this.$set(player, 'hand', newHand)
            }
        },

        startDiscardPile() {
            this.discardPile = this.drawPile.splice(-1, 1)
        },
// end refactor of playerForm


    }
    }


</script>

<style>
body {
    margin: 0;
    background-color: #036931;
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