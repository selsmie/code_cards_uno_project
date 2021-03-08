<template>
<div>
    <main v-if='!winner'>
        <section v-if='currentPlayer'>
            <div class='player-card-counts'>
                <upcoming-player :current="currentPlayer" :players='players'></upcoming-player>
            </div>
            <div class='card-decks'>
                <card-deck :drawPile='drawPile' :discardPile="discardPile"></card-deck>
            </div>
            <div class='current-player-hand' >
                <p>{{ currentPlayer.name}}'s turn</p>
                <player-hand :hand="currentPlayer.hand" :topCard="discardPile[0]"></player-hand>
            </div>
        </section>
    </main>
    <section v-if='winner' class='winner'>
        <h1>{{ currentPlayer.name }} Wins!</h1>
        <button v-on:click='playAgain'>Play again?</button>
    </section>
</div>
    
    
</template>

<script>
import { eventBus } from '../main.js'

import PlayerHand from './PlayerHand.vue'
import CardDeck from './CardDeck.vue'
import UpcomingPlayerList from './UpcomingPlayerList.vue'

export default {
    name: 'game',
    props: ['players', 'drawPile', 'discardPile', 'currentPlayer', 'winner'],
    components: {
        "player-hand": PlayerHand,
        "card-deck": CardDeck,
        "upcoming-player": UpcomingPlayerList 
    },
    methods: {
        playAgain: function() {
            eventBus.$emit('play-again')
        }
    } 
}
</script>

<style>
.current-player-hand > p {
    color: white;
    text-align: center;
    font-size: 25px;
    margin: 5px;
}

.winner {
    display: grid;
    justify-content: center;
}

.winner > button {
    height: 50px;
    border-radius: 12px;
}

.player-card-counts {
    width: 200px;
    margin: 0px;
}
</style>