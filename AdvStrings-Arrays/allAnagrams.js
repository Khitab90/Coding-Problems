//Write a function that takes in an array of strings. 
//Return true if all strings are anagrams of one another and false if even a single string is not an anagram of the others.

function getCharCount(str) {
    const charCount = {};

    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if(charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }
    
    return charCount;
}

function allAnagrams(strings) {
    if(strings.length === 0) {
        return true;
    }
    
    for(let i = 1; i < strings.length; i++) {
        if(strings[i].length !== strings[0].length) {
            return false;
        }
    }
    
    const firstCharCount = getCharCount(strings[0]);

    for(let i = 1; i < strings.length; i++) {
        const thisCharCount = getCharCount(strings[i]);
        
        for(const char in thisCharCount) {
            if(thisCharCount[char] !== firstCharCount[char]) {
                return false;
            }
        }
    }
    
    return true;
}

//Time Complexity: O(a * s)
//a = length of the array, s = length of the strings
//Space Compelxity: O(s)