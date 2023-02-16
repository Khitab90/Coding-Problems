//Create a function that determines whether all characters in a string are unique or not. Make it case-sensitive.

function isUnique(str) {
    const chars = new Set();

    for (let i=0; i < str.length; i++) {
        const thisChar = str[i];

        if(chars.has(thisChar)) {
            return false;
        }

        chars.add(thisChar);
    }

    return true;
}

console.log(`Is it unique: ${isUnique('abcdef')}`);
console.log(`Is it unique: ${isUnique('abcaef')}`);
console.log(`Is it unique: ${isUnique(['a', 'b', 'a'])}`);

//Time Complexity: O(n)
//Space Complexity: O(n)