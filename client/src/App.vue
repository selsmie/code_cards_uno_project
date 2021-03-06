<template>
<div id=main-body>
    <header-component></header-component>
    <h1>Hello</h1>
</div>
</template>

<script>
import GameService from './services/GameService'
import HeaderComponent from './components/Header.vue'

export default {
    name: 'App',
    components: {
        "header-component": HeaderComponent,
    },
    data() {
        return {
            cards: []
        }
    },
    mounted() {
        GameService.getCards()
        .then(cards => this.cards = cards)
    }

}
</script>

<style>
body {
    margin: 0;
}

#main-body {
    display: grid;
    grid-template-rows: 20vh 80vh;
    grid-template-columns: 100vw;
    /* background-color: rgb(16, 18, 145); */
}
</style>