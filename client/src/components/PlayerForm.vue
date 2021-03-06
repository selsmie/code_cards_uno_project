<template>
<div>
    <form v-on:submit="addPlayer">
        <label for="player_name">Player name: </label>
        <input type="text" id="player-name" name="player-name" v-model="newPlayerName" required >
        <input type="submit" value="Add" id="save"/>
    </form>
    <br>
    <button type="button" class="new-game-btn" v-on:click="newGame">Start new game!</button>

</div>
</template>

<script>
import GameService from '@/services/GameService';

export default {
    data() {
        return {
            cards: [],
            newPlayerName: '',
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
            this.players.push(this.newPlayerName)
            eventBus.$emit('add-player', this.newPlayerName)
            this.newPlayerName = ''
        }
    }
}
</script>

<style>

</style>