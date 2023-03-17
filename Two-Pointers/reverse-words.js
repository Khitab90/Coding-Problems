// Given a sentence, reverse the order of its words without affecting the order of letters within a given word.

function reverseWords(sentence) {
  // Replace multiple spaces with single space
  sentence = sentence.trim().replace(/ +/g, ' ');
  // Convert input string to lists of characters
  sentence = [...sentence];
  // Reverse the entire string
  let strLen = sentence.length;
  sentence = strRev(sentence, 0, strLen - 1);

  // iterate the sentence and reverse each word in place
  let start = 0,
    end = 0;

  while (true) {
    // find start index of each word by detecting spaces
    while (start < sentence.length && sentence[start] == ' ') start += 1;

    if (start == strLen) break;

    // find the end index of the word
    end = start + 1;
    while (end < strLen && sentence[end] != ' ') end += 1;

    // call helper function to reverse the word in-place
    sentence = strRev(sentence, start, end - 1);
    start = end;
  }
  return sentence.join('');
}

function strRev(str, startRev, endRev) {
  // Starting from the two ends of the list, and moving
  // in towards the centre of the string, swap the characters
  while (startRev < endRev) {
    let temp = str[startRev]; // temp store for swapping
    str[startRev] = str[endRev]; // swap step 1
    str[endRev] = temp; // swap step 2

    startRev += 1;
    endRev -= 1;
  }
  return str;
}

function main() {
  stringToReverse = [
    ' Hello World ',
    'We love JavaScript',
    'The quick brown fox jumped over the lazy dog',
    'Hey',
    'To be, or not to be',
    'AAAAA',
    ' Hello     World ',
  ];

  for (let i = 0; i < stringToReverse.length; i++) {
    console.log(i + 1 + '.\t Actual string:\t\t', stringToReverse[i]);
    console.log('\t Reversed string:\t', reverseWords(stringToReverse[i]));
    console.log('-'.repeat(100));
  }
}

main();
