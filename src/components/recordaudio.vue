<template>
    <div class = 'Line'>
        <span>{{ text[0] }}</span>
        <span>{{ transcript }}</span>
        <button @click = 'iniSpeech' class = 'start' v-if = "!recording"></button>
        <button @click = 'endSpeech' class = 'stop'  v-if = "recording"></button>
    </div>
</template>

<script>
var recognition = new window.webkitSpeechRecognition()
recognition.lang = 'th-TH'

export default {
    name: 'recordaudio',
    props: ['text'],
    emits: ['correct_answer'],
    methods: {

        iniSpeech(){

            recognition.onresult = e => {
                
                this.transcript = e.results[0][0].transcript

                if(this.transcript === this.text[1]){
                    this.$emit('correct_answer', this.transcript)
                }

            }

            recognition.start()

            this.recording = true

        },
        endSpeech(){

            recognition.stop()

            this.recording = false

        }

    },
    data(){
        return{
            recording: false,
            transcript: ''
        }
    }

}
</script>

<style scoped>
.Line{
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
}
button.start{
    animation: soft_out 0.5s;
    background: red;
    border: 0.15rem solid white;
    box-shadow: 0 0 0 0.15rem black; 
    border-radius: 50%;
    height: 1rem;
    padding: 0;
    width: 1rem;
}
button.stop{
    animation: soft_in 0.5s;
    background: red;
    border: 0.15rem solid white;
    box-shadow: 0 0 0 0.15rem black; 
    border-radius: 0.1rem;
    height: 1rem;
    padding: 0;
    width: 1rem;
}
@keyframes soft_in {
    0%   {border-radius: 50%;}
    100% {border-radius: 0.1rem;}
}
@keyframes soft_out {
    0%   {border-radius: 0.1rem;}
    100% {border-radius: 50%;}
}
</style>