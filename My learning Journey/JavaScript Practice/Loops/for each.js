let myArr = ["first", "second", "third"]
myArr.forEach((item) => {
    console.log(item);
})
let dbArr = [{
    languageName: "javascript",
    languageFileName: "js"
},
{
    languageName: "java",
    languageFileName: "java"
},
{
    languageName: "python",
    languageFileName: "py"
}]
dbArr.forEach((obj) => {
    console.log(obj.languageName)
}
)