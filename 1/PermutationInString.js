//Problem Challenge 1: Permutation in a String
//Given a string and a pattern, find out if the string contains any permutation of the pattern.

function find_permutation(str, pattern) {
    let windowStart = 0,
      matched = 0,
      charFrequency = {};
  
    for (i = 0; i < pattern.length; i++) {
      const chr = pattern[i];
      if (!(chr in charFrequency)) {
        charFrequency[chr] = 0;
      }
      charFrequency[chr] += 1;
    }
  
    // Goal: Match all the characters from the 'charFrequency' with the current window
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
        // Decrement the frequency of matched character
        charFrequency[rightChar] -= 1;
        if (charFrequency[rightChar] === 0) {
          matched += 1;
        }
      }
  
      if (matched === Object.keys(charFrequency).length) {
        return true;
      }
  
      if (windowEnd >= pattern.length - 1) {
        leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in charFrequency) {
          if (charFrequency[leftChar] === 0) {
            matched -= 1;
          }
          charFrequency[leftChar] += 1;
        }
      }
    }
    return false;
  }

console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);

//Time Complexity: O(N + M)
//N: number of characters in the input string
//M: number of characters in the pattern

//Space Complexity: O(M)
//Whole pattern can have distinct characters that will go into the HashMap