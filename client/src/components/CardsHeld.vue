<template>
    <li :class='card ? card.color: null'>{{ card.number }}</li>
</template>

<script>
export default {
    name: "cards-held",
    props: ['card']
}
</script>

<style>
.red {
    color: red;
}

.blue {
    color: blue;
}

.green {
    color: green;
}

.yellow {
    color: yellow;
}
</style>