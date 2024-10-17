//Find Smallest number in numsay using Binary Search

function findMin(nums) {
    let low = 0
    let high = nums.length - 1
    let ans = Infinity

    while(low <= high){
        let mid = Math.floor((low + high)/2)

        if(nums[low] <= nums[mid]){
            ans = Math.min(ans, nums[low])
            low = mid + 1
        } 
        else {
            ans = Math.min(ans, nums[mid])
            high = mid - 1
        }
    }

    return ans
}

let nums = [90,-87,-78,-65,-49,-29,-28,-23,-2,7,12,14,24,40,46,55,76,77,80,83]
console.log(findMin(nums))