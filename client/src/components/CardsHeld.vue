<template>
    <li :class='card ? card.color: null'>{{ card.number }}</li>
</template>

<script>
export default {
    name: "cards-held",
    props: ['card']
}
</script>

<style scoped>
li{
    list-style: none;
    height: 50px;
    padding: 5px 13px;
    margin: 2px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: white;
    border-radius: 8px;
}

.red {
    background-color: red;
}

.blue {
    background-color: blue;
}

.green {
    background-color: green;
}

.yellow {
    background-color: yellow;
    color: black;
}
</style>