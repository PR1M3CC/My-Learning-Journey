function reversed(string) {
    let reversed = ''
    for (let i = string.length-1; i >= 0; i--) {
     reversed += string[i]
    }
    return reversed
}
let str = "Toseef"
let result = reversed(str)
console.log(result);