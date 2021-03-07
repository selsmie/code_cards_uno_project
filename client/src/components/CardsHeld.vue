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
            selectedCard: null,
            topCard: null,
        }
    },
    methods: {
        select: function() {
            if (this.card.color === this.topCard.color || this.card.number == this.topCard.number) {
                this.selectedCard = this.card
                eventBus.$emit('selected-card', this.selectedCard)
                this.selectedCard = null
            }
        }
    },
    mounted() {
        eventBus.$on('top-card', (card) => {
            this.topCard = card
        })
    },
    computed: {
        // checkTopCard: function() {
        //     eventBus.$on('top-card', (card) => {
        //         this.topCard = card
        //     })
        // }
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
    cursor: pointer;
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

#cards-held.yellow {
    background-color: yellow;
    color: black;
}
</style>