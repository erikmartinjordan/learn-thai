<template>
    <div class = 'app__content'>
        <div class = 'app__thai__question'>
            <p>Khun ayu tao rai?</p>
            <p>How old are you?</p>
        </div>
        <vue-slider v-model = 'age' />
        <div v-if = 'age'>
            <p>Oh, nice to know. You can say:</p>
            <div class = 'app__thai__answer'>
                <p>{{ chan_pom }} ayu {{ age }} pi {{ ka_krub }}</p>
                <p>I'm {{ age }} years old</p>
            </div>
            <h2>Thai numbers</h2>
            <table>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>Soon</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nung</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Song</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Sam</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Si</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Ha</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Hok</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Jed</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Bat</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Kao</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Sib</td>
                    </tr>
                </tbody>
            </table>
        <div v-if = 'age > 18 && age < 100 '>
            <p class = 'app__tip'>10 is <em>sib</em>, 30 is <em>sam-sib</em>, 40 is <em>si-sib</em>, 50 is <em>ha-sib</em>... Do you see the pattern here?</p>
            <form>
                <h2>How is 20, then?</h2>
                <input v-model = 'twenty' placeholder = 'Your answer...'/>
                <button v-on:click = 'submit'>Check ➜</button>
            </form>
            <p class = 'app__answer__right' v-if = "submitted === 'right'">👌 Right, you are a master.</p>
            <p class = 'app__answer__wrong' v-if = "submitted === 'wrong'">🙃 Wrong, there are always excepctions. 20 is <em>yisib</em> in Thai.</p>
        </div>
        </div>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
    name: 'lesson__3',
    components: {
        VueSlider
    },
    props: ['ka_krub', 'chan_pom'],
    methods: {
        submit(e){

            e.preventDefault();

            let twenty_normalized = this.twenty.toLowerCase();

            if(twenty_normalized !== 'yisib' && twenty_normalized !== 'yi-sib' && twenty_normalized !== 'yisip' && twenty_normalized !== 'jisip')
                this.submitted = 'wrong'
            else
                this.submitted = 'right'
        }
    },
    data(){
        return {
            age: 0,
            twenty: '',
            submitted: ''
        }
    }

}
</script>

<style scoped>
table{
    border: 0.2rem solid rgba(13, 13, 13, .03);
    border-radius: .75rem;
    padding: 2.5rem;
    width: 100%;
}
</style>