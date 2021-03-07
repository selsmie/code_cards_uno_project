<template>
    <div class="pop-out-window">
        <div class="pop-out-frame">
            <h3>How To Play</h3>
            <button class="button button-position">Close</button>
        </div>
    </div>
</template>

<script>
export default {

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