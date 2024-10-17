// Given an integer array nums of size n, return the majority element of the array.
// The majority element of an array is an element that appears more than n/2 times in the array. The array is guaranteed to have a majority element.
//Simple Mathematics that I couldn't optimally solve on my own

//Time Complexity -> O(N)          Space Complexity -> O(1)
function majorityElement(nums) {
    let element = new Number()
    let count = 0

    for(let i = 0; i < nums.length; i++){
        if(count == 0){
            element = nums[i]
            count++
        }
        
        else if (nums[i] == element){
            count++
        }
        
        //nums[i] != element
        else {
            count--
        }
    }

    console.log(element)
}

const nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]
// const nums = [1, 1, 1, 2, 1, 2]
majorityElement(nums) 