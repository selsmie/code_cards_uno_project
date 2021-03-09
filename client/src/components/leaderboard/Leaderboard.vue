<template>
    <div class="leaderboard">
        <h3>Position  |  Name  |  Wins</h3>
        <ul class="players_list" >
            <li v-for="(player, index) in leaderboard" :key="index">{{index +1}} - {{player.name}} - {{player.winCount}}</li>
        </ul>
        <!-- <button v-on:click.prevent="sortLeaderboard">Click for Leaderboard</button> -->
    </div>
</template>

<script>
import GameService from '@/services/GameService'

export default {
    name: "leaderboard",
    data() {
        return {
            leaderboard: [],
        }
    },
    methods: {
        getLeaderboard() {
            GameService.getLeaderboard()
            .then(leaderboard => this.leaderboard = leaderboard)
            .then(this.sortLeaderboard)
        },
        sortLeaderboard() {
            this.leaderboard.sort(function (a, b) {
                return a.winCount - b.winCount;
            })
            .reverse()
        }
    },
    // computed: {
        
    // },
    mounted() {
        this.getLeaderboard()
    },
}
</script>

<style scoped>
.leaderboard {
    display: grid;
    grid-template-columns: 2rem auto 2rem;
    grid-template-rows: 1.5rem auto;
}

h3 {
    grid-column-start: 2;
    justify-self: center;
    color: white;
    padding: 0;
    margin: 0;
}

.players_list {
    grid-column-start: 2;
    grid-row-start: 2;
    justify-self: center;
    color: white;
    list-style-type: none;
    padding: 0;
    margin: 0;
}
</style>