//OPTIMAL With Space Complexity = O(1) & without changing the order of original array
function missingNumber(nums) {
    for(let i = 0; i <= nums.length; i++){
        let numberPresent = false
        for(const num of nums){
            if(num === i){
                numberPresent = true
                break
            }
        }

        if(!numberPresent){
            console.log(i)
        }
    }
}

let nums = [1, 4, 2, 5, 6, 0]
missingNumber(nums)