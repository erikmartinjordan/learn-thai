<template>
    {{ text }}
    <button @click = 'playSound'>
        <svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 16 16" width = "16" height = "16" v-if = "!loading">
            <path fill-rule="evenodd" d="M7.563 2.069A.75.75 0 018 2.75v10.5a.75.75 0 01-1.238.57L3.472 11H1.75A1.75 1.75 0 010 9.25v-2.5C0 5.784.784 5 1.75 5h1.723l3.289-2.82a.75.75 0 01.801-.111zM6.5 4.38L4.238 6.319a.75.75 0 01-.488.181h-2a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h2a.75.75 0 01.488.18L6.5 11.62V4.38zm6.096-2.038a.75.75 0 011.06 0 8 8 0 010 11.314.75.75 0 01-1.06-1.06 6.5 6.5 0 000-9.193.75.75 0 010-1.06v-.001zm-1.06 2.121a.75.75 0 10-1.061 1.061 3.5 3.5 0 010 4.95.75.75 0 101.06 1.06 5 5 0 000-7.07l.001-.001z">
            </path>
        </svg>
        <spinner v-if = "loading"/>
    </button>
</template>

<script>
import spinner from './spinner.vue'

export default {
    props: ['text', 'chan_pom', 'ka_krub'],
    components: { spinner },
    methods: {
        async playSound(){

            this.loading = true

            var adapted_text = this.text

            if(this.chan_pom)
                adapted_text = this.chan_pom === 'pom' ? adapted_text.replace('ฉัน', 'ผม') : adapted_text.replace('ผม', 'ฉัน')

            if(this.ka_krub)
                adapted_text = this.ka_krub === 'krub' ? adapted_text + 'ครับ' : adapted_text + 'ค่ะ'

            const request = {
                "engine": "Google",
                "data": {
                    "text": adapted_text,
                    "voice": "th-TH"
                }
            }

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(request)
            }

            const response = await fetch("https://api.soundoftext.com/sounds", requestOptions)

            if(response.ok){

                const data = await response.json()
                this.playMp3(data.id);

            }

        },
        async playMp3(id){

            const response = await fetch(`https://api.soundoftext.com/sounds/${id}`)
            
            if(response.ok){

                const data = await response.json()
                
                var audio = new Audio(data.location)
                audio.play()

            }

            this.loading = false

        }
    },
    data(){
        return {loading: false}
    }
}
</script>

<style scoped>
button{
    align-items: center;
    background: rgba(13, 13, 13, .04);
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    margin-left: auto;
}
</style>