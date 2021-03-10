<template>
    <li :class="['cards-held', card ? card.color: null, selectableCard() ? 'playable' : 'not-playable']"  v-on:click='selectedCard'>
        <font-awesome-icon icon="ban" size="1x" v-if="card.number === '🚫'" />
        <font-awesome-icon icon="retweet" size="1x" v-if="card.number === '↩️'" />
        <font-awesome-icon icon="palette" size="1x" v-if="card.number === '🎨'" />
        <span v-if="cardGraphic">{{ card.number }}</span>
    </li>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: "cards-held",

    props: ['card', 'topCard'],
    methods: {
        selectedCard: function() {
            if (this.card.color === this.topCard.color || this.card.color === "black-wild" || this.card.number === this.topCard.number) {
            eventBus.$emit('selected-card', this.card)
            } else if (this.topCard.color === "black-wild") {
                eventBus.$emit('selected-card', this.card)
            }
        },

        selectableCard: function() {
            if (this.topCard.color === "black-wild" || this.card.color === this.topCard.color || this.card.number === this.topCard.number) {
                return true
            }
        }    
    },
    computed: {
        cardGraphic: function () {
           if (this.card.number === "🚫") {
                return false
            } else if (this.card.number === "↩️") {
                return false
            } else if (this.card.number === "🎨") {
                return false
            } else {
                return true
            }
        },
    }
}
</script>

<style>
.cards-held {
    list-style: none;
    height: 60px;
    width: 13px;
    padding: 5px 13px;
    margin: 10px 5px;
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

.cards-held.yellow {
    background-color: yellow;
    color: black;
}

.black-wild {
    background-color: black;
    color: white;
}

.playable {
    box-shadow: 0 0 3px 3px white;
    cursor: pointer;
}

.not-playable {
    cursor:not-allowed;
}
</style>