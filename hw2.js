//polindrom
let stringExample = 'tenet'

let numberString = () => {
    let result = []
    for(i=0; i<6; i++) {
        result.push(Math.floor(Math.random() * 100 + 1))
    }
    return result
}

function makePolindromFromString(stringText){
    let result = ''
    for (let i = stringText.length - 1; i>=0; i--){
        result+=stringText[i]
    }
    return result
}

function makePolindromFromList(stringText) {
    let result = []
    for (let i = stringText.length - 1; i>=0; i--){
        result.push(stringText[i])
    }
    return result
}


function checkStringPolindrom(stringToCheck) {
    let cleanedString = stringToCheck.toLowerCase().replace(/\s/g, '')
    let polindromString = makePolindromFromString(cleanedString)
    
    for(let i = 0; i < cleanedString.length; i++) {
        if (cleanedString[i] !== polindromString[i]){
            return false;
        }
    } 
    return true;
}

function removeNotEvenNumbers(randonNumberString) {
    let stringEvenNumbers = []
    for (let i=0; i < randonNumberString.length; i++) {
        if (randonNumberString[i] % 2 == 0) {
            stringEvenNumbers.push(randonNumberString[i])
        }
    }
    return stringEvenNumbers
}

let numbers = numberString()
console.log(numbers)
console.log(makePolindromFromList(removeNotEvenNumbers(numbers)))

