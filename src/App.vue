<template>
    <div class = 'app__main'>
        <navigation/>
        <div class = 'app__lesson'>
            <lesson :ka_krub = 'ka_krub' :chan_pom = 'chan_pom' :select = 'select'/>
            <pagenavigation/>
        </div>
    </div>
</template>

<script>
import navigation               from './components/navigation.vue'
import pagenavigation           from './components/pagenavigation.vue'
import { defineAsyncComponent } from 'vue'

var lesson = window.location.href.split('/').pop()

export default {
    name: 'App',
    components: {
        navigation,
        pagenavigation,
        lesson: defineAsyncComponent(() => import(`./lessons/${lesson}.vue`))
    },
    watch: {
        $route(to, from) {
            if(to.path !== from.path && from.path !== '/') 
                location.reload()
        }
    },
    data(){
        return {
            ka_krub: '',
            chan_pom: ''
        }
    },
    methods: {
        select(gender){
            
            localStorage.setItem('gender', gender)
            this.ka_krub  = localStorage.gender === 'm' ? 'krub' : 'ka'
            this.chan_pom = localStorage.gender === 'm' ? 'pom'  : 'chan'

        }
    },
    mounted(){
        
        if(localStorage.gender){
            this.ka_krub  = localStorage.gender === 'm' ? 'krub' : 'ka'
            this.chan_pom = localStorage.gender === 'm' ? 'pom'  : 'chan'
        }

    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
*{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;     
}
body{
    font-family: Inter, sans-serif;
    font-feature-settings: "liga" 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.7;
}
.app__main{
    display: flex;
    width: 100%;
}
.app__lesson{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 2rem;
    max-width: 50rem;
    width: 90%;
}
.app__lesson button{
    background: none;
    border: .2rem solid black;    
    border-radius: .75rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    padding: 1rem;
}
.app__lesson form button{
    margin-left: 1rem;
}
.app__lesson input{
    border: .2rem solid black;    
    border-radius: .75rem;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    padding: 1rem;
}
.app__thai__answer{
    background: rgba(13, 13, 13, .03);
    border-radius: .75rem;
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
}
.app__thai__question p:first-of-type,
.app__thai__answer   p:first-of-type{
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
}
.app__thai__question p:first-letter,
.app__thai__answer   p:first-letter{
    text-transform: uppercase;
}
.app__thai__question p:nth-of-type(2):before,
.app__thai__answer   p:nth-of-type(2):before{
    content: "(";
}
.app__thai__question p:nth-of-type(2):after,
.app__thai__answer   p:nth-of-type(2):after{
    content: ")";
}
.app__thai__question p:nth-of-type(2){
    margin-top: -40px;
}
.app__answer__right,
.app__answer__wrong{
    border-radius: 0.5rem;
    padding: 1rem;
}
.app__answer__right{
    background: #b9f18d;
}
.app__answer__wrong{
    background: pink;
}
.app__tip:before{
    background: white;
    content: '👇 TIP';
    margin-top: -3rem;
    padding: 0.2rem;
    position: absolute;
}
.app__tip{
    border: 0.25rem solid #9cd5ff;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    padding: 2rem;
}

</style>