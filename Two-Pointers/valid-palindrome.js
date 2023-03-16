// Write a function that takes a string s as input and checks whether it’s a palindrome or not.
function isPalindrome(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function main() {
  let testCases = [
      'RACECAR',
      'A',
      'ABCDEFGFEDCBA',
      'ABC',
      'ABCBA',
      'ABBA',
      'RACEACAR',
    ],
    i = 1;

  testCases.map((s, index) => {
    console.log('Test Case #', i);
    console.log('-'.repeat(100));
    console.log(
      `\tThe input string is '${s}' and the length of the string is ${s.length}.`
    );
    console.log('\n\tIs it a palindrome?.....', isPalindrome(s));
    console.log('-'.repeat(100));
    i++;
  });
}

main();
