<template>
    <div class = 'app__main'>
        <div>
            <h2>Learn Thai & <br> start talking</h2>
            <p>In Thailand, sentences end with <em>ka</em> if you are a <u>woman</u>, <br> or <em>krub</em> if you are a <u>man</u>. Select your gender: </p>
            <div class = 'app__select__gender'>
                <button @click = "select('w')" :class = "gender === 'w' ? 'Selected' : null">👩</button>
                <button @click = "select('m')" :class = "gender === 'm' ? 'Selected' : null">👨</button>
            </div>
            <a class = 'app__start' href = "/question">Start learning</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'start',
    data(){
        return {
            gender: null,
            ka_krub: null,
            chan_pom: null
        }
    },
    methods: {
        select(gender){
            
            localStorage.setItem('gender', gender)
            
            this.gender   = localStorage.gender
            this.ka_krub  = localStorage.gender === 'm' ? 'krub' : 'ka'
            this.chan_pom = localStorage.gender === 'm' ? 'pom'  : 'chan'

        }
    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
*{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;     
}
body{
    background: linear-gradient(to right, rgb(236, 233, 230), rgb(255, 255, 255));
    font-family: inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 17px;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.7;
}
button{
    background: rgb(247, 88, 88);
    border: none;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
}
.app__main{
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
}
.app__main h2{
    font-size: 2rem;
    font-weight: bold;
    line-height: 2rem;
}
.app__select__gender{
    display: flex;
    justify-content: center;
}
.app__select__gender button{
    background: white;
    border: none;
    border-radius: 2rem;
    font-size: 8rem;
    margin: 1rem;
    padding: 2rem;
}
.app__select__gender button.Selected{
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
}
.app__note{
    color: rgb(153, 156, 163);
}
a.app__start{
    background: #f03;
    border: none;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    display: block;
    font-size: 1rem;
    font-weight: bold;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    width: max-content;
}
@media(hover: hover){
    button:hover{
        transition: 0.2s ease-in-out;
        transform: scale(1.05);
    }
}
</style>