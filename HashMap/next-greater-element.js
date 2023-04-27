// Find the next greater element from two distinct integer array. nums1 array is subset of array nums2.

function nextGreaterElement(nums1, nums2) {
    let nums1Indexed = {}; // Initializing the hash map
    for (let i = 0; i < nums1.length; i++) {
        let n = nums1[i];
        nums1Indexed[n] = i;
    }
    let ans = Array(nums1.length).fill(-1);

    for (let i = 0; i < nums2.length; i++) {
        let index = nums1Indexed[nums2[i]];
        if (index == undefined)
            // If the value doesn't show up in the nums, we
            // go to the next element
            continue;

        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[j] > nums2[i]) {
                ans[index] = nums2[j];
                break;
            }
        }
    }
    return ans;
}

function main() {
    let A = [[2, 4], [3, 2, 5], [14, 45, 52], [1, 3, 2], [4, 2], [0]],
        B = [
            [1, 2, 3, 4],
            [2, 3, 5, 1],
            [52, 14, 45, 65],
            [1, 3, 2, 4, 5],
            [1, 2, 4, 3],
            [0],
        ],
        x = 1;

    for (let i = 0; i < A.length; i++) {
        console.log(x + ".\tNums 1 =", A[i]);
        console.log("\tNums 2 =", B[i]);
        console.log(
            "\n\tThe Next Greater Element Array =",
            nextGreaterElement(A[i], B[i])
        );
        console.log("-".repeat(100));
        x += 1;
    }
}

main();