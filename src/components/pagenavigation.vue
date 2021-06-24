<template>
    <div class = 'app__pagenavigation'>
            <router-link :to = "`/lessons/${prev()}`" v-if = "prev() > 0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"></path></svg> 
                Previous lesson
            </router-link>
            <router-link :to = "`/lessons/${next()}`" v-if = "next() <= total_lessons">
                Next lesson 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"></path></svg>
            </router-link>
    </div>
</template>

<script>
let currentLesson = parseInt(window.location.href.split('/').pop())

export default {
    name: 'pagenavigation',
    methods: {
        next(){

            return currentLesson + 1

        },
        prev(){

            return currentLesson - 1

        }

    },
    data(){
        return {
            total_lessons: require.context('../lessons', false, /\.(vue)$/).keys().length
        }
    }
}
</script>

<style scoped>
.app__pagenavigation{
    display: flex;
    justify-content: space-between;
    margin-top: auto;
}
.app__pagenavigation a{
    align-items: center;
    border: .2rem solid black;
    color: black;
    border-radius: .75rem;
    display: flex;
    font-weight: bold;
    margin-top: 5rem;   
    padding: 1rem;
    text-decoration: none;
}
.app__pagenavigation a svg{
    margin: 0.3rem;
}
@media (hover: hover){
    
    .app__pagenavigation a:hover{
        background: yellow;   
    }
    
}
</style>