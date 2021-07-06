//Longest Substring with at most 2 distinct characters
//Given a string, find the length of the longest substring in it with at most two distinct characters.

function longest_substring_two_distinct(arr) {
    let windowStart = 0,
        maxLength = 0,
        charFrequency = {};
    
    for(let windowEnd=0; windowEnd<arr.length; windowEnd++) {
        const rightChar = arr[windowEnd];
        if (!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar] += 1;

        while(Object.keys(charFrequency).length>2) {
            const leftChar = arr[windowStart];
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

console.log(`Longest substring: ${longest_substring_two_distinct(['A', 'B', 'C', 'A', 'C'])}`);
console.log(`Longest substring: ${longest_substring_two_distinct(['A', 'B', 'C', 'B', 'B', 'C'])}`);


//Time Complexity: O(N)
//N is the number of characters in the input array
//The outer for loop runs for all characters, and the inner while loop processes each character only once; 
//therefore, the time complexity of the algorithm will be O(N+N), 
//which is asymptotically equivalent to O(N).

//Space Complexity: O(1)