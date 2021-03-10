<template>
    <div class="pop-out-window">
        <div class="pop-out-frame pop-out-grid">
            <h1>How To Play</h1>
                <article id="how-to-play-instructions">
                    <p>To win the player must play all their cards and end with no cards on hand.</p>
                    <p>The deck consists of 108 card, with numbers, colours and specials cards.</p>
                    <p>Players are dealt 7 cards and upon their turn must play a card of matching colour or number to end their turn.</p>
                    <p>Black special cards can be played on top of any other card.</p>
                    <p>Should a player be unable to play a card, they must draw from the deck and their turn ends.</p>
                    <p>Upon playing their second to last card, the player is declared ‘Uno’ to highlight their imminent victory.</p>
                    <p>Special cards: -</p>
                    <p>+2 - next player must draw 2 cards before taking their turn.</p>
                    <p>+4 - next player must draw 4 cards before taking their turn.</p>
                    <p><font-awesome-icon icon="ban" size="1x" /> - next player skips their turn.</p>
                    <p><font-awesome-icon icon="palette" size="1x" /> - once placed, the current player can play a card of any colour.</p>
                    <p><font-awesome-icon icon="retweet" size="1x" /> - the order of players is reversed.</p>
                </article>
            <button class="button button-position" v-on:click.prevent="closePopOut">Close</button>
        </div>
    </div>
</template>

<script>
import { navToggle, howToPlayToggle } from '@/store.js'

export default {
    "name": "how-to-play",
    methods: {
        closePopOut() {
            howToPlayToggle.toggleHowToPlay()
        }
    },
}
</script>

<style scoped>
.pop-out-window {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgba(43, 43, 43, 0.432);
    z-index: 999;
}
.pop-out-frame {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(100vh - 2rem);
    width: calc(100vw - 2rem);
    background-color: rgba(16 113 62);
    border: 5px solid rgba(41, 41, 41, 0.733);
    border-radius: .5rem;
    box-shadow: 7px 7px rgba(0, 0, 0, 0.356);
}

.pop-out-grid {
    display: grid;
    grid-template-columns: 2rem auto 2rem;
    grid-template-rows: 4rem auto 4.5rem;
}

h1 {
    grid-column-start: 2;
    justify-self: center;
    color: white;
}

#how-to-play-instructions {
    grid-column-start: 2;
    grid-row-start: 2;
    overflow: scroll;
}

#how-to-play-instructions::-webkit-scrollbar {
  display: none;
}

p {
    justify-self: center;
    color: white;
    text-align: center;
}

.button-position {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.button {
    display: inline-block;
    border: none;
    padding: .7rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #545454;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
}
</style>