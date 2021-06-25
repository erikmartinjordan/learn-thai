<template>
    <div class = 'app__content'>
        <p>Ok, these basic questions are tiring. It's time to have some coffee at 7-Eleven. ☕</p>
        <div class = 'app__thai__answer'>
            <p>{{ chan_pom }} kor {{ beverage_th }} noi dai mai</p>
            <p>Can I have some {{ beverage_en }}, please?</p>
            <playaudio :text = "'ฉันขอ' + beverage_TH + 'หน่อยได้ไหม'" :chan_pom = "chan_pom"/>
        </div>
        <p>Or do you may want to drink something else?</p>
        <div class = 'app__grid'>
            <button @click = "beverage_th = 'nam',           beverage_en = 'water',     beverage_TH = 'น้ำ'">🚰</button>
            <button @click = "beverage_th = 'nam pod lamai', beverage_en = 'juice',     beverage_TH = 'น้ำผลไม้'">🧃</button>
            <button @click = "beverage_th = 'beer',          beverage_en = 'beer',      beverage_TH = 'เบียร์'">🍺</button>
            <button @click = "beverage_th = 'nom',           beverage_en = 'milk',      beverage_TH = 'นม'">🥛</button>
            <button @click = "beverage_th = 'chaa',          beverage_en = 'tea',       beverage_TH = 'ชา'">🍵</button>
        </div>
        <p class = 'app__tip'>Look how Thai people don't change the tone when asking for something. They use the word <em>noi</em> instead.</p>
    </div>
</template>

<script>
import playaudio from '../components/playaudio.vue'

export default {
    name: 'lesson__4',
    props: ['ka_krub', 'chan_pom'],
    components: { playaudio },
    data(){
        return {
            beverage_th: 'kafe',
            beverage_en: 'coffee',
            beverage_TH: 'กาแฟ'
        }
    }

}
</script>

<style scoped>
.app__grid{
    display: flex;
    justify-content: space-between;
}
.app__content button{
    background: rgba(13, 13, 13, .03);
    border: none;
    font-size: 4rem;
    padding: 2rem;
}
</style>