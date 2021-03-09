<template>
    <div>
        <h3>This Is The Leaderboard</h3>
        <!-- <button v-on:click.prevent="getLeaderboard">Click for Leaderboard</button> -->
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

</style>