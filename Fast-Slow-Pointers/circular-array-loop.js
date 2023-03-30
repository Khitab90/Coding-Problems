/* An input array containing non-zero integers is given, where the value at each index represents the number of places to skip forward (if the value is positive) or backward (if the value is negative). 
When skipping forward or backward, wrap around if you reach either end of the array. For this reason, we are calling it a circular array. 
Determine if this circular array has a cycle. A cycle is a sequence of indices in the circular array characterized by the following:

The same set of indices is repeated when the sequence is traversed in accordance with the aforementioned rules.
The length of the sequence is at least two.
The loop must be in a single direction, forward or backward. */

function circularArrayLoop(arr) {
    let currentDirection, fastPtr, slowPtr;
    currentDirection = null;

    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) == arr.length) {
            continue;
        }
        if (arr[i] >= 0) {
            currentDirection = true;
        } else {
            currentDirection = false;
        }
        slowPtr = i;
        fastPtr = i;

        console.log("\n\t\tInitially slow pointer =", slowPtr, "Fast pointer =", fastPtr);
        console.log("\t\tStarting from value =", arr[i], "\n");

        // We can't find the loop for that number when any pointer equals to -1
        while (slowPtr != fastPtr || slowPtr != -1 || fastPtr != -1) {
            slowPtr = nextStep(arr, slowPtr, currentDirection);
            if (slowPtr == -1)
                break;

            fastPtr = nextStep(arr, fastPtr, currentDirection);

            console.log("\t\tSlow pointer =", slowPtr);
            console.log("\t\tFast pointer after first-step =", fastPtr);
            if (fastPtr !== -1) {
                fastPtr = nextStep(arr, fastPtr, currentDirection);
                console.log("\t\tFast pointer after second-step =", fastPtr);
            }

            if (fastPtr == -1 || slowPtr == fastPtr) {
                break;
            }
        }
        if (slowPtr == fastPtr && slowPtr != -1) {
            return true;
        }
    }
    return false;
}

function nextStep(arr, currentIndex, currentDirection) {
    let nextDirection = arr[currentIndex] >= 0 ? true : false;
    if (nextDirection !== currentDirection) return -1;

    let nextIndex = (arr[currentIndex] + currentIndex) % arr.length;

    if (nextIndex < 0) nextIndex = nextIndex + arr.length;

    if (nextIndex == currentIndex) return -1;
    return nextIndex;
}

function main() {
    let input = [
        [-2, -3, -9],
        [-5, -4, -3, -2, -1],
        [-1, -2, -3, -4, -5],
        [2, 1, -1, -2],
        [-1, -2, -3, -4, -5, 6],
        [1, 2, -3, 3, 4, 7, 1]
    ];
    let num = 1;

    for (let i = 0; i < input.length; i++) {
        console.log(num + ".\tCircular array =", input[i], "\n");
        console.log("\t\tProcessing:");
        console.log("\n\tFound loop =", circularArrayLoop(input[i]));
        console.log("-".repeat(100), "\n");
        num += 1;
    }
}

main();