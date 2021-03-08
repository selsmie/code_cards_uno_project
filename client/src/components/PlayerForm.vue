<template>
<div>
    <form @submit="addPlayer" v-if="players.length < 10">
        <label for="name">Player name: </label>
        <input type="text" id="name" name="name" v-model="name" required autofocus>
        <input type="submit" value="Add" id="save"/>
    </form>
    <br>
    <section>
        <button v-if='players.length > 1' @click="newGame" type="button" class="new-game-btn">Start new game!</button>

        <section>
            <added-players :playerList="players"/>
        </section>
    </section>
</div>
</template>

<script>
import { eventBus } from '@/main'
import GameService from '@/services/GameService';
import AddedPlayers from '@/components/AddedPlayers';

export default {
    name: 'player-form',
    data() {
        return {
            cards: [],
            name: '',
            players: [],
            discardPile: [],
        }
    },
    mounted() {
        GameService.getCards()
        .then(cards => this.cards = cards)

        eventBus.$on('delete-player', (playerToDelete) => {
            const i = this.players.findIndex(player => player === playerToDelete)
            this.players.splice(i, 1)
        })

        eventBus.$on('play-again', (playerList) => {
            // const importedPlayers = [] 
            // console.log('import before', importedPlayers)
            // for (const player of playerList) {
            //         importedPlayers.push({name: player.name, hand: []})
            // }
            // console.log('import after', importedPlayers)
            // this.players.push(...importedPlayers)
            // console.log('players', this.players)
            console.log(playerList)
            playerList.forEach((player) => {
                player.hand = []
            })
            this.players.push(...playerList)
        })
    },

    methods: {
        addPlayer(evt) {
            evt.preventDefault()
            if (!this.players.find(player => player.name === this.name)) {
                this.players.push({
                    name: this.name,
                    hand: []
                })
                this.name = ''
            } else {
                alert("Be original! There can only be 'uno' player with that name.")
            }
        },

        shuffle() {
            for (let i = this.cards.length - 1; i > 0; i--) {
                let randomIndex = Math.floor(Math.random() * i)
                let temp = this.cards[i]
                this.$set(this.cards, i, this.cards[randomIndex])
                this.$set(this.cards, randomIndex, temp)
            }
        },

        deal() {
            for (const player of this.players) {
                const newHand = this.cards.splice(-7, 7)
                this.$set(player, 'hand', newHand)
            }
        },

        startDiscardPile() {
            const discardPile = this.cards.splice(-1, 1)
            this.discardPile = discardPile
        },

        newGame(evt) {
            evt.preventDefault()
            this.shuffle()
            this.startDiscardPile()
            this.deal()
            eventBus.$emit('new-game', this.cards, this.players, this.discardPile)
        }
    },
    components: {
        'added-players': AddedPlayers
    }
}
</script>

<style scoped>

</style>