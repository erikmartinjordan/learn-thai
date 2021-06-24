<template>
    <div class = 'app__content'>
        <div class = 'app__thai__question'>
            <p>Khun ma jak nai?</p>
            <p>Where do you come from?</p>
        </div>
        <input v-model = 'country' placeholder = 'Type your country...' autofocus>
        <div v-if = 'country'>
            <p>Oh, {{ country }}, is beautiful.</p>
            <div class = 'app__thai__answer'>
                <p>{{ chan_pom }} ma jak {{ country }} {{ ka_krub }}</p>
                <p>I come from {{ country }}</p>
                <playaudio :chan_pom = "chan_pom" :text = "'ฉันมาจาก' + country" :ka_krub = "ka_krub"/>
            </div>
        </div>
    </div>
</template>

<script>
import playaudio from '../components/playaudio.vue'

export default {
    name: 'lesson__2',
    props: ['ka_krub', 'chan_pom'],
    components: { playaudio },
    data(){
        return {country: ''}
    }

}
</script>