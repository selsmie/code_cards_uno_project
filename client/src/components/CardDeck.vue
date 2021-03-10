<template>
  <div class='card-decks'>
      <img src="@/assets/cards/card-back.png" id='card-img' v-on:click='handleDrawCard' v-if="drawPile.length">

      <p v-if='drawPile < 1' id='empty-card' v-on:click='handleEmptyPile'> + </p>

      <h2 v-if='showTopCard' :class='showTopCard ? showTopCard.color: null' id='top-card'>{{showTopCard.number}}</h2>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'CardDeck',
    props: ['drawPile', 'discardPile'],
    methods: {
        handleDrawCard() {
            if (this.drawPile.length > 0) {
                eventBus.$emit("draw-card", this.drawPile.shift())
            }
        }, 
        handleEmptyPile() {
            eventBus.$emit("draw-pile-empty")
        },    
    },
    computed: {
        showTopCard: function() {
            return this.discardPile[0]
        }
    }
}

</script>


<style>
.card-decks {
    display: flex;
    justify-content: center;
}

#card-img {
    height: 120px;
    cursor: pointer;
}

#top-card {
    height: 116px;
    width: 70px;
    border: 2px solid black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    margin: 0px;
    margin-left: 15px;
    color: white;
}

#top-card.red {
    background-color: red;
}

#top-card.blue {
    background-color: blue;
}

#top-card.green {
    background-color: green;
}

#top-card.yellow {
    background-color: yellow;
    color: black;
}

#empty-card {
    height: 116px;
    width: 70px;
    border: 2px dotted black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    margin: 0px 15px;
    color: white;
    cursor: pointer;
}
</style>