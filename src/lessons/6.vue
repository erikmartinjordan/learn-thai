<template>
    <div class = 'app__content'>
        <p>If you aren't feeling good. 🤒</p>
        <div class = 'app__thai__answer'>
            <p>{{ chan_pom }} pen kaai</p>
            <p>I've a fever</p>
            <playaudio text = "ผมเป็นไข้" :chan_pom = "chan_pom"/>
        </div>
        <p>If you ate street food and you got food poisoning. 🤢</p>
        <div class = 'app__thai__answer'>
            <p>{{ chan_pom }} pen rok ahan pen pid</p>
            <p>I got food poisoning</p>
            <playaudio text = "ฉันเป็นโรคอาหารเป็นพิษ" :chan_pom = "chan_pom"/>
        </div>
        <p>If you need to go to the doctor. 👨‍⚕️</p>
        <div class = 'app__thai__answer'>
            <p>{{ chan_pom }} tong pai ha mo</p>
            <p>I need to go to see the doctor</p>
            <playaudio text = "ฉันต้องไปหาหมอ" :chan_pom = "chan_pom"/>
        </div>
    </div>
</template>

<script>
import playaudio from '../components/playaudio.vue'

export default {
    name: 'lesson__6',
    props: ['ka_krub', 'chan_pom'],
    components: { playaudio }

}
</script>