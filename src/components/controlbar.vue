<template>
    <div class = 'app__controlbar' v-if = 'points'>
        <span :class = 'animation'>{{ points }}</span> 🌶️
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default{
    props: ['points'],
    setup(props){

        var animation = ref('')

        watchEffect(() => {
            
            if(props.points){

                animation.value = 'app__points__animated'

                setTimeout(() => {animation.value = ''}, 5000)

            }

        })

        return { animation }

    }
}
</script>

<style scoped>
.app__controlbar{
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5rem;
    bottom: 20px;
    color: white;
    left: 50%;
    padding: 0.5rem 2rem;
    position: fixed;
    transform: translateX(-50%);
}  
.app__points__animated{
    animation: slide-up 0.9s cubic-bezier(0.65, 0, 0.35, 1) both;
}
@keyframes slide-up{
  0%  { transform: translateY(100px);}
  100%{ transform: translateY(0);}
}
</style>