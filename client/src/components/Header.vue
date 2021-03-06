<template>
    <div>
        <div id="header">
            <button id="menu-button" v-on:click.prevent="showMenu">Click Me</button>
            <p id="logo">Uno Logo</p>
            <p id="player-playing">Current Player: Player 3</p>
        </div>

        <div>
            <side-panel></side-panel>
        </div>
    </div>
</template>

<script>
import SidePanel from "@/components/SidePanel.vue"
import { store, mutations } from "@/store.js"

export default {
  name: "header-component",
  components: {
    "side-panel": SidePanel,
  },
  computed: {
      isBurgerActive() {
            return store.isNavOpen
      }
  },
  methods: {
        showMenu() {
            mutations.toggleNav()
    },
  },
}
</script>

<style scoped>
* {
  background-color: aqua;
}

#header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
}

#menu-button {
    height: 30px;
    width: 100px;
    align-self: center;
    margin-left: 30px;
}

#logo {
  color: blueviolet;
  margin: 0;
  justify-self: center;
  align-self: center;
}

#player-playing {
  justify-self: right;
  align-self: center;
  margin-right: 30px;
}
</style>