<template>
    <li :class='card ? card.color: null' id='cards-held' v-on:click='selectedCard'>{{ cardGraphic }}</li>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: "cards-held",

    props: ['card', 'topCard'],
    methods: {
        selectedCard: function() {
            if (this.card.color === this.topCard.color || this.card.color === "black" || this.card.number === this.topCard.number) {
            eventBus.$emit('selected-card', this.card)
            } else if (this.topCard.color === "black") {
                eventBus.$emit('selected-card', this.card)
            }
        }
    },
    //  <font-awesome-icon icon="ban" size="2x"/>
    //         <font-awesome-icon icon="retweet" size="2x"/>
    //         <font-awesome-icon icon="palette" size="2x"/>
    computed: {
        cardGraphic: function () {
           if (this.card.number === "🚫") {
                return "50"
            } else if (this.card.number === "↩️") {
                return "60"
            } else if (this.card.number === "🎨") {
                return "70"
            } else {
                return this.card.number
            }
        }
    }
}
</script>

<style>
#cards-held {
    list-style: none;
    height: 4rem;
    width: 1rem;
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

.black {
    background-color: black;
    color: white;
}
</style>