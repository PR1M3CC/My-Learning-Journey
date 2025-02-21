function adjectives() {
    let a = 'Crazy'
    let b = 'Amazing'
    let c = 'Fire'
    let rand = Math.floor(Math.random() * 3)
    if (rand == 0) {
        return a
    }
    else if (rand == 1) {
        return b
    }
    else {
        return c
    }
}
function names() {
    let a = 'Motors'
    let b = 'Foods'
    let c = 'Garments'
    let rand = Math.floor(Math.random() * 3)
    if (rand == 0) {
        return a
    }
    else if (rand == 1) {
        return b
    }
    else {
        return c
    }
}
function words() {
    let a = 'Limited'
    let b = 'Hub'
    let c = 'Corp'
    let rand = Math.floor(Math.random() * 3)
    if (rand == 0) {
        return a
    }
    else if (rand == 1) {
        return b
    }
    else {
        return c
    }
}
console.log('The Business name is:', adjectives(), names(), words())