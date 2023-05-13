// You’re given an integer total and a list of integers called coins. The variable coins hold a list of coin denominations, and total is the total amount of money.
// You have to find the minimum number of coins that can make up the total amount by using any combination of the coins. 
// If the amount can’t be made up, return -1. If the total amount is 0, return 0.

function calculateMinimumCoins(coins, rem, counter) {
    if (rem < 0) {
        return -1;
    }
    if (rem == 0) {
        return 0;
    }
    if (counter[rem - 1] != parseFloat(Number.MAX_VALUE)) {
        return counter[rem - 1];
    }

    let minimum = parseFloat(Number.MAX_VALUE);

    coins.forEach(function (e) {
        let result = calculateMinimumCoins(coins, rem - e, counter);
        if (result >= 0 && result < minimum) {
            minimum = 1 + result;
        }
    });

    if (minimum != parseFloat(Number.MAX_VALUE)) {
        counter[rem - 1] = minimum;
    } else {
        counter[rem - 1] = -1;
    }

    return counter[rem - 1];
}


function coinChange(coins, total) {
    if (total < 1) {
        return 0;
    }

    return calculateMinimumCoins(coins, total, Array(total).fill(parseFloat(Number.MAX_VALUE)));
}

function main(){
    let coins = [[1, 3, 4, 5], [1, 4, 6, 9], [6, 7, 8], [1, 2, 3, 4, 5], [14, 15, 18, 20]];
    let total = [7, 11, 27, 41, 52];

    for (let i = 0; i < total.length; i++) {
        console.log((i + 1).toString() + ".\tThe minimum number of coins required to find " + total[i].toString() +
            " from", coins[i], "is " + (coinChange(coins[i], total[i])).toString())
        console.log('-'.repeat(100));
    }
}

main()