<template>
    <div class="pop-out-window">
        <div class="pop-out-frame pop-out-grid">
            <h1>Leaderboard</h1>
            <leaderboard class="leaderboard"></leaderboard>
            <button class="button button-position" v-on:click.prevent="closePopOut">Close</button>
        </div>
    </div>
</template>

<script>
import Leaderboard from '@/components/leaderboard/Leaderboard.vue'
import { navToggle, leaderboardToggle} from '@/store.js'

export default {
    name: "pop-out-panel",
    components: {
      "leaderboard": Leaderboard  
    },
    methods: {
        closePopOut() {
            leaderboardToggle.toggleLeaderboard()
            navToggle.toggleNav()
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

.leaderboard {
    grid-column-start: 2;
    grid-row-start: 2;
    overflow: scroll;
}

.leaderboard::-webkit-scrollbar {
  display: none;
}

p {
    justify-self: center;
    color: white;
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