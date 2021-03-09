<template>
    <h3>This Is The Leaderboard</h3>
</template>

<script>
import GameService from '@/services/GameService'

export default {
    name: "leaderboard",
    props: ['leaderboard'],
    data() {
        return {
            leaderboard: [],
        }
    },
    methods: {

    },
    computed: {
        getLeaderboard: function() {
        GameService.getLeaderboard()
            .then(leaderboard => this.leaderboard = leaderboard)
        }
    },
    mounted: {

    },
}
</script>

<style scoped>

</style>