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
    "Grandma has cancer": {
        "translation": `คุณยายเป็นมะเร็ง`
    },
    "The Earth is beautiful": {
        "translation": `โลกสวย`
    },
    "Get well soon": {
        "translation": `หายเร็วๆนะ`
    },
    "Take care yourself": {
        "translation": `ดูแลตัวเองด้วย`
    },
    "You lie me": {
        "translation": `คุณโกหก`
    },
    "Don't panic": {
        "translation": `อย่าตื่นตระหนก`
    },
    "Start now": {
        "translation": `เริ่มเลย`    
    },
    "Don't forget": {
        "translation": `อย่าลืม`    
    },
    "How is the weather?": {
        "translation": `อากาศเป็นอย่างไร`
    },
    "How is the food?": {
        "translation": `อาหารเป็นอย่างไร`
    },
    "How are you doing these days?": {
        "translation": `เป็นไงบ้างช่วงนี้`    
    },
    "He is a pilot": {
        "translation": `เขาเป็นนักบิน`    
    },
    "Can I have your hand": {
        "translation": `ขอมือหน่อยได้ไหม`    
    },
    "Can I have the salt, please?": {
        "translation": `ขอเกลือได้ไหม`
    },
    "Shall we go swimming?": {
        "translation": `ไปว่ายน้ำกันไหม`    
    },
    "Shall we go to bed?": {
        "translation": `ไปนอนกันไหม`
    },
    "Shall we go to see a movie?": {
        "translation": `ไปดูหนังกันไหม`    
    },
    "Can I have the receipt, please?":{
        "translation": normalize(`ฉันขอใบเสร็จได้ไหม`, chan_pom)
    },
    "I want to be a writer":{
        "translation": normalize(`อยากเป็นนักเขียน`, chan_pom)
    },
    "I want to save money": {
        "translation": normalize(`อยากออมเงิน`, chan_pom)
    },
    "How do I travel from Bangkok to Chiang Mai?": {
        "translation": normalize(`เดินทางจากกรุงเทพฯ ไปเชียงใหม่อย่างไร?`, chan_pom)
    },
    "What should I watch?": {
        "translation": normalize(`ฉันควรดูอะไร`, chan_pom)
    },
    "What should I talk about?": {
        "translation": normalize(`ฉันควรพูดอะไร`, chan_pom)
    },
    "What should I buy?":{
        "translation": normalize(`ฉันควรซื้ออะไรดี`, chan_pom)
    },
    "I'm an engineer": {
        "translation": normalize(`ฉันเป็นวิศวกร`, chan_pom)
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