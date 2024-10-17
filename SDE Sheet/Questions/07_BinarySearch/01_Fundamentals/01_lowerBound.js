function lowerbound(nums, target){
    let low = 0
    let high = nums.length - 1
    let ans
    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        if(nums[mid] >= target){
            ans = mid
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }

    if(nums[ans] == target) return ans
    else return -1        //target not found in array
}