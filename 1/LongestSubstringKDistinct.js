//Given a string, find the length of the longest substring in it 
//with no more than K distinct characters.
//You can assume that K is less than or equal to the length of the given string.

function longest_substring_with_k_distinct(str, k) {
    let windowStart = 0,
        maxLength = 0,
        charFrequency = {};
    
    //insert characters from the beginning of the string untill
    //we have K distinct characters. 
    for (let windowEnd=0; windowEnd<str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if(!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar] += 1;

        //Shrink the window from beginning if count > K
        //Shrink until no more than K distinct characters.
        //This is for finding the longest window. 
        while(Object.keys(charFrequency).length > k) {
            const leftChar = str[windowStart];
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);

//Time Complexity: O(N)
//N is the number of characters in the input string. 
//The outer for loop runs for all characters,
//and the inner while loop processes each character only once;
//therefore, the time complexity of the algorithm will be O(N+N), 
//which is asymptotically equivalent to O(N)O(N).

//Space Complexity: O(K)
//We will be storing maximum of K+1 characters in HashMap.