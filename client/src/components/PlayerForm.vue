<template>
<div>
    <form @submit="addPlayer">
        <label for="name">Player name: </label>
        <input type="text" id="name" name="name" v-model="name" required >
        <input type="submit" value="Add" id="save"/>
    </form>
    <br>
    <button @click="shuffle" type="button" class="new-game-btn">Start new game!</button>

    <!-- <section>
        <added-players :players="playerList"/>
    </section> -->

</div>
</template>

<script>
import GameService from '@/services/GameService';
// import AddedPlayers from '@/components/AddedPlayers';

export default {
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

        newGame(evt) {
            evt.preventDefault()
            // this.shuffle()
            // console.log(this.cards);



            // eventBus.$emit('new-game', this.cards, this.players)
        }
    },
    // components: {
    //     'added-players': AddedPlayers
    // }
}
</script>

<style>

</style>