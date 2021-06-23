<template>
    <div class = 'app__content'>
        <p>Ok, these basic questions are tiring. It's time to have some coffee at 7-Eleven. ☕</p>
        <div class = 'app__thai__answer'>
            <p>{{ chan_pom }} kor {{ beverage_th }} noi dai mai</p>
            <p>Can I have some {{ beverage_en }}, please?</p>
        </div>
        <p>Or do you may want to drink something else?</p>
        <div class = 'app__grid'>
            <button @click = "beverage_th = 'nam',           beverage_en = 'water'">🚰</button>
            <button @click = "beverage_th = 'nam pod lamai', beverage_en = 'juice'">🧃</button>
            <button @click = "beverage_th = 'beer',          beverage_en = 'beer'">🍺</button>
            <button @click = "beverage_th = 'nom',           beverage_en = 'milk'">🥛</button>
            <button @click = "beverage_th = 'chaa',          beverage_en = 'tea'">🍵</button>
        </div>
        <p class = 'app__tip'>Be always polite and say <em>kob kun {{ ka_krub }}</em> after purchasing. Look how Thai people don't change the tone when asking for something. They use the word <em>noi</em> instead.</p>
    </div>
</template>

<script>
export default {
    name: 'lesson__4',
    props: ['ka_krub', 'chan_pom'],
    data(){
        return {
            beverage_th: 'kafe',
            beverage_en: 'coffee'
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