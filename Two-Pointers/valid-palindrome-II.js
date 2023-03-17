//
function isPalindromeByRemovingOneChar(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] == s[right]) {
      left++;
      right--;
    }
    if (s[left] !== s[right]) {
      const checkLeft = isPalindrome(s, left + 1, right);
      const checkRight = isPalindrome(s, left, right - 1);
      return checkLeft || checkRight;
    }
    left++;
    right--;
  }
  return true;
}

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

function main() {
  let testCases = [
      'madame',
      'abca',
      'tebbem',
      'eeccccbebaeeabebccceea',
      'ognfjhgbjhzkqhzadmgqbwqsktzqwjexqvzjsopolnmvnymbbzoofzbbmynvmnloposjzvqxejwqztksqwbqgmdazhqkzhjbghjfno',
      'RACEACAR',
    ],
    i = 1;

  testCases.map((s, index) => {
    console.log('Test Case #', i);
    console.log('-'.repeat(100));
    console.log(
      `\tThe input string is '${s}' and the length of the string is ${s.length}.`
    );
    console.log(
      '\n\tIs it a palindrome or will it be by removing at most 1 character?.....',
      isPalindromeByRemovingOneChar(s)
    );
    console.log('-'.repeat(100));
    i++;
  });
}

main();
