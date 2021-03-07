<template>
    <div class="side-panel">
        <div class="side-panel-backdrop" v-on:click="closeSidePanel" v-if="isSidePanelOpen"></div>
        <transition name="slide">
            <div class="side-panel-menu" v-if="isSidePanelOpen">
                <a class="close-button" v-on:click="closeSidePanel">X</a>
                <ul class="menu-list">
                    <li class="menu-item"><a class="menu-item-link" href="">HOW TO PLAY</a></li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import { store, mutations } from "@/store.js"

export default {
    name: "side-panel",
    methods: {
        closeSidePanel: mutations.toggleNav
    },
    computed: {
        isSidePanelOpen() {
            return store.isNavOpen
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
    background-color: #2E1114;
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
}

.menu-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu-item {
    padding: 0 0 20px 0;
}

.menu-item-link {
    color: rgb(255, 255, 255);
    text-decoration: none;
}


</style>>
