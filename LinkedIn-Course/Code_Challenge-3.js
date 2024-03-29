/**
 * Calculate taxes and totals

    You are given an almost completed setup to calculate taxes and totals for a store in British Columbia, Canada. There are two taxes, GST and PST, and both need to be applied independently to the before-tax total to get the final price.

    Your task: Complete the calculateTotal() function by adding GST, PST, and sun properties to the totals object and performing the necessary math to get the right numbers in each property. You can see how these properties are displayed in the showTotals function below.

    Parameters
    prices: A random array of prices, defined in the test code.

    Result
    string: A text display of the Before tax price, GST and PST values, and the Sum total.
 */

const taxGST = 5;
const taxPST = 8;
const calculateTotal = (prices) => {
    const totals = {};
    // Add together all values from the prices array
    totals.beforeTax = prices.reduce((a,b) => a + b, 0);
    totals.GST = 0;
    totals.PST = 0;
    // Your code starts here
    prices.forEach((value, index) => {
        if (value>0){
            totals.GST = totals.GST + (value * (taxGST/100));
            totals.PST = totals.PST + (value * (taxPST/100));
        }
    });

    totals.sum = totals.GST + totals.PST + totals.beforeTax;
    // Your code ends here
    
    return totals;
}

const showTotals = (prices) => {
    const totals = calculateTotal(prices);
    return `
        Before tax: $${totals.beforeTax.toFixed(2)}
        GST: $${totals.GST.toFixed(2)}
        PST: $${totals.PST.toFixed(2)}
        -----------------
        Sum total: $${totals.sum.toFixed(2)}
    `
}
