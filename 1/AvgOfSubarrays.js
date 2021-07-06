//Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

function find_average_of_subarrays(K, arr) {
    const result = [];
    let windowSum = 0.0,
        windowStart = 0;

    for (let windowEnd=0; windowEnd<arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if(windowEnd >= K-1) {
            result.push(windowSum/K);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return result;
}

//find_average_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
const result = find_average_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);