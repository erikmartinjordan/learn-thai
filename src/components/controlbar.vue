<template>
    <div class = 'app__controlbar' v-if = 'points'>
        <span>🌶️ <span :class = 'animation_1'>{{ points }}</span> points</span>
        <span>✨ <span :class = 'animation_2'>{{ sentences }}</span> sentence<text v-if = "sentences > 1">s</text> <span>learnt</span></span>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default{
    props: ['points', 'gender', 'sentences'],
    setup(props){

        var animation_1 = ref('')
        var animation_2 = ref('')

        watchEffect(() => {
            
            if(props.points){

                animation_1.value = 'app__points__animated'

                setTimeout(() => {animation_1.value = ''}, 700)

            }

        })

        watchEffect(() => {

            if(props.sentences){

                console.log(props.sentences)

                animation_2.value = 'app__points__animated'

                setTimeout(() => {animation_2.value = ''}, 700)

            }

        })

        return { animation_1, animation_2 }

    }
}
</script>

<style scoped>
.app__controlbar{
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5rem;
    font-size: 0.75rem;
    bottom: 2rem;
    color: white;
    display: flex;
    left: 50%;
    padding: 0.5rem 2rem;
    position: fixed;
    transform: translateX(-50%);
}  
.app__controlbar span{
    align-items: center;
    display: inline-flex;
    margin: 0 0.5rem;
}
.app__points__animated{
    animation: slide-up 0.3s cubic-bezier(0.65, 0, 0.35, 1) both;
    display: inline-block;
}
@keyframes slide-up{
  0%  { transform: translateY(100px);}
  100%{ transform: translateY(0);}
}
</style>