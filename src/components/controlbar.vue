<template>
    <div class = 'app__controlbar' v-if = 'points'>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
            <span :class = 'animation_1'>{{ points }}</span> points
        </span>
        <span> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>            
            <span :class = 'animation_2'>{{ sentences }}</span> sentence<text v-if = "sentences > 1">s</text> <span>learnt</span>
        </span>
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
.app__controlbar svg{
    height: 1rem;
}
@keyframes slide-up{
  0%  { transform: translateY(100px);}
  100%{ transform: translateY(0);}
}
</style>