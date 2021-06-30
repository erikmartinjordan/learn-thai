<template>
    <div class = 'app__speech_recognition'>
        <recordaudio :question = 'question' :answer = 'answer' @correct_answer = 'increase'/>
    </div>
    <controlbar :points = 'points'/>
    <button @click = "increase('kaka')">Increase</button>
</template>

<script>
import recordaudio from './recordaudio.vue'
import controlbar  from './controlbar.vue'
import questions   from '../lessons/questions'
import shuffle     from '../functions/shuffle'

export default {
    name: 'question',
    components: { recordaudio, controlbar },
    methods: {
        increase(question){

            localStorage.setItem('points', ~~localStorage.points    + 1 || 1)
            localStorage.setItem(question, ~~localStorage[question] + 1 || 1)

            this.getNumberOfPoints()
            this.getRandomQuestion()

        },
        getNumberOfPoints(){

            this.points = localStorage.getItem('points')

        },
        getRandomQuestion(){

            let shuffled = shuffle(Object.keys(questions))

            for(let i = 0, sum = 0; i < shuffled.length; i ++){

                var question = shuffled[i]

                var points = ~~localStorage[question] || 0
                var total  = ~~localStorage.points    || 0

                sum += (1 - points/total) || 1

                if(sum > Math.random()){

                    this.question = question
                    this.answer   = questions[question].translation

                    break

                }

            }

        }
    },
    mounted(){

        this.getRandomQuestion()
        this.getNumberOfPoints()

    },
    data(){
        return {
            question: '',
            answer: '',
            points: ''
        }
    }
}
</script>
