<template>
    <div class = 'app__record'>
        <div class = 'app__question'>{{ question }}</div>
        <span>{{ transcript }}</span>
        <button @click = 'iniSpeech' class = 'start' v-if = "!recording && !correct" ><img :src = 'mic'/></button>
        <button @click = 'endSpeech' class = 'stop'  v-if = "recording  && !correct"></button>
        <svg v-if = "correct" class = 'checkmark' xmlns = 'http://www.w3.org/2000/svg' viewBox = '0 0 52 52'>
            <circle class = 'checkmark__circle' cx = '26' cy = '26' r = '25' fill = 'none'/>
            <path class = 'checkmark__check' fill = 'none' d = 'M14.1 27.2l7.1 7.2 16.7-16.8'/>
        </svg>
    </div>
</template>

<script>
import stringSimilarity from 'string-similarity'

var recognition = new window.webkitSpeechRecognition()
recognition.continous = true
recognition.lang = 'th-TH'

export default {
    name: 'recordaudio',
    props: ['question', 'answer'],
    emits: ['correct_answer'],
    methods: {

        iniSpeech(){

            recognition.onresult = async e => {
                
                this.transcript = e.results[0][0].transcript

                if(stringSimilarity.compareTwoStrings(this.transcript, this.answer) > 0.8){
                    
                    this.$emit('correct_answer', this.question)
                    
                    this.correct = true
                    
                    let audio = new Audio(this.coin)

                    audio.play()

                    setTimeout(() => this.reset(), 2000)

                }
                else{

                    this.endSpeech()

                }

            }

            recognition.start()

            this.recording = true

        },
        endSpeech(){

            recognition.stop()

            this.recording = false

        },
        reset(){

            this.correct = false
            this.recording = false
            this.transcript = ''

        }

    },
    data(){
        return{
            correct: false,
            recording: false,
            transcript: '',
            mic: require('../assets/mic.svg').default,
            coin: require('../assets/coin.mp3').default
        }
    },
    mounted() {

        window.addEventListener('keypress', e => {

            if(e.target.matches('input')) return;

            if(!this.recording && e.key === ' ') {

                this.iniSpeech()
                return
            }
            
            if(this.recording && e.key === ' '){

                this.endSpeech()
                return

            }

        })

    }
}
</script>

<style scoped>
.app__record{
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
}
.app__question{
    font-size: 3rem;
    font-weight: 700;
    line-height: 3rem;
    margin-bottom: 2rem;
}
button.start,
button.stop{
    align-items: center;
    animation: soft_out 0.5s;
    background: #f03;
    border: none;
    border-radius: 50%;
    color: white;
    display: flex;
    height: 4rem;
    justify-content: center;
    width: 4rem;
}
button.stop{
    animation: pulse 1s infinite;
}
.checkmark {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: white;
    stroke-miterlimit: 10;
    box-shadow: inset 0px 0px 0px #42a1ec;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}
.checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #42a1ec;
    fill: none;
    animation: stroke .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
}

.checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke .3s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
}
@keyframes stroke {
  100% {stroke-dashoffset: 0;}
}
@keyframes scale {
   0%, 100% {transform: none;}
   50% {transform: scale3d(1.1, 1.1, 1);}
}
@keyframes fill {
   100% {box-shadow: inset 0px 0px 0px 30px #42a1ec;}
}
@keyframes pulse {
    0%   {box-shadow: 0 0 0 0    rgba(255, 0, 51, 0.4);}
    70%  {box-shadow: 0 0 0 1rem rgba(255, 0, 51, 0);}
    100% {box-shadow: 0 0 0 0    rgba(255, 0, 51, 0);}
}
</style>