/* 

Given a string, palString, consisting of lowercase or uppercase letters, 
return the length of the longest palindrome that can be built with those letters.

Create a hash map to store the frequency of each character in the input string.
Loop through the hash map and check if the frequency of each character is even or odd.
If the frequency is even, add it to the length of the longest palindrome.
If the frequency is odd, add the frequency minus one to the length of the longest palindrome and set a flag to indicate that there is an odd frequency character.
If there is at least one odd frequency character, add one to the length of the longest palindrome.
Return the length of the longest palindrome.
Based on the hints above, you can modify the code as follows:

*/

export function longestPalindrome(palString) {
    let map = {};
    let palLongest = 0;
    let oddFlag = false;

    // Create a hash map to store the frequency of each character in the input string.
    for(let i=0; i<palString.length; i++) {
        if(map[palString[i]] == undefined) {
            map[palString[i]] = 1;
        } else map[palString[i]] += 1;
    }

    // Loop through the hash map and check if the frequency of each character is even or odd.
    for (let key in map) {
        if(map[key] % 2 == 0) {
            // If the frequency is even, add it to the length of the longest palindrome.
            palLongest += map[key];
        } else {
            // If the frequency is odd, add the frequency minus one to the length of the longest palindrome and set a flag to indicate that there is an odd frequency character.
            palLongest += map[key] - 1;
            oddFlag = true;
        }
    }

    // If there is at least one odd frequency character, add one to the length of the longest palindrome.
    if(oddFlag == true) {
        palLongest += 1;
    }

    // Return the length of the longest palindrome.
    return palLongest;
}

// "sfbaisdugfiubasdjFSDIBJS"
// "dfssdnojfnaosbdf"
// "GOODMORNINGTOYOU"
// "asfewgfweoifhsdb"
// "thisREALLYisaGOODbook"

function main() {
    let testCases = ["sfbaisdugfiubasdjFSDIBJS", "dfssdnojfnaosbdf", "GOODMORNINGTOYOU", "asfewgfweoifhsdb", "thisREALLYisaGOODbook"],
        x = 1;

    for (let i = 0; i < testCases.length; i++) {
        console.log(x + ".\tString = ", testCases[i]);
        console.log("\n\tLongest Palindrome: ", longestPalindrome(testCases[i]));
        console.log("-".repeat(100));
        x = x + 1;
    }
}

main();