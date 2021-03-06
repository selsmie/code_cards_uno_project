<template>
    <div class="side-panel">
        <div class="side-panel-backdrop" v-on:click="closeSidePanel" v-if="isSidePanelOpen"></div>
        <transition name="slide">
            <div class="side-panel-menu" v-if="isSidePanelOpen">
                <ul class="menu-list">
                    <li><a class="menu-item" href="">How To Play</a></li>
                    <li><a class="menu-item" href="">Leaderboards</a></li>
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
    background-color: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
}

.side-panel-menu {
    overflow-y: auto;
    background-color: #130f40;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 300px;
}

.menu-list {

}

.menu-item {
    
}


</style>>
