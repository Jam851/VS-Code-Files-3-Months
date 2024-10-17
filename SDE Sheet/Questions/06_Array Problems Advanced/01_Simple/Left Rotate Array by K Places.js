//OPTIMAL
function rotateArray(nums, k) {
    //To reduce the number of times shifting needs to be executed
    if (k >= nums.length){
            k = k % nums.length
    }

    if (k < nums.length && k != 0){
        //Store the starting elements of the array to be shifted to the back of the array in a 'temp' array
        let temp = []
        for(let i = 0; i < k; i++){
            temp.push(nums[i])
        }

        //Shift remaining elements to the start of the array
        let tempN = k
        for(let i = 0; i < nums.length - k; i++){
            nums[i] = nums[tempN]
            tempN++
        }

        //Move 'temp' array elements back into 'nums' array
        tempN = nums.length - k
        for(let i = 0; i < temp.length; i++){
            nums[tempN] = temp[i]
            tempN++
        }

        console.log(nums)
    }
}

let nums = [1, 2, 3, 4, 5, 6]
let k = 2
rotateArray(nums, k)