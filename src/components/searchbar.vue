<template>
    <div class = 'app__searchbar' v-if = "displaySearchbar">
        <input v-model = "query" placeholder = 'search...' v-on:input = 'search' ref = 'input'/>
        <div class = 'app__results' v-if = "results">
            <div class = 'app__result' v-for = "(result, key) in results" :key = key @click = "select(result)">{{ result }}</div>
        </div>
    </div>
</template>

<script>
import questions    from '../lessons/questions'
import { nextTick } from 'vue'

export default {
    name: 'searchbar',
    emits: ['query'],
    methods: {
        search(){

            this.results = Object.keys(questions).filter(key => key.toLowerCase().includes(this.query.toLowerCase()))

        },
        select(result){

            this.$emit('query', result)

        }
    },
    data(){
        return{
            displaySearchbar: false,
            query: null,
            results: null
        }
    },
    mounted(){

        window.addEventListener('keypress', async e => {

            if(e.key === 'f') {

                e.preventDefault()
                this.displaySearchbar = true
                await nextTick()
                this.$refs.input.focus()
                
            }

        })

        window.addEventListener('click', e => {

            if(!e.target.matches('input')){

                this.displaySearchbar = false
                this.query = null
                this.results = null

            }


        })
    }
}
</script>

<style scoped>
.app__searchbar{
    background: white;
    border: 0.1rem solid rgba(1, 1, 1, 0.2);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    left: 50%;
    margin: auto;
    position: fixed;
    top: 2rem;
    transform: translateX(-50%);
    width: 20rem;
}
.app__results{
    cursor: pointer;
    max-height: 20rem;
    width: 20rem;
    overflow-y: auto;
    padding: 0.5rem 0.2rem;
}
input{
    border: none;
    height: 100%;
    padding: 0.5rem 0.2rem;
}
</style>