const isVowels = function (letter) {
  switch (letter) {
    case 'a':
      return true;
    case 'e':
      return true;
    case 'i':
      return true;
    case 'o':
      return true;
    case 'u':
      return true;
    default:
      return false;
  }
}

const countConsonants = function (word) {
  let count = 0;

  for (let index = 0; index < word.length; index++) {
    if (!isVowels(word[index])) {
      count++;
    }
  }
  return count;
}

const testCountConsonants = function (string, expectedCount, message) {
  let mark = "✓"
  if (countConsonants(string) !== expectedCount) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const countConsonantsTests = function () {
  testCountConsonants("n", 1, "Single consonants n");
  testCountConsonants("j", 1, "Single consonants j");
  testCountConsonants("sat", 2, "Two consonants and a vowel");
  testCountConsonants("hello", 3, "More than two consonants");
}

countConsonantsTests();