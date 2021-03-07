<template>
<div>
    <form @submit="addPlayer" v-if="players.length < 10">
        <label for="name">Player name: </label>
        <input type="text" id="name" name="name" v-model="name" required >
        <input type="submit" value="Add" id="save"/>
    </form>
    <br>
    <button @click="newGame" type="button" class="new-game-btn">Start new game!</button>

    <section>
        <added-players :playerList="players"/>
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
        }
    },
    mounted() {
        GameService.getCards()
        .then(cards => this.cards = cards)

        eventBus.$on('delete-player', (playerToDelete) => {
            const i = this.players.findIndex(player => player === playerToDelete)
            this.players.splice(i, 1)
        })
    },

    methods: {
        addPlayer(evt) {
            evt.preventDefault()
            this.players.push({
                name: this.name,
                hand: []
            })
            this.name = ''
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

        newGame(evt) {
            evt.preventDefault()
            this.shuffle()
            this.deal()
            eventBus.$emit('new-game', this.cards, this.players)
        }
    },
    components: {
        'added-players': AddedPlayers
    }
}
</script>

<style>

</style>