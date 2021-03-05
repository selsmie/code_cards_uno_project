<template>
<div>
    <h1>Hello</h1>
</div>
</template>

<script>
import GameService from './services/GameService'

export default {
    name: 'App',
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

</style>