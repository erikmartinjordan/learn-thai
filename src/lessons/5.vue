<template>
    <div class = 'app__content'>
        <p>It's hot today in Thailand. Isn't it? 🥵</p>
        <div class = 'app__thai__answer'>
            <p>Man ron mak</p>
            <p>It's very hot</p>
            <playaudio text = "มันร้อนมาก"/>
        </div>
        <p>Northern Thailand can be cold. 🥶</p>
        <div class = 'app__thai__answer'>
            <p>Man nao mak</p>
            <p>It's very cold</p>
            <playaudio text = "มันหนาวมาก"/>
        </div>
        <p class = 'app__tip'><em>Mak</em> means very in Thai. You'll usually hear <em>mak, mak</em> (very, very) to emphasize the sentence.</p>
    </div>
</template>

<script>
import playaudio from '../components/playaudio.vue'

export default {
    name: 'lesson__5',
    props: ['ka_krub', 'chan_pom'],
    components: { playaudio }
}
</script>