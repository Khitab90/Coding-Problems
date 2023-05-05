// Given a string consisting a lowercase English letters, repeatedly remove adjacent duplicate letters, 
// one pair at a time. Both members of a pair of adjacent duplicate letters need to be removed.

function removeDuplicates(toCleanUp) {
    let frequencyStack = [],
        k = 2;

    // We will iterate over toCleanUp string
    // and will append and pop the elements according to algorithm
    for (let i = 0; i < toCleanUp.length; i++) {
        // if the top of the frequencyStack has the same character
        if (
            frequencyStack.length &&
            frequencyStack[frequencyStack.length - 1][0] == toCleanUp[i]
        ) {
            frequencyStack[frequencyStack.length - 1][1]++;

            if (frequencyStack[frequencyStack.length - 1][1] == k) {
                // Popping out the duplicate character
                frequencyStack.pop();
            }
        } else {
            // Appending the element
            frequencyStack.push([toCleanUp[i], 1]);
        }
    }
    
    let result = "";
    frequencyStack.forEach((element) => {
        let char = element[0];
        let count = element[1];
        result += char.repeat(count);
    });

    return result;
}

function main() {
    let inputs = [
        "g",
        "ggaabcdeb",
        "abbddaccaaabcd",
        "aabbccdd",
        "aannkwwwkkkwna",
        "abbabccblkklu",
    ];
    for (let i = 0; i < inputs.length; i++) {
        console.log(i + 1 + `.\tRemove duplicates from string: '${inputs[i]}'`);
        let resultingString = removeDuplicates(inputs[i]);
        console.log("\tString after removing duplicates:", resultingString);
        console.log("-".repeat(100));
    }
}

main();