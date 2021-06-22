<template>
    <div class = 'app__content'>
            <div class = 'app__thai__question'>
                <p>Khun ma jak nai?</p>
                <p>Where do you come from?</p>
            </div>
            <input v-model = 'country' placeholder = 'Type your country...' autofocus>
            <div v-if = 'country'>
                <p>Oh, {{ country }}, is beautiful.</p>
                <div class = 'app__thai__answer'>
                    <p>Chan ma jak {{ country }} {{ ka_krub }}</p>
                    <p>I come from {{ country }}</p>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'lesson__2',
    props: ['ka_krub'],
    data(){
        return {country: ''}
    }

}
</script>