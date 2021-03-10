<template>
    <header>
        <div id="header">
            <button class="menu-button" type="button" v-on:click.prevent="showMenu">
				<font-awesome-icon icon="bars" size="2x"/>
			</button>
            <p id="logo">Uno Stack-App-O</p>
        </div>

        <div>
            <side-panel :status='status'></side-panel>
        </div>
    </header>
</template>

<script>
import SidePanel from "@/components/SidePanel.vue"
import { navOpen, navToggle } from "@/store.js"

export default {
  name: "header-component",
  props: ['status'],
  components: {
    "side-panel": SidePanel,
  },
  methods: {
        showMenu() {
            navToggle.toggleNav()
    },
  },
  computed: {
    	isBurgerActive() {
            return navOpen.isNavOpen
      }
  },
}
</script>

<style scoped>
#header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 13vh;
}

.menu-button {
	background: transparent;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	height: 40px;
	width: 50px;
	align-self: center;
	margin-left: 1rem;
}

.fa-2x {
    font-size: 2.7rem;
}

#logo {
  color: white;
  margin: 0;
  justify-self: center;
  align-self: center;
  font-size: 25px;
  font-style: italic;
  border-radius: 12px;
  border: 3px solid white;
  padding: 5px;
}

#player-playing {
  justify-self: right;
  align-self: center;
  margin-right: 30px;
}
</style>