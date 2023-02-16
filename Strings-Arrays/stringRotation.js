//Create a function that takes in 2 strings as parameters.
//Return true if the strings are rotations of each other. Otherwise, return false.

function stringRotation(str1, str2) {
    return str1.length === str2.length && (str1 + str1).includes(str2);
}

//Time and Space Complexity: O(n)