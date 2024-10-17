//Believe in the power of low

/*
Example 1
Input: nums = [1, 3, 5, 6], target = 5
Output: 2
Explanation: The target value 5 is found at index 2 in the sorted array. Hence, the function returns 2.

Example 2
Input: nums = [1, 3, 5, 6], target = 2
Output: 1
Explanation: The target value 2 is not found in the array. However, it should be inserted at index 1 to maintain the sorted order of the array.
*/


function searchInsert(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        // If the target is found, return the index
        if (nums[mid] === target) {
            return mid;
        }
        
        // If the target is less than the mid element, search in the left half
        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            // Otherwise, search in the right half
            low = mid + 1;
        }
    }

    // If the target is not found, return the insertion point
    return low;
}

let nums = [-97,-96,-90,-87,-86,-76,-73,-18,-16,8,13,18,56,58,59,62,64,74,88]
let target = -55
//Answer: It should be inserted at index 7
 
console.log(searchInsert(nums, target))