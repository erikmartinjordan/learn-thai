import normalize from '../functions/normalize'

var ka_krub  = localStorage.gender === 'm' ? 'krub' : 'ka'
var chan_pom = localStorage.gender === 'm' ? 'pom'  : 'chan'

export default {

    "What's your name?": {
        "translation": `คุณชื่ออะไร`
    },
    "How old are you?": {
        "translation": `คุณอายุเท่าไหร่`
    },
    "It's very hot": {
        "translation": `มันร้อนมาก`
    },
    "It's very cold": {
        "translation": `มันหนาวมาก`
    },
    "How are you doing today": {
        "translation": `เป็นอย่างไรบ้าง`
    },
    "Where will you go today": {
        "translation": `วันนี้จะไปไหน`
    },
    "How was your work today": {
        "translation": `วันนี้คุณทำงานเป็นอย่างไรบ้าง`
    },
    "Nice to meet you": {
        "translation": `ยินดีที่ได้รู้จัก`
    },
    "Could you talk slower": {
        "translation": `คุณช่วยพูดช้าลงหน่อยได้ไหม`
    },
    "Can you help me?": {
        "translation": `คุณสามารถช่วยฉันได้ไหม`
    },
    "Come with me": {
        "translation": normalize(`มากับฉัน`, chan_pom)
    },
    "It's going to rain": {
        "translation": `ฝนกำลังจะตก`
    },
    "Have you ever been in Barcelona?": {
        "translation": `คุณเคยไปบาร์เซโลน่าไหม`
    },
    "Have you ever seen elephants": {
        "translation": `คุณเคยเห็นช้างไหม`
    },
    "I eat potato": {
        "translation": normalize(`ฉันกินมันฝรั่ง`, chan_pom)
    },
    "I live in Bangkok": {
        "translation": normalize(`ฉันอยู่กรุงเทพ`, chan_pom)
    },
    "I feel bored":{
        "translation": normalize(`ฉันรู้สึกเบื่อ`, chan_pom)
    },
    "Today I will stay at home": {
        "translation": normalize(`วันนี้ฉันจะอยู่บ้าน`, chan_pom, ka_krub)
    },
    "I got food poisoning": {
        "translation": normalize(`ฉันเป็นโรคอาหารเป็นพิษ`, chan_pom)
    },
    "I need to go to see the doctor": {
        "translation": normalize(`ฉันต้องไปหาหมอ`, chan_pom)
    },
    "I'm fine, thanks": {
        "translation": normalize(`ฉันสบายดีขอบคุณ`, chan_pom, ka_krub)
    }

}