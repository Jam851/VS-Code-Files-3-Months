//Given an array nums sorted in non-decreasing order. Every number in the array except one appears twice. Find the single number in the array.

//Easy to Understand Step by Step 
//ANSWER-I

function singleNonDuplicate(nums) {
    let low = 0;
    let high = nums.length - 1;
    
    //Handilng Edge Cases for First & Last Element
    if(nums[low] != nums[low + 1]){
        return nums[low]
    }
    if(nums[high] != nums[high - 1]){
        return nums[high]
    }

    low = low + 1
    high = high - 1
    //For any other number in between
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        //Even
        if ((mid % 2) == 0) {
            //Check Front Number, if equal then search on the right side
            if(nums[mid] == nums[mid + 1]){
                low = mid + 2
                continue
            }
            //else search on the left side for source of change
            else if(nums[mid] == nums[mid - 1]){
                high = mid - 2
                continue
            }
            //return the single number
            else{
                return nums[mid]
            }
        }
        //Odd
        else {
            //Check Previous Number, if equal then search on the right side
            if(nums[mid] == nums[mid - 1]){
                low = mid + 1
                continue
            }
            //else search on the left side for source of change
            else if(nums[mid] == nums[mid + 1]){
                high = mid - 1
                continue
            }
            //return the single number
            else{
                return nums[mid]
            }
        }
        }
        
        //Dummy return statement, should never reach here
        return -1
        }
        
let nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]
console.log(singleNonDuplicate(nums))



/*
//Difficult because of the mathematics involved in how an array formed of all duplicates in couples with one single number is formed in sorted fashion.
//ANSWER-II
function singleNonDuplicate(nums) {
    let n = nums.length; // Size of the array.

    // Edge cases:
    if (n === 1) return nums[0];
    if (nums[0] !== nums[1]) return nums[0];
    if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If nums[mid] is the single element:
        if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
            return nums[mid];
        }

        // We are in the left part:
        if ((mid % 2 === 1 && nums[mid] === nums[mid - 1])
            || (mid % 2 === 0 && nums[mid] === nums[mid + 1])) {
            // Eliminate the left half:
            low = mid + 1;
        }
        // We are in the right part:
        else {
            // Eliminate the right half:
            high = mid - 1;
        }
    }

    // Dummy return statement:
    return -1;
}
*/