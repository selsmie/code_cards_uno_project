<template>
  <div id="header">
    <button id="menu-button" v-on:click="showMenu">Click Me</button>
    <p id="logo">Uno Logo</p>
    <p id="player-playing">Current Player: Player 3</p>
  </div>
</template>

<script>
export default {
  name: "header-component",
  props: [],
  methods: {
    showMenu() {
      console.log("menu-button works!")
    },
  }

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