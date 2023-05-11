// Suppose you have the list of weights and corresponding values for n items. 
// You have a knapsack that can carry a specific amount of weight at a time called capacity.
// You need to find the maximum profit of items using the sum of values of the items you can carry in a knapsack.
// The sum of the weights of the items should be less than or equal to the knapsack’s capacity.
// If any combination can’t make the given knapsack capacity of weights, then return 0.

function find_max_knapsack_profit(capacity, weights, values){
    let valuesLength = values.length;
    // Check if the constraints are fulfilled for the given problem
    // Check if the given capacity is not smaller than or equal to zero
    // Check if the length of values is not equal to zero, if zero we will
    // return 0
    // Check if the length of weights is not equal to the length of the values,
    // if false we will return 0
    if (capacity <= 0 || valuesLength == 0 || weights.length != valuesLength) {
        return 0;
    }
    let profits = Array(capacity + 1).fill(0);
    for (let i = 0; i < valuesLength; i++) {
        // Find the profit for each capacity starting from Cn to C0
        for (let c = capacity; c > -1; c--){
            // Check if the weight[i] is smaller than or equal to capacity
            // in range Cn - C0
            if (weights[i] <= c){
                // Calculate the profit using profit at capacity c and value[i]
                let new_profit = profits[c - weights[i]] + values[i];
                // Set profits[c] value equal to the maximum of profits[c]
                // and new calculated profit
                profits[c] = Math.max(profits[c],new_profit);
            }
        }
    }

    return profits[capacity];

}

function main(){
    let weights = [[1, 2, 3, 5], [4], [2], [3, 6, 7, 10, 2], [10, 20, 30]];
    let values = [[1, 5, 4, 8], [2], [3], [12, 10, 15, 17, 13], [22, 33, 44]];
    let capacity = [6, 3, 3, 10, 30] ;

    console.log("We have the following list of values and weights for the capacity " + capacity.toString() + ":")
    console.log('-'.repeat(30));
    console.log("Weights\t|\tValues");
    console.log('-'.repeat(30));

    for (let i = 0; i < values.length; i++){
            console.log(weights[i].toString() + "\t|\t" + values[i].toString());
        let result = find_max_knapsack_profit(capacity[i], weights, values)

        console.log("\nThe maximum profit found: " + result.toString());
    }
    
    
}

main()