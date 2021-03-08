<template>
    <li :class='card ? card.color: null' id='cards-held' v-on:click='selectedCard'>{{ card.number }}</li>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: "cards-held",
    props: ['card', 'topCard'],
    methods: {
        selectedCard: function() {
            if (this.card.color === this.topCard.color || this.card.number === this.topCard.number) {
            eventBus.$emit('selected-card', this.card)
            }
        }
    }
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