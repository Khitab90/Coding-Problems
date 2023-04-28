// Given two strings, check whether two strings are isomorphic to each other or not.  
// Two strings are isomorphic if a fixed mapping exists from the characters of one string to the characters of the other string. 
// For example, if there are two instances of the character "a"  in the first string, both these instances should be converted to another character 
// (which could also remain the same character if "a" is mapped to itself) in the second string. 
// This converted character should remain the same in both positions of the second string since there is a fixed mapping from the character "a" in the first string to the converted character in the second string.

function isIsomorphic(string1, string2) {
    // Initializing the hashmaps
    let mapStr1toStr2 = {},
        mapStr2toStr1 = {};

    for (let i = 0; i < string1.length; i++) {
        let char1 = string1[i];
        let char2 = string2[i];

        // returning false if char1 in string1 exist in hashmap and
        // the char1 has different mapping in hashmap
        if (
            mapStr1toStr2[char1] &&
            mapStr1toStr2[char1] != char2
        )
            return false;

        // returning false if char2 in string2 exist in hashmap and
        // the char2 has different mapping in hashmap
        if (
            mapStr2toStr1[char2] &&
            mapStr2toStr1[char2] != char1
        )
            return false;

        // mapping of char of one string to another and vice versa
        mapStr1toStr2[char1] = char2;
        mapStr2toStr1[char2] = char1;
    }
    return true;
}

function main() {
    let A = ["egg", "foo", "paper", "badc", "aaeaa"],
        B = ["all", "bar", "title", "baba", "uuxyy"],
        x = 1;

    for (let i = 0; i < A.length; i++) {
        console.log(x + ".\tString 1 = ", A[i]);
        console.log("\tString 2 = ", B[i]);
        console.log("\n\tIsomorphic String ?", isIsomorphic(A[i], B[i]));
        console.log("-".repeat(100));
        x = x + 1;
    }
}

main();