// Given an array of integers, nums, and an integer value, target, determine if there are any three integers in nums whose sum equals the target.
// Return TRUE if three such integers are found in the array. Otherwise, return FALSE.
function findSumOfThree(nums, target) {
  // Sorting the input list
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length - 2; i++) {
    // Set the indexes of the two pointers
    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      // Check if the sum of the triple is equal to the sum
      let triple = nums[i] + nums[low] + nums[high];

      // Found a triple whose sum equals the target
      if (triple == target) {
        return true;
      }

      // Move low pointer forward if the triple sum is less than the required sum
      else if (triple < target) low++;
      // Move the high pointer backwards if the triple sum is greater than the required sum
      else high--;
    }
  }
  return false;
}

function main() {
  let numsLists = [
    [3, 7, 1, 2, 8, 4, 5],
    [-1, 2, 1, -4, 5, -3],
    [2, 3, 4, 1, 7, 9],
    [1, -1, 0],
    [2, 4, 2, 7, 6, 3, 1],
  ];

  let testLists = [
    [10, 20, 21],
    [-8, 0, 7],
    [8, 10, 20],
    [1, -1, 0],
    [8, 11, 15],
  ];

  numsLists.map((numList, i) => {
    console.log(i + 1 + '.\tInput array:', numsLists[i]);
    testLists[i].map((testList, j) => {
      if (findSumOfThree(numsLists[i], testLists[i][j]))
        console.log('\tSum for', testLists[i][j], 'exists');
      else console.log('\tSum for', testLists[i][j], 'does not exist');
    });
    console.log('-'.repeat(100));
  });
}

main();
