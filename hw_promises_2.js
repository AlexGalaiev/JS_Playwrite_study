function dataBase() {
  let jsonData = {
    name: "Alex",
    age: "33",
    pet: "cat",
    city: "Kiev",
  };
  return jsonData;
}

function getDataFromJSON(jsonObject, key) {
  return jsonObject[key];
}

function getRandomDelay() {
  return Math.floor(Math.random() * 1000);
}

function printDataFromJson(key, delay) {
  return new Promise((resolve, reject) => {
    let getResult = getDataFromJSON(dataBase(), key);
    setTimeout(() => {
      if (getResult !== undefined) {
        console.log(getResult);
        console.log(`delay is ${delay}`)
        resolve(getResult);
      } else {
        reject(`Key ${key} not found`);
      }
    }, delay);
  });
}

printDataFromJson("pet", getRandomDelay())
.then(() => (printDataFromJson("age", getRandomDelay())))
.then(() => (printDataFromJson("city", getRandomDelay())))
.catch((error) => (console.log(error)));