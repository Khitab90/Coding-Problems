//Given an array of positive numbers and a positive number ‘S,’ 
//find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
//Return 0 if no such subarray exists.

function smallest_subarray_with_given_sum(s, arr) {
    let windowSum = 0,
        windowStart = 0,
        minLength = Infinity;

    for (windowEnd=0; windowEnd<arr.length; windowEnd++) {
        windowSum += windowEnd;

        while(windowSum >= s) {
            minLength = Math.min(minLength, windowEnd-windowStart+1);
            windowSum -= windowStart;
            windowStart += 1;
        }
    }

    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
}

console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);

//Time Complexity: O(N)
//The outer for loop runs for all elements, 
//and the inner while loop processes each element only once; 
//therefore, the time complexity of the algorithm will be O(N+N), 
//which is asymptotically equivalent to O(N).

//Space Complexity: O(1)