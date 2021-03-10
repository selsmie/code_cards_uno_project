<template>
    <div class="credits">
        <h4 id="project-git">Project Github</h4><p></p><a  class="fa" href="https://github.com/rabisse/code_cards_uno_project" target="_blank"><font-awesome-icon class="fa-project-git" :icon="['fab', 'github-square']"/></a>
        <h5 id="created">Created By:</h5><p></p><p></p>
        <p id="alex">Alex Rabisse</p>
            <a  class="fa" href="" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
            <a  class="fa" href="https://github.com/rabisse" target="_blank"><font-awesome-icon :icon="['fab', 'github-square']"/></a>
        <p id="jenny">Jenny Bulford</p>
            <a  class="fa" href="" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
            <a  class="fa" href="https://github.com/Jennycbx" target="_blank"><font-awesome-icon class="fa" :icon="['fab', 'github-square']"/></a>
        <p id="mark">Mark Burns</p>
            <a  class="fa" href="https://www.linkedin.com/in/mark-burns-6348241b9/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
            <a  class="fa" href="https://github.com/MarkTheSharky" target="_blank"><font-awesome-icon class="fa" :icon="['fab', 'github-square']"/></a>
        <p id="simon">Simon Elsmie</p>
            <a  class="fa" href="" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
            <a  class="fa" href="https://github.com/selsmie" target="_blank"><font-awesome-icon class="fa" :icon="['fab', 'github-square']"/></a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.credits {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 50px 22px;
    position: absolute;
    bottom: 100px;
    width: 198px;
    z-index: 998;
}

#project-git {
    grid-row-start: 1;
    align-self: center;
    margin: 0 0 5px 0;
}

#created {
    grid-row-start: 2;
    align-self: center;
    margin: 0 0 5px 0;
}

p {
    margin: 0;
    align-self: center;
}

a {
    text-decoration: none;
    color: white;
}

#alex {
    grid-row-start: 3;
}

#jenny {
    grid-row-start: 4;
}

#mark {
    grid-row-start: 5;
}

#simon {
    grid-row-start: 6;
}

.fa {
    align-self: center;
    justify-self: right;
}

.fa-project-git {
    margin: 0 0 1px 0;
}

.git {
    grid-column-start: 2;
}

.linkedin {
    grid-column-start: 3;
}

</style>