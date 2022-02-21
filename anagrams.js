export default function anagrams(word) {
  let numberOfAnagrams = 0;
  for (
    let currentLetterIndex = 0;
    currentLetterIndex < word.length;
    currentLetterIndex++
  ) {
    numberOfAnagrams += anagramas(word, currentLetterIndex);
  }
  return numberOfAnagrams;
}

function anagramas(word, currentLetterIndex) {
  let numberOfAnagrams = 0;
  let ignoredQuantity = 0;
  let hasRepeated = true;

  while (hasRepeated) {
    let nextIndex = indexLetraRepetida(currentLetterIndex, word, ignoredQuantity);
    if (nextIndex !== -1) {
      if (currentLetterIndex + 1 === nextIndex) {
        //ovo
        numberOfAnagrams++;
        ignoredQuantity++;
      } else {
        numberOfAnagrams++;
        let subString = word.substring(currentLetterIndex, nextIndex + 1);
        let quantityElementsBetweenIndexes = subString.length - 2;

        if (quantityElementsBetweenIndexes % 2 !== 0) {

          let firstHalf = subString.substring(
            0,
            ((subString.length - 1) / 2) + 1
          );
          let secondHalf = subString.substring(
            (subString.length - 1) / 2,
            subString.length
          );
          let quantityIncludes = 0;

          for (let index = 0; index < firstHalf.length; index++) {
            if (secondHalf.includes(firstHalf[index])) {
              quantityIncludes++;
            } else {
              break;
            }
          }
          if (quantityIncludes === firstHalf.length) {
            numberOfAnagrams++;
          }

          ignoredQuantity++;
        }

        if (quantityElementsBetweenIndexes % 2 === 0) {
          let firstHalf2 = subString.substring(0, subString.length / 2);
          let secondHalf2 = subString.substring(
            subString.length / 2 - 1,
            subString.length
          );
          let qtdIncludes2 = 0;

          for (let index = 0; index < firstHalf2.length; index++) {
            if (secondHalf2.includes(firstHalf2[index])) {
              qtdIncludes2++;
            } else {
              break;
            }
          }
          if (qtdIncludes2 === firstHalf2.length) {
            numberOfAnagrams++;
          }

          ignoredQuantity++;
        }
      }
    } else {
      hasRepeated = false;
    }
  }
  return numberOfAnagrams;
}

function indexLetraRepetida(currentLetterIndex, word, ignoredQuantity) {
  if (ignoredQuantity === word.length - 1) {
    return -1;
  }
  if (
    !word.substring(currentLetterIndex + 1).includes(word[currentLetterIndex])
  ) {
    return -1;
  }

  let wordFromIndex = word.substring(currentLetterIndex);
  const lookingForLetter = wordFromIndex[0];

  for (let i = 1; i < wordFromIndex.length; i++) {
    if (lookingForLetter === wordFromIndex[i]) {
      if (ignoredQuantity > 0) {
        ignoredQuantity--;
      } else {
        return i + currentLetterIndex;
      }
    }
  }
  return -1;
}
