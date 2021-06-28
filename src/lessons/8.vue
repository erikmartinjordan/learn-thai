<template>
    <h2>This is an evaluation unit</h2>
    <p>Click the record button on each sentence and translate it to Thai:</p>
    <div class = 'app__speech_recognition'>
        <recordaudio v-for = "(question, index) in questions" :key = "index" :text = "question" @correct_answer = "increase"/>
    </div>
    <div class = 'app__points'>
        {{ Object.keys(points).length }} / {{ Object.keys(questions).length }}
    </div>
</template>

<script>
import recordaudio from '../components/recordaudio.vue'
import normalize   from '../functions/normalize'

export default {
    props: ['ka_krub', 'chan_pom'],
    components: { recordaudio },
    methods: {
        increase(answer){
            this.points[answer] = true
        }
    },
    data(){
        return {
            questions: [
                [`What's your name?`, `คุณชื่ออะไร`],
                [`How old are you?`, `คุณอายุเท่าไหร่`],
                [`It's very hot`, `มันร้อนมาก`],
                [`It's very cold`, `มันหนาวมาก`],
                [`How are you doing today`, `เป็นอย่างไรบ้าง`],
                [`I'm fine thanks`, normalize(`ฉันสบายดีขอบคุณ`, this.chan_pom, this.ka_krub)],
                [`Where will you go today`, `วันนี้จะไปไหน`],
                [`Today I will stay at home`, normalize(`วันนี้ฉันจะอยู่บ้าน`, this.chan_pom, this.ka_krub)],
                [`I got food poisoning`, normalize(`ฉันเป็นโรคอาหารเป็นพิษ`, this.chan_pom)],
                [`I need to go to see the doctor`, normalize(`ฉันต้องไปหาหมอ`, this.chan_pom)]
            ],
            points: {}
        }
    }
}
</script>

<style scoped>
.app__points{
    margin-top: auto;
}
</style>
