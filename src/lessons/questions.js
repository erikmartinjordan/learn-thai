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
    "It's going to rain": {
        "translation": `ฝนกำลังจะตก`
    },
    "Have you ever been in Barcelona?": {
        "translation": `คุณเคยไปบาร์เซโลน่าไหม`
    },
    "Have you ever seen elephants": {
        "translation": `คุณเคยเห็นช้างไหม`
    },
    "Last week": {
        "translation": `อาทิตย์ที่แล้ว`
    },
    "Last month": {
        "translation": `เดือนที่แล้ว`
    },
    "Last year": {
        "translation": `ปีที่แล้ว`
    },
    "When is your birthday?": {
        "translation": `วันเกิดคุณเมื่อไหร่`
    },
    "Happy birthday":{
        "translation": `สุขสันต์วันเกิด`
    },
    "Did you get the vaccine?": {
        "translation": `คุณได้รับวัคซีนแล้ว`
    },
    "Grandad has cancer": {
        "translation": `ปู่เป็นมะเร็ง`
    },
    "The Earth is beautiful": {
        "translation": `โลกสวย`
    },
    "I miss everyone":{
        "translation": normalize(`ฉันคิดถึงทุกคน`, chan_pom)
    }, 
    "I want to break up": {
        "translation": normalize(`ฉันอยากเลิก`, chan_pom)
    },
    "I'm not single": {
        "translation": normalize(`ฉันไม่โสด`, chan_pom)
    },
    "Today I went for a walk": {
        "translation": normalize(`วันนี้ฉันไปเดินเล่น`, chan_pom)
    },
    "I went walking into the jungle": {
        "translation": normalize(`ฉันเดินเข้าป่า`, chan_pom)
    },
    "I bought something for you": {
        "translation": normalize(`ฉันซื้อของมาให้คุณ`, chan_pom)
    },
    "Last week I went to a birthday party": {
        "translation": normalize(`อาทิตย์ที่แล้วฉันไปงานเลี้ยงวันเกิด`, chan_pom)
    },
    "Can you help me?": {
        "translation": normalize(`คุณสามารถช่วยฉันได้ไหม`, chan_pom)
    },
    "I bought a new TV last week": {
        "translation": normalize(`ฉันซื้อทีวีเครื่องใหม่เมื่อสัปดาห์ที่แล้ว`, chan_pom)
    },
    "Last week I went to Pattaya": {
        "translation": normalize(`อาทิตย์ที่แล้วฉันไปพัทยา`, chan_pom)
    },
    "Come with me": {
        "translation": normalize(`มากับฉัน`, chan_pom)
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