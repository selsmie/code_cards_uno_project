<template>
    <div class="pop-out-window">
        <div class="pop-out-frame pop-out-grid">
            <h1>How To Play</h1>
                <article id="how-to-play-instructions">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula odio, mattis dignissim 
                    imperdiet id, sagittis eget diam. Proin ipsum metus, maximus vel ante eu, auctor eleifend 
                    lacus. Donec non efficitur enim. Duis rutrum id nisl sed scelerisque. Pellentesque 
                    elementum tortor lacus, id eleifend leo dictum in. Aliquam nibh est, sagittis ut libero 
                    tincidunt, placerat elementum sapien. Quisque turpis turpis, egestas sed maximus quis, 
                    sagittis vestibulum elit.

                    Suspendisse a urna id erat mollis volutpat quis id diam. Quisque id nisl vehicula, viverra 
                    enim ut, iaculis magna. Quisque sed erat ex. Nullam malesuada dignissim pretium. Proin at augue 
                    placerat, varius sem et, commodo libero. Sed sollicitudin sit amet justo sed lobortis. Cras ipsum 
                    mauris, vulputate egestas ex in, tempor convallis dolor. Suspendisse sit amet tincidunt lacus. 
                    Integer convallis odio vitae massa luctus lobortis. Nullam eget nunc eu mi aliquam rutrum eget 
                    in nisl. Integer consequat arcu dictum leo porttitor ultrices. Maecenas molestie at ante interdum 
                    varius.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula odio, mattis dignissim 
                    imperdiet id, sagittis eget diam. Proin ipsum metus, maximus vel ante eu, auctor eleifend 
                    lacus. Donec non efficitur enim. Duis rutrum id nisl sed scelerisque. Pellentesque 
                    elementum tortor lacus, id eleifend leo dictum in. Aliquam nibh est, sagittis ut libero 
                    tincidunt, placerat elementum sapien. Quisque turpis turpis, egestas sed maximus quis, 
                    sagittis vestibulum elit.

                    Suspendisse a urna id erat mollis volutpat quis id diam. Quisque id nisl vehicula, viverra 
                    enim ut, iaculis magna. Quisque sed erat ex. Nullam malesuada dignissim pretium. Proin at augue 
                    placerat, varius sem et, commodo libero. Sed sollicitudin sit amet justo sed lobortis. Cras ipsum 
                    mauris, vulputate egestas ex in, tempor convallis dolor. Suspendisse sit amet tincidunt lacus. 
                    Integer convallis odio vitae massa luctus lobortis. Nullam eget nunc eu mi aliquam rutrum eget 
                    in nisl. Integer consequat arcu dictum leo porttitor ultrices. Maecenas molestie at ante interdum 
                    varius.
                    </p>
                </article>
            <button class="button button-position" v-on:click.prevent="closePopOut">Close</button>
        </div>
    </div>
</template>

<script>
import { howToPlayToggle } from '@/store.js'

export default {
    "name": "how-to-play",
    methods: {
        closePopOut() {
            howToPlayToggle.toggleHowToPlay()
        }
    },
}
</script>

<style scoped>
.pop-out-window {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgba(128, 255, 0, 0.616);
    z-index: 999;
}
.pop-out-frame {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(100vh - 2rem);
    width: calc(100vw - 2rem);
    background-color: rgba(220, 20, 60);
    border: 5px solid rgba(41, 41, 41, 0.733);
    border-radius: .5rem;
    box-shadow: 7px 7px rgba(0, 0, 0, 0.356);
}

.pop-out-grid {
    display: grid;
    grid-template-columns: 2rem auto 2rem;
    grid-template-rows: 4rem auto 4.5rem;
}

h1 {
    grid-column-start: 2;
    justify-self: center;
    color: white;
}

#how-to-play-instructions {
    grid-column-start: 2;
    grid-row-start: 2;
    overflow: scroll;
}

p {
    justify-self: center;
    color: white;
}

.button-position {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.button {
    display: inline-block;
    border: none;
    padding: .7rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #545454;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
}
</style>