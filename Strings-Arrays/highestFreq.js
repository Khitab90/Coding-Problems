//Write a function that takes an array of strings and returns the most commonly occurring string in that array.

function highestFreq(strings) {
    const frequencies = {};
    let maxFreq = 0;
    let mostFrequencyString = strings[0];

    for(let i=0; i<strings.length; i++) {
        const thisStr = strings[i];

        if(frequencies[thisStr] === undefined) {
            frequencies[thisStr] = 1;
        } else {
            frequencies[thisStr]++;
        }

        if(frequencies[thisStr] > maxFreq) {
            maxFreq = frequencies[thisStr];
            mostFrequencyString = thisStr;
        }
    }

    return mostFrequencyString;
}

//Time and Space Complexity: O(n)