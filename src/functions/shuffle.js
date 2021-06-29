const shuffle = (arr) => {

    return arr.map((e, i, a, j = ~~(Math.random() * (a.length - i) + i)) => ([a[i], a[j]] = [a[j], a[i]], a[i]))

}

export default shuffle