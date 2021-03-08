<template>
<div class='form'>
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
            name: '',
        }
    },
    props: ['players'],
    components: {
        'added-players': AddedPlayers
    },

    methods: {
        addPlayer(evt) {
            evt.preventDefault()
            eventBus.$emit('new-player', this.name)
            this.name = ''
        },

        newGame() {
            eventBus.$emit('new-game')
        }
    },

}
</script>

<style scoped>
.form {
    display: grid;
    justify-content: center;
    justify-items: center;
}

.form > section {
    display: grid;
}

.form > section > button {
    height: 30px;
    border-radius: 12px;
}
</style>