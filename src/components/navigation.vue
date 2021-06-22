<template>
    <div class = 'app__navigation'>
        <ul>
            <router-link v-for = 'n in 3' :key = 'n' :to = "`/lesson/${n}`">Day {{ n }}</router-link>
        </ul>
        <div class = 'app__info'>
            Made with ♥ from Barcelona by Erik Martín, view on GitHub
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation'
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
    position: fixed;
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