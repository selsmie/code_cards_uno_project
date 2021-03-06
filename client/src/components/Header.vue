<template>
    <div>
        <div id="header">
            <button id="menu-button" type="button" v-on:click.prevent="showMenu">Click Me</button>
            <p id="logo">Uno Logo</p>
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
/* color for testing only, remove be merging to develop */
* {
  background-color: aqua;
}

#header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 13vh;
}

#menu-button {
    height: 30px;
    width: 100px;
    align-self: center;
    margin-left: 30px;
    cursor: pointer;
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