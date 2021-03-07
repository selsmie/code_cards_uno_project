<template>
    <main id="main">
        <header>
            <header-main v-on:click="backHome"></header-main>
        </header>
        <player-form/>   
<how-to-play></how-to-play>      
        <section>
            <button class="play-button" v-if="gameInProgress === null" v-on:click='setup'>Play</button>
            <player-form v-if="gameInProgress === false"></player-form>

            <game v-if="gameInProgress"></game>
        </section>
    </main>
</template>

<script>
import PlayerForm from './components/PlayerForm.vue'
import Game from './components/Game.vue'
import Header from './components/Header.vue'
import HowToPlay from './components/HowToPlay.vue'
import { eventBus } from './main'


export default {
    name: 'App',
    data() {
        return {
            gameInProgress: null
        }
    },
    components: {
        "player-form": PlayerForm,
        "game": Game,
        "header-main": Header,
        "how-to-play": HowToPlay
    },
    methods: {
        backHome: function() {
            this.gameInProgress = null
        },
        setup: function() {
            this.gameInProgress = false
        }
    },
    mounted() {
        eventBus.$on('start-game', () => this.gameInProgress = true)
    }
}
</script>

<style>
body {
    margin: 0;
    background-color: #f3baba;
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
}
</style>