function TotalQuestions(n){
    const str = n
    const strlength = str.length
    let counter = Ccounter = 0
    // let Ccounter = 0

    for(let i = 0; i<strlength; i++){
        if(str[i] == "."){
            counter++
        } else if (str[i] == ","){
            Ccounter++
        }
    }
    // console.log(counter + (Ccounter*0.1))
}

const n = ""
TotalQuestions(n)
/////////////////////////////////////////////////////////////
function search(nums, k) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log(mid)
        // Check if mid points to the target
        if (nums[mid] === k){
            return true
        }
        //////////////
        if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
            low = low + 1;
            high = high - 1;
            continue;
        }

        // Check if the left part is sorted
        if (nums[low] <= nums[mid]){
            // Target exists in the left sorted part
            if((nums[low] <= k && k <= nums[mid])){
                high = mid - 1;   
            } 
            else {
                // Target does not exist in the left sorted part
                low = mid + 1
            }
        } 
        // Check if the right part is sorted
        else {
            if(nums[mid] <= k && k <= nums[high]){
                low = mid + 1;
            }
            else {
                high = mid - 1
            }
        }
    }

    // If target is not found
    return false
}

let nums = [3,1,2,3,3,3,3]
let k = 1

console.log(search(nums, k))