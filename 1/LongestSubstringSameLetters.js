//Given a string with lowercase letters only, 
//if you are allowed to replace no more than ‘k’ letters with any letter, 
//find the length of the longest substring having the same letters after replacement.

function length_of_longest_substring(str, k) {
    let windowStart = 0,
        maxLength = 0,
        maxRepeatLetterCount = 0,
        frequencyMap = {};
    
    for (let windowEnd=0; windowEnd<str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if(!(rightChar in frequencyMap)) {
            frequencyMap[rightChar] = 0;
        }
        frequencyMap[rightChar] += 1;
        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

        // Current window size is from windowStart to windowEnd, overall we have a letter which is
        // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
        // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
        // if the remaining letters are more than 'k', it is the time to shrink the window as we
        // are not allowed to replace more than 'k' letters
        if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
            leftChar = str[windowStart];
            frequencyMap[leftChar] -= 1;
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

console.log(length_of_longest_substring('aabccbb', 2));
console.log(length_of_longest_substring('abbcb', 1));
console.log(length_of_longest_substring('abccde', 1));

//Time Complexity: O(N)
//N is number of letters in the input string

//Space Complexity: O(1)
//O(26) = O(1)