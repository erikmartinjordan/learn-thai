<template>
    <div class = 'app__controlbar' v-if = 'points'>
        <div class = 'app__controlbar__elem'>
            <div @mouseover = "tooltip_1 = true" @mouseleave = "tooltip_1 = false">
                <img  :src = 'shiny'/>
                <span :class = 'animation_1'>{{ points }} points</span>
            </div>
            <transition name = "appear">
                <span v-if = "tooltip_1" class = 'tooltip'>A correct sentence equals to 1 point</span>
            </transition>
        </div>
        <div class = 'app__controlbar__elem'>
            <div @mouseover = "tooltip_2 = true" @mouseleave = "tooltip_2 = false"> 
                <img  :src = 'cap'/>           
                <span :class = 'animation_2'>{{ sentences }} sentence<text v-if = "sentences > 1">s</text></span>
            </div>
            <transition name = "appear">
                <span v-if = "tooltip_2" class = 'tooltip'>Number of unique sentences learnt</span>
            </transition>
        </div>
        <div class = 'app__controlbar__elem'> 
            <div @mouseover = "tooltip_3 = true" @mouseleave = "tooltip_3 = false">
                <img  :src = 'shortcut'/>
                <span>shortcuts</span>
            </div>
            <transition name = "appear">
                <div v-if = "tooltip_3" class = 'tooltip'>
                    <span><kbd>enter</kbd> reproduce sound</span>
                    <span><kbd>spacebar</kbd> start recording</span>
                    <span><kbd>n</kbd> next sentence</span>
                </div>
            </transition>
        </div>
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

                animation_2.value = 'app__points__animated'

                setTimeout(() => {animation_2.value = ''}, 700)

            }

        })

        return { animation_1, animation_2 }

    },
    data(){
        return {
            tooltip_1: false,
            tooltip_2: false,
            tooltip_3: false,
            shiny: require('../assets/shiny.svg').default,
            cap: require('../assets/cap.svg').default,
            shortcut: require('../assets/shortcut.svg').default
        }
    }
}
</script>

<style scoped>
.app__controlbar{
    background: white;
    border-radius: 5rem;
    border: 0.1rem solid rgba(1, 1, 1, 0.2);
    bottom: 2rem;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 10px;
    color: hsl(207, 14%, 36%);
    cursor: default;
    font-size: 0.75rem;
    display: flex;
    left: 50%;
    padding: 0.5rem 0.2rem;
    position: fixed;
    transform: translateX(-50%);
}  
.app__controlbar__elem{
    align-items: center;
    display: inline-flex;
    margin: 0 0.5rem;
    position: relative;
}
.app__controlbar__elem div{
    align-items: center;
    display: flex;
    justify-content: space-between;
}
.app__points__animated{
    animation: slide-up 0.3s cubic-bezier(0.65, 0, 0.35, 1) both;
    display: inline-block;
}
.app__controlbar img{
    height: 1rem;
    margin-right: 0.1rem;
}
.app__controlbar .tooltip{
    align-items: flex-start;
    background: white;
    border: 0.1rem solid rgba(1, 1, 1, 0.2);
    border-radius: 0.5rem;
    bottom: 0;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 10px;
    display: flex;
    flex-direction: column;
    left: 50%;
    padding: 0.5rem 0.2rem;
    position: absolute;
    transform: translate(-50%, -40px);
    width: max-content;
}
kbd{
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: text-bottom;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
}
.appear-enter-active {
    animation: appear 0.3s forwards;
}
.appear-leave-active{
    animation: appear 0.3s reverse;
}
@media (max-width: 600px) {
    .app__controlbar{
        bottom: auto;
        top: 2rem;
    }
    .app__shortcuts{
        display: none !important;
    }
}
@keyframes slide-up{
  0%  { transform: translateY(100px);}
  100%{ transform: translateY(0);}
}
@keyframes appear{
  0%  { transform: translate(-50%, -30px); opacity: 0;}
  100%{ transform: translate(-50%, -40px); opacity: 1;}
}
</style>