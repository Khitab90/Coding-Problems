//Given an array of characters where each character represents a fruit tree, 
//you are given two baskets, and your goal is to put maximum number of fruits in each basket. 
//The only restriction is that each basket can have only one type of fruit.
//You can start with any tree, but you can’t skip a tree once you have started. 
//You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
//Write a function to return the maximum number of fruits in both baskets.

//The problem is similar to Longest Substring with K Distinct Characters, where K=2
//We need to find a length of the longest subarray with no more than 2 distinct characters(fruit types)
function fruits_into_baskets(fruits) {
    let windowStart = 0,
        maxLength = 0,
        fruitFrequency = {};
    
    for(let windowEnd=0; windowEnd<fruits.length; windowEnd++) {
        const rightFruit = fruits[windowEnd]
        if (!(rightFruit in fruitFrequency)) {
            fruitFrequency[rightFruit] = 0;
        }
        fruitFrequency[rightFruit] += 1;

        while(Object.keys(fruitFrequency).length>2) {
            const leftFruit = fruits[windowStart];
            fruitFrequency[leftFruit] -= 1;
            if (fruitFrequency[leftFruit] === 0) {
                delete fruitFrequency[leftFruit];
            }
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);

//Time Complexity: O(N)
//N is the number of characters in the input array
//The outer for loop runs for all characters, and the inner while loop processes each character only once; 
//therefore, the time complexity of the algorithm will be O(N+N), 
//which is asymptotically equivalent to O(N).

//Space Complexity: O(1)