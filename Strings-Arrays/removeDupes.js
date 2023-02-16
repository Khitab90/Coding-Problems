function removeDupes(str) {
    const characters = {};
    const uniqueCharacters = [];

    for(let i=0; i<str.length; i++) {
        const thisChar = str[i];

        if(!characters[thisChar]) {
            characters[thisChar] = true;
            uniqueCharacters.push(thisChar);
        }
    }

    return uniqueCharacters.join('');
}

function removeDupes2(str) {
    const uniqueCharacters = new Set(str);
    return Array.from(uniqueCharacters).join('');
}

//Time and Space Complexity: O(n)