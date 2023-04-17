const VOCALS = "aáeéiíoóuú";
const CONSONANTS = "bcdfghjklmnpqrstvwxyz";

const consonantNumber = (text) => {
  let consonants = 0;
  for (const letter of text) {
    if (CONSONANTS.includes(letter.toLowerCase())) {
      consonants++;
    }
  }
  return consonants;
};

const vocalsNumber = (text) => {
  let vocals = 0;
  for (const letter of text) {
    if (VOCALS.includes(letter.toLowerCase())) {
      vocals++;
    }
  }
  return vocals;
};

const numberOfCaracters = (textPlain) => {
  return textPlain.length;
};

const numberOfSpaces = (textPlain) => {
  return textPlain.split("").filter((val) => val === " ").length;
};

const mostRepeatedWord = (textPlain) => {
  const arrayWords = textPlain.split(" ");
  const objectWords = {};
  for (const word of arrayWords) {
    if (!objectWords[word]) objectWords[word] = 1;
    else objectWords[word]++;
  }
  let repeated = 0;
  let word = "";
  for (const key of Object.keys(objectWords)) {
    if (objectWords[key] > repeated) {
      word = key;
      repeated = objectWords[key];
    }
  }
  return { word, repeated };
};

module.exports = {
  vocalsNumber,
  consonantNumber,
  numberOfCaracters,
  numberOfSpaces,
  mostRepeatedWord,
};
