<template>
    <div class='testing'>
        <p>{{ player.name }}</p>
        <button v-on:click="handleDelete" id='test'>X</button>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    name: 'player',
    props: ['player'],
    methods: {
        handleDelete() {
            eventBus.$emit('delete-player', this.player)
        }
    } 
}
</script>




<style scoped>
.testing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    width: 180px;
}

.testing > p {
    margin: 0px;
}

#test {
    border-radius: 50%;
    height: 25px;
    width: 25px;
    color: black;
    font-weight: bold;
    background-color: red;
    margin-left: 10px;
}
</style>