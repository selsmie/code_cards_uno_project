<template>
    <li :class='card ? card.color: null' id='cards-held' v-on:click='select'>{{ card.number }}</li>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: "cards-held",
    props: ['card'],
    data() {
        return {
            selectedCard: null
        }
    },
    methods: {
        select: function() {
            this.selectedCard = card
            eventBus.$emit('selected-card', this.selectedCard)
        }
    },
}
</script>

<style>
#cards-held {
    list-style: none;
    height: 50px;
    padding: 5px 13px;
    margin: 2px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: white;
    border-radius: 8px;
}

.red {
    background-color: red;
}

.blue {
    background-color: blue;
}

.green {
    background-color: green;
}

.yellow {
    background-color: yellow;
    color: black;
}
</style>