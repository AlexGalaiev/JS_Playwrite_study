function checkEvenNumber(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is NOT even`);
  }
  return number;
}

function getRandomDelay() {
  return Math.floor(Math.random() * 1000);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function getResult(number, delay, callback) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback(number));
    }, delay);
  });
  return promise;
}

getResult(getRandomNumber(), getRandomDelay(), (getRandomNumber)=>{
    checkEvenNumber(getRandomNumber)
}).then((number) => {console.log(number)})
