/*
Given an integer array nums, sorted in ascending order (with distinct values) and a target value k. 
The array is rotated at some pivot point that is unknown. Find the index at which k is present and if k is not present return -1.

Example 1 ->
nums = [4, 5, 6, 7, 0, 1, 2]
k = 0
Output = 4

Example 2 ->
nums = [3,1,2,3,3,3,3]
k = 1
Output = 1
*/

function search(nums, k) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Check if mid points to the target
        if (nums[mid] === k){
            return mid
        }
        
        // If Duplicates are present in the array
        if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
            low = low + 1;
            high = high - 1;
            continue;
        }

        // Check if the left part is sorted
        if (nums[low] <= nums[mid]){
            // Target exists in the left sorted part
            if(nums[low] <= k && k <= nums[mid]){
                high = mid - 1;   
            } 
            else {
                // Target does not exist in the left sorted part
                low = mid + 1
            }
        } 
        // Check if the right part is sorted
        else {
            if(nums[mid] <= k && k <= nums[high]){
                low = mid + 1;
            }
            else {
                high = mid - 1
            }
        }
    }

    // If target is not found
    return -1
}

let nums = [-55,-54,-31,-13,2,79,85,97,99,-98,-97,-84,-59]
let k = -31

console.log(search(nums, k))