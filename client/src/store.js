import Vue from "vue";

export const navOpen = Vue.observable({
    isNavOpen: false
});

export const navToggle = {
    toggleNav() {
        navOpen.isNavOpen = !navOpen.isNavOpen
    }
};



export const howToPlay = Vue.observable({
    isHowToPlayOpen: false
});

export const howToPlayToggle = {
    toggleHowToPlay() {
        console.log("HowToPlay before", howToPlay.isHowToPlayOpen)
        howToPlay.isHowToPlayOpen = !howToPlay.isHowToPlayOpen
        console.log("HowToPlay after", howToPlay.isHowToPlayOpen)
    }
};



export const leaderboardMenu = Vue.observable({
    isLeaderboardMenuOpen: false
});

export const leaderboardToggle = {
    toggleLeaderboard() {
        console.log("leaderboard before", leaderboardMenu.isLeaderboardMenuOpen)
        leaderboardMenu.isLeaderboardMenuOpen = !leaderboardMenu.isLeaderboardMenuOpen
        console.log("leaderboard after", leaderboardMenu.isLeaderboardMenuOpen)
    }
};