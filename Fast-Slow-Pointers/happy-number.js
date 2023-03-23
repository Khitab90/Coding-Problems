// Write an algorithm to determine if a nunber n is happy.
function isHappyNumber(n) {
  // Helper function that calculates the sum of digits.
  function sumDigits(number) {
    let totalSum = 0;
    while (number > 0) {
      let temp = Math.floor(number / 10),
        digit = number % 10;
      number = temp;
      totalSum += digit ** 2;
    }
    return totalSum;
  }

  let slowPointer = n;
  let fastPointer = sumDigits(n);

  while (fastPointer !== 1 && slowPointer !== fastPointer) {
    slowPointer = sumDigits(slowPointer);
    fastPointer = sumDigits(sumDigits(fastPointer));
  }

  if (fastPointer == 1) {
    return true;
  }
  return false;
}

// Driver code
function main() {
  inputs = [1, 5, 19, 25, 7];
  for (var i = 0; i < inputs.length; i++) {
    console.log(i + 1 + ".\tInput Number:", inputs[i])

    var result = (isHappyNumber(inputs[i])) ? "True" : "False"

    console.log("\n\tIs it a happy number?", result)
    console.log("-".repeat(100));
  }
}

main();