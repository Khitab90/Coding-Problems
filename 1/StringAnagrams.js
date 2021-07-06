//Problem Challenge 2: String Anagrams
//Given a string and a pattern, find all anagrams of the pattern in the given string.
//Write a function to return a list of starting indices of the anagrams of the pattern inthe given string.

function find_string_anagrams(str, pattern) {
    let windowStart = 0,
        matched = 0,
        charFrequency = {};

    for (i=0; i<pattern.length; i++) {
        const chr = pattern[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    const resultIndices = [];
    //Goal: Match all the characters from the charFrequency with the current window.
    for (windowEnd=0; windowEnd<str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency){
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }

        if (matched === Object.keys(charFrequency).length) {
            resultIndices.push(windowStart);
        }

        if (windowEnd >= pattern.length-1) {
            leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1; //decrement the matched count before putting the character back
                }
                charFrequency[leftChar] += 1;
            }
        }
    }
    return resultIndices;
}

console.log(find_string_anagrams('ppqp', 'pq'));
console.log(find_string_anagrams('abbcabc', 'abc'));

//Time Complexity: O(N + M)
//N: Number of chars in input string
//M: Number of chars in pattern

//Space Complexity: O(M)
//worse case: M distinct chars in given pattern that goes into the HashMap.