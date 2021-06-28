<template>
    <div class = 'app__content'>
        <p>🙎‍♀️</p>
        <div class = 'app__thai__answer'>
            <p>Pen yangrai bang</p>
            <p>How are you doing today?</p>
            <playaudio text = "เป็นอย่างไรบ้าง"/>
        </div>
        <p>💁‍♂️</p>
        <div class = 'app__thai__answer'>
            <p>{{ chan_pom }} sawasdee kob kun {{ ka_krub }}</p>
            <p>I'm fine thanks</p>
            <playaudio text = "ฉันสบายดีขอบคุณ" :chan_pom = "chan_pom" :ka_krub = "ka_krub"/>
        </div>
        <p>🙎‍♀️</p>
        <div class = 'app__thai__answer'>
            <p>Wani ja pai nai</p>
            <p>Where will you go today?</p>
            <playaudio text = "วันนี้จะไปไหน"/>
        </div>
        <p>💁‍♂️</p>
        <div class = 'app__thai__answer'>
            <p>Wani {{ chan_pom }} ja yu baan {{ ka_krub }}</p>
            <p>Today I will stay at home</p>
            <playaudio text = "วันนี้ฉันจะอยู่บ้าน" :chan_pom = "chan_pom" :ka_krub = "ka_krub"/>
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