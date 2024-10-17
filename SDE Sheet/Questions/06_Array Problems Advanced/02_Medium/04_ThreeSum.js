//The Duplicate Handling is a MUST SEE

function threeSum(nums) {
    let ans = []
    let temp = []
    for(let i = 0; i < nums.length; i++){
        temp.push(nums[i])
    }
    temp.sort((a, b) => a - b)
    for(let i = 0; i < temp.length - 2; i++){
        //Duplicate Handling    //temp[i] == temp[i - 1] && i > 0 is used because we want the triplet with the current nums[0] first. Once we get that we don't care about that no.
                                                                //By using a condition like above for [2, 2, -4] we won't lose out on the one and only triplet for this array by iterating over it just bcz it has a two 2's in it.
        while(temp[i] == temp[i - 1] && i > 0){
            i++
        }
        
        let j = i + 1
        let k = temp.length - 1
        while(j < k){
            const sum = temp[j] + temp[k] + temp[i]
            if (sum == 0){
                ans.push([temp[i], temp[j], temp[k]])
                
                //Duplicate Handling
                while(temp[k] == temp[k - 1] && j < k) k--
                while(temp[j] == temp[j + 1] && j < k) j++
                k--
                j++
            } 
            else if (sum > 0) k--
            else j++            
            }
    }
    console.log(ans)
}

const nums = [2, -2, 0, 3, -3, 5]
threeSum(nums)