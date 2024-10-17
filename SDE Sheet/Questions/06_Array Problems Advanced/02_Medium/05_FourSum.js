function fourSum(nums, target) {
    let ans = new Array()
    nums.sort((a, b) => a - b)

    for(let i = 0; i < nums.length - 3; i++){
        if(nums[i] == nums[i-1] && i > 0){
            continue
        }

        for(let j = i+1; j < nums.length - 2; j++){
            if(nums[j] == nums[j-1] && j > i+1){
            continue
        }

            let k = j+1
            let l = nums.length - 1
            while(k < l){
                let sum = nums[i]+nums[j]+nums[k]+nums[l]

                if(sum == target){
                    ans.push([nums[i],nums[j],nums[k],nums[l]])

                    while(nums[k] == nums[k+1] && k < l){
                        k++
                    }
                    while(nums[l] == nums[l-1] && k < l){
                        l--
                    }

                    k++
                    l--
                }

                if(sum < target){
                    k++
                }
                if(sum > target){
                    l--
                }
            }
        }
    }

    console.log(ans)
}

let nums = [1, -2, 3, 5, 7, 9]
let target = 7
fourSum(nums, target)