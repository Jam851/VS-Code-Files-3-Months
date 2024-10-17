//Sort an array of 0s, 1s & 2s within itself
//Cannot make a copy of array


//OPTIMAL SOLUTION using variation of "Dutch National flag algorithm"
//Time Complexity -> O(N)
function sortZeroOneTwo(nums) {
    let low = 0
    let mid = 0
    let high = nums.length - 1
    
    while(mid <= high){
        //for 0
        if(nums[mid] == 0){
            nums[mid] = nums[low]
            nums[low] = 0
            low++
            mid++
        }
        
        //for 1
        else if (nums[mid] == 1)  mid++

        //for 2
        else {
            nums[mid] = nums[high]
            nums[high] = 2
            high--
        }
    }

    console.log(nums)
   }

   
   let nums = [1, 0, 2, 1, 0]
   sortZeroOneTwo(nums)