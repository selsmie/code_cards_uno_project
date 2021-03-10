<template>
    <div class="side-panel">
        <div class="side-panel-backdrop" v-on:click="closeSidePanel" v-if="isSidePanelOpen"></div>
        <transition name="slide">
            <div class="side-panel-menu" v-if="isSidePanelOpen">
                <a class="close-button" v-on:click="closeSidePanel">X</a>
                <ul class="menu-list">
                    <li class="menu-item"><button v-on:click.prevent="openHowToPlay">HOW TO PLAY</button></li>
                    <li class="menu-item"><button v-on:click.prevent="openLeaderboard">LEADERBOARD</button></li>
                </ul>
            </div>
        </transition>
        <how-to-play v-if="isHowToPlayOpen"></how-to-play>
        <leaderboard v-if="isLeaderboardMenuOpen"></leaderboard>
    </div>
</template>

<script>
import HowToPlay from './HowToPlay.vue'
import Leaderboard from './leaderboard/PopOutPanel.vue'
import { navOpen, navToggle } from "@/store.js"
import { howToPlay, howToPlayToggle, } from "@/store.js"
import { leaderboardMenu, leaderboardToggle, } from "@/store.js"


export default {
    name: "side-panel",
    components: {
        "how-to-play": HowToPlay,
        "leaderboard": Leaderboard,
    },
    methods: {
        closeSidePanel: navToggle.toggleNav,
        openHowToPlay() {
            howToPlayToggle.toggleHowToPlay()
        },
        openLeaderboard() {
            leaderboardToggle.toggleLeaderboard()
        },
    },
    computed: {
        isSidePanelOpen() {
            return navOpen.isNavOpen
        },
        isHowToPlayOpen() {
            return howToPlay.isHowToPlayOpen
        },
        isLeaderboardMenuOpen() {
            return leaderboardMenu.isLeaderboardMenuOpen
        }
    }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
}

.side-panel-backdrop {
    background-color: rgba(51, 51, 51, 0.3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
}

.side-panel-menu {
    overflow-y: auto;
    background-color: rgb(17 46 25);
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 300px;
}

.close-button {
    position: absolute;
    top: 1.2em;
    right: 1.2em;
    display: inline-block;
    text-decoration: none;
    font-family: 'Roboto',sans-serif;
    font-weight: 300;
    color: #FFFFFF;
    cursor: pointer;
}

.menu-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu-item {
    padding: 0 0 20px 0;
}

button {
    background: transparent;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
</style>>
