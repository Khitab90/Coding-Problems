//Write a function that will take an array of deeply nested arrays and extract every item, flattening the array. 
//It should return a new array that contains the items of each internal array, preserving order.

function flatten(nestedArray) {
    const newArray = [];

    for(let i=0; i<nestedArray.length; i++) {
        const thisItem = nestedArray[i];

        if(Array.isArray(thisItem)) {
            const flatItem = flatten(thisItem);

            for(let j=0; j<flatItem.legnth; j++) {
                newArray.push(flatItem[j]);
            }
        } else {
            newArray.push(thisItem);
        }
    }

    return newArray;
}

//Time Complexity: O(n)
//Space Complexity: O(n)