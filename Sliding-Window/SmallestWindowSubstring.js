//Problem Challenge 3: Smallest Window containing Substring
//Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

function find_substring(str, pattern) {
    let windowStart = 0,
      matched = 0,
      substrStart = 0,
      minLength = str.length + 1,
      charFrequency = {};
  
    for (i = 0; i < pattern.length; i++) {
      const chr = pattern[i];
      if (!(chr in charFrequency)) {
        charFrequency[chr] = 0;
      }
      charFrequency[chr] += 1;
    }
  
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
        charFrequency[rightChar] -= 1;
        if (charFrequency[rightChar] >= 0) { // Count every matching of a character
          matched += 1;
        }
      }
  
      while (matched === pattern.length) {
        if (minLength > windowEnd - windowStart + 1) {
          minLength = windowEnd - windowStart + 1;
          substrStart = windowStart;
        }
  
        const leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in charFrequency) {
          //We could have redundant matching characters,
          //decrement the matched count when useful occurence of matched char goes out. 
          if (charFrequency[leftChar] === 0) {
            matched -= 1;
          }
          charFrequency[leftChar] += 1;
        }
      }
    }
  
    if (minLength > str.length) {
      return '';
    }
    return str.substring(substrStart, substrStart + minLength);
}
  
  
console.log(find_substring('aabdec', 'abc'));
console.log(find_substring('abdbca', 'abc'));
console.log(find_substring('adcad', 'abc'));

//Time Complexity: O(N + M)
//N: Number of characters in the input string 
//M: Number of characters in the pattern.

//Space Complexity: O(M)
//worse cawe: whole pattern will go in the HashMap.
//O(M + N: worse case => we also need O(N) for the resulting substring,
//which will happen when the input string is a permutation of the pattern. 