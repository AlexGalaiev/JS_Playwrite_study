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

function getResult(number, delay) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(checkEvenNumber(number));
    }, delay);
  });
  return promise;
}

getResult(getRandomNumber(), getRandomDelay())
.then(() => {getResult(getRandomNumber(), getRandomDelay())})
.then(() => {getResult(getRandomNumber(), getRandomDelay())})
