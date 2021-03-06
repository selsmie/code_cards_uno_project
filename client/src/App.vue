<template>
    <main id="main">
        <header>
            <header-main v-on:click="backHome"></header-main>
        </header>
        
        <!-- <section>
            <button v-if="gameInProgress === null" v-on:click='setup'>Play</button>
            <player-form v-if="gameInProgress === false"></player-form>
            
            <game v-if="gameInProgress"></game>
        </section> -->
    </main>
</template>

<script>
// import PlayerForm from './components/PlayerForm.vue'
// import Game from './components/Game.vue'
import Header from './components/Header.vue'
import { eventBus } from './main'

export default {
    name: 'App',
    data() {
        return {
            gameInProgress: null
        }
    },
    components: {
        // "player-form": PlayerForm,
        // "game": Game,
        "header-main": Header,
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
}

#main {
    display: grid;
    grid-template-rows: 13vh 87vh;
    grid-template-columns: 100vw;
}


</style>