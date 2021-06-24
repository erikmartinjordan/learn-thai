<template>
    <div class = 'app__content'>
        <h1>👋 Welcome! <em>Sawasdee!</em></h1>
        <p>Do a lesson every day and improve your Thai. You don't need to be a native English speaker or to have a minimum level to start the course. You can add your own lessons and be collaborative as well.</p>
        <p>Thai phonetic is adapted to internation alphabet, so it's easy to everyone to pronounce it.</p>
        <div class = 'app__thai__question'>
            <p>Khun chu arai?</p>
            <p>What's your name?</p>
        </div>
        <input v-model = 'name' placeholder = 'Type your name...' autofocus>
        <div v-if = 'name'>
            <p><em>Sawasdee {{ ka_krub }}</em> {{ name }},</p>
            <p>Let's start by introducing yourself  Thai:</p>
            <div class = 'app__thai__answer'>
                <p>{{ chan_pom }} chu {{ name }} {{ ka_krub }}</p>
                <p>My name is {{ name }}</p>
                <playaudio :chan_pom = "chan_pom" :text = "'ฉันชื่อ' + name" :ka_krub = "ka_krub"/>
            </div>
        </div>
        <div v-if = 'name'>
            <p>In Thailand, sentences end with <em>ka</em> if you are a woman, or <em>krub</em> if you are a man.</p>
            <p>Select your gender (or continue with <em>ka</em> as default): </p>
            <div class = 'app__select__gender'>
                <button @click = "select('w')">👩</button>
                <button @click = "select('m')">👨</button>
                {{ gender }}
            </div>
        </div>
    </div>
</template>

<script>
import playaudio from '../components/playaudio.vue'

export default {
    name: 'lesson__1',
    props: ['ka_krub', 'chan_pom', 'select'],
    components: { playaudio },
    data(){
        return {
            name : ''
        }
    }
}
</script>

<style scoped>
.app__select__gender button{
    background: rgba(13, 13, 13, .03);
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 4rem;
    margin: .5rem;
}
.app__select__gender{
    display: flex;
    justify-content: center;
}
</style>