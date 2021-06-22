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
                    <p>Chan ayu {{ age }} pi {{ ka_krub }}</p>
                    <p>I'm {{ age }} years old</p>
                </div>
                <p>Here are the numbers in Thai:</p>
                <table>
                    <tbody>
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
                <p>10 is <em>sib</em>, 30 is <em>sam-sib</em>, 40 is <em>si-sib</em>, 50 is <em>ha-sib</em>... Do you see the pattern here?</p>
                <form v-if = '!submitted'>
                    <h2>How is 20, then?</h2>
                    <input v-model = 'twenty' placeholder = 'Your answer...'/>
                    <button v-on:click = 'submit'>Check ➜</button>
                </form>
                <p v-if = "submitted === 'right'">👌 Right, you are a master</p>
                <p v-if = "submitted === 'wrong'">🙃 Wrong, there are always excepctions. 20 is <em>yisib</em> in Thai.</p>
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
    props: ['ka_krub'],
    methods: {
        submit(e){

            e.preventDefault();

            if(this.twenty !== 'yisib' && this.twenty !== 'yi-sib' && this.twenty !== 'yisip')
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