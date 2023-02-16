//Suppose we could access yesterday’s prices for a certain stock as a chronological list. 
//Write a function that takes the list and returns the highest profit possible from one purchase and one sale of the stock yesterday.

function getMaxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];
        minPrice = Math.min(minPrice, currentPrice);
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }
    
    return maxProfit;
}

//Time Complexity: O(n)
//Space Complexity: O(1)