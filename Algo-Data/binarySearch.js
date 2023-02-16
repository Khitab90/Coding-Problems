//Write a function that accepts a sorted array of integers and a number. Return the index of that number if present.

function binarySearch(numbers, target) {
    let startIndex = 0;
    let endIndex = numbers.length - 1;

    if(target < numbers[startIndex] || target > numbers[endIndex]) {
        return -1;
    }
    
    while(true) {
        if(numbers[startIndex] === target) {
            return startIndex;
        }
        
        if(numbers[endIndex] === target) {
            return endIndex;
        }
        
        if(endIndex - startIndex <= 1) {
            // indicates the number isn't present
            return -1;
        }
        
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        
        if(target > numbers[middleIndex]) {
            startIndex = middleIndex + 1;
        } else if(target < numbers[middleIndex]) {
            endIndex = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }
}

//Time Complexity: O(logn)
//Space Complexity: O(1)