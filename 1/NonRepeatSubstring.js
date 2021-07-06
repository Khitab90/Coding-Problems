//Given a string, find the length of the longest substring, which has no repeating characters.

function non_repeat_substring(str) {
    let windowStart = 0,
        maxLength = 0,
        charIndexMap = {};
    
    
    for (let windowEnd=0; windowEnd<str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        //If map already contains 'rightChar', shrink the window. 
        //So that we have only one occurence. 
        if(rightChar in charIndexMap) {
            //in the current window, we will not have any 'rightChar' after its previous index
            // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        charIndexMap[rightChar] = windowEnd;

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);

//Time Complexity: O(N)
//N is the number of characters in the input string.

//Space Complexity: O(K)
//where K is the number of distinct characters in the input string.
//K <= N
//Fixed set of characters in input string => 26 for english letters
//Algorithm runs in fixed space: O(1)
//Fixed size array can be used instead of HashMap.