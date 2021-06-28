const normalize = (input, chan_pom, ka_krub) => {

    let output = input

    if(chan_pom)
        output = chan_pom === 'pom' ? output.replace('ฉัน', 'ผม') : output.replace('ผม', 'ฉัน')

    if(ka_krub)
        output = ka_krub === 'krub' ? output + 'ครับ' : output + 'ค่ะ'

    console.log(output)

    return output

}

export default normalize