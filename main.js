const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi')
const regexp = /fox/gi
// console.log(regexp.test(str))
console.log(str.replace(regexp, 'AAA'))
console.log(str)