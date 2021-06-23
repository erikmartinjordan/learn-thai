<template>
    <div class = 'app__navigation'>
        <ul>
            <router-link v-for = 'n in total_lessons' :key = 'n' :to = "`/lesson/${n}`">Day {{ n }}</router-link>
        </ul>
        <div class = 'app__info'>
            Made with ♥ from Barcelona by Erik Martín, view on GitHub
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    data(){
        return {
            total_lessons: require.context('../lessons', false, /\.(vue)$/).keys().length
        }
    }
}
</script>

<style>
.app__navigation{
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem;
    position: sticky;
    width: 15%;
}
.app__navigation ul{
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
}
.app__navigation ul a{
    color: white;
    text-decoration: none;
    width: max-content;
}
.app__info{
    color: gray;
    font-size: .8rem;
    margin-top: auto;
}
</style>