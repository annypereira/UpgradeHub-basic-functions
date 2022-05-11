// Crea una función que nos devuelva el número de veces que se repite cada
// una de las palabras que lo conforma.

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(param) {
  const wordCounter = {};

  for (const word of param) {
    if (wordCounter.hasOwnProperty(word)) {
      wordCounter[word]++;
    } else {
      wordCounter[word] = 1;
    }
  }
  
  return wordCounter;
}

const finalArray = repeatCounter(counterWords);
console.log(finalArray);
