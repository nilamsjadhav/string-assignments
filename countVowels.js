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

const countVowels = function (word) {
  let count = 0;

  for (let index = 0; index < word.length; index++) {
    if (isVowels(word[index])) {
      count++;
    }
  }
  return count;
}

const testCountVowels = function (string, expectedCount, message) {
  let mark = "✓"
  if (countVowels(string) !== expectedCount) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const countVowelsTests = function () {
  testCountVowels("a", 1, "Single vowel a");
  testCountVowels("e", 1, "Single vowel e");
  testCountVowels("aa", 2, "Single repeated vowel");
  testCountVowels("ae", 2, "two vowels");
}

countVowelsTests();