// Function to find maximum sum of subarrays
//The way 'sum' is treated here so delicately needs to be seen

function maxSubArray(nums) {

    // maximum sum
    let maxi = -Infinity; 

    // current sum of subarray
    let sum = 0; 
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        
        // Add current element to the sum
        sum += nums[i]; 
        
        // Update maxi if current sum is greater
        if (sum > maxi) {
            maxi = sum; 
        }
        
        // Reset sum to 0 if it becomes negative
        if (sum < 0) {
            sum = 0; 
        }
    }
    
    // Return the maximum subarray sum found
    console.log(maxi);
}

const nums = [2, 3, 5, -2, 7, -4]
maxSubArray(nums)