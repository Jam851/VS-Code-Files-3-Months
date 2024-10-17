// Function to find maximum product subarray
/*
Example 1 ->
Input: nums = [4, 5, 3, 7, 1, 2]
Output: 840
Explanation: The largest product is given by the whole array itself

Example 2 ->
Input: nums = [-5, 0, -2]
Output: 0
Explanation: The largest product is achieved with the following subarrays [0], [-5, 0], [0, -2], [-5, 0, 2].

Example 3 ->
Input: nums = [1, -2, 3, 4, -4, -3]
Output:
144
*/

function maxProduct(nums) {
    /* Initialize variables to track current max
    product, min product, and overall result*/
    let prod1 = nums[0];
    let prod2 = nums[0];
    let result = nums[0];
    
    /* Iterate through the array
    starting from the second element*/
    for (let i = 1; i < nums.length; i++) {
        
        /* Calculate the maximum product
        ending at the current index*/
        let temp = Math.max(nums[i], prod1 * nums[i], prod2 * nums[i]);
        
        /* Calculate the minimum product
        ending at the current index*/
        prod2 = Math.min(nums[i], prod1 * nums[i], prod2 * nums[i]);
        
        // Update the maximum product found so far
        prod1 = temp;
        
        /* Update the overall result with 
        the maximum product found so far*/
        result = Math.max(result, prod1);
    }
    
    // Return the maximum product subarray found
    return result;
}

const nums = [4, 5, 3, 7, 1, 2]
console.log(maxProduct(nums))