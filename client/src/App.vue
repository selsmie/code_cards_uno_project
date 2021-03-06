<template>
    <main>
        <header v-on:click="backHome">
            <header-main></header-main>
        </header>
        
        <section>
            <button v-if="gameInProgress === null" v-on:click='setup'>Play</button>
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
        }
    },
    components: {
        "player-form": PlayerForm,
        "game": Game,
        "header-main": Header,
    },
    methods: {
        backHome: function() {
            this.gameInProgress = null
        },
        setup: function() {
            this.gameInProgress = false
        },
        
    },
    mounted() {
        eventBus.$on("play-time", () => this.gameInProgress = true) 
    },

}
</script>

<style>

</style>