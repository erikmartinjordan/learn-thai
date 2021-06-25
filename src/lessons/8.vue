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

export default {
    components: { recordaudio },
    methods: {
        increase(answer){
            this.points[answer] = true
            console.log(this.points)
        }
    },
    data(){
        return {
            questions: [
                [`What's your name?`, `คุณชื่ออะไร`],
                [`How old are you?`, `คุณอายุเท่าไหร่`],
                [`It's very hot`, `มันร้อนมาก`],
                [`It's very cold`, `มันหนาวมาก`]
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
