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
        howToPlay.isHowToPlayOpen = !howToPlay.isHowToPlayOpen
    }
};