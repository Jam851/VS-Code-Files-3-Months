function upperbound(nums, target){
    let low = 0
    let high = nums.length - 1
    let ans
    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        if(nums[mid] > target){
            high = mid - 1
        }
        else {
            ans = mid
            low = mid + 1
        }
    }

    if(nums[ans] == target) return ans
    else return -1        //target not found in array
}

