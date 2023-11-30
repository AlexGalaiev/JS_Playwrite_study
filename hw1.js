let romeNumber = 'II'
let arabicRomeCalculator = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,           
    'M':1000
}
function romeToArabicConverter(romeNumberExample, arabicRomeCalculator){
    let result = 0
    for (let i = 0; i < romeNumberExample.length; i++) {
        let currentRomeSymbol = romeNumberExample[i]
        result += arabicRomeCalculator[currentRomeSymbol]
    }
    return result
}

console.log(romeToArabicConverter(romeNumber, arabicRomeCalculator))