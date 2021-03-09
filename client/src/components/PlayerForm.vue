<template>
<div class='form'>
    <form @submit="addPlayer" v-if="players.length < 10">
        <input type="text" id="name" name="name" v-model="name" required autofocus placeholder="Player Name">
        <input type="submit" value="+" id="save"/>
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
import { eventBus } from '@/main';
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

form {
    display: flex;
    align-items: center;
}

.form > section {
    display: grid;
}

.form > section > button {
    height: 30px;
    border-radius: 12px;
}

.form > form > input[type=text] {
    border-radius: 12px;
    height: 25px;
    padding-left: 10px;
    margin: 0px 5px;
}

.form > form > input[type=submit] {
    border-radius: 12px;
    height: 31px;
    width: 31px;
    font-weight: bold;
    font-size: 20px;
    margin: 0px;
    
}
</style>