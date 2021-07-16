<template>
    <button @click = 'playSound'>
        <svg v-if = "!loading" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>        
        <spinner v-if = "loading"/>
    </button>
</template>

<script>
import spinner   from './spinner.vue'
import normalize from '../functions/normalize'

export default {
    props: ['text', 'chan_pom', 'ka_krub'],
    components: { spinner },
    methods: {
        async playSound(){

            this.loading = true

            await new Promise(r => setTimeout(r, 1000));

            var adapted_text = normalize(this.text, this.chan_pom, this.ka_krub)

            var msg = new SpeechSynthesisUtterance(adapted_text)

            msg.lang  = 'th-TH'
            msg.rate  = 0.8

            window.speechSynthesis.speak(msg)

            this.loading= false

        }
    },
    data(){
        return {loading: false}
    },
    mounted() {

        window.addEventListener('keypress', e => {

            if(e.target.matches('input')) return;

            if(e.key === 'Enter') 
                this.playSound()


        })

    }
}
</script>

<style scoped>
button{
    align-items: center;
    background: rgba(13, 13, 13, .04);
    border-radius: 50%;
    border: none;
    bottom: 2rem;
    display: flex;
    height: 4rem;
    justify-content: center;
    margin-left: auto;
    position: fixed;
    right: 2rem;
    width: 4rem;
}
button svg{
    height: 1.5rem;
    width: 1.5rem;
}
</style>