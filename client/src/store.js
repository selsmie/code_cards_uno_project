import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: false
});

export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    }
};



export const howToPlay = Vue.observable({
    isHowToPlayOpen: false
});

export const howToPlayToggle = {
    toggleHowToPlay() {
        howToPlay.isHowToPlayOpen = !howToPlay.isHowToPlayOpen
    }
};