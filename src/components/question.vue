<template>
    <controlbar :points = 'points' :sentences = 'sentences'/>
    <div class = 'app__speech__recognition'>
        <recordaudio :question = 'question' :answer = 'answer' @correct_answer = 'increase'/>
        <playaudio   :text = 'answer'/>
    </div>
</template>

<script>
import recordaudio from './recordaudio.vue'
import playaudio   from './playaudio.vue'
import controlbar  from './controlbar.vue'
import questions   from '../lessons/questions'
import shuffle     from '../functions/shuffle'

export default {
    name: 'question',
    components: { recordaudio, playaudio, controlbar },
    methods: {
        increase(question){

            localStorage.setItem('points', ~~localStorage.points    + 1 || 1)
            localStorage.setItem(question, ~~localStorage[question] + 1 || 1)
            
            this.getNumberOfSentences()
            this.getNumberOfPoints()

            setTimeout(() => this.getRandomQuestion(), 2000)

        },
        getNumberOfSentences(){

            this.sentences = Object.keys(localStorage).reduce((acc, key) => acc = questions[key] ? acc + 1 : acc, 0)

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
        this.getNumberOfSentences()

        window.addEventListener('keypress', e => {

            if(e.key === 'n') {

                this.getRandomQuestion()
                
            }

        })

    },
    data(){
        return {
            question: '',
            answer: '',
            points: '',
            sentences: ''
        }
    }
}
</script>

<style scoped>
.app__speech__recognition{
    display: flex;
    height: 100vh;
    padding: 1rem;
}
</style>