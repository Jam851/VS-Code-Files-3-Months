class Solution {
    findPeakElement(arr) {
        let n = arr.length

        if(n == 1) return 0
        if (arr[0] > arr[1]) return 0;
        if (arr[n - 1] > arr[n - 2]) return n - 1;

        let low = 0
        let high = arr.length - 1

        while(low <= high){
            let mid = Math.floor((low + high) / 2)

            if(arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]){
                return mid
            }

            if (arr[mid] < arr[mid - 1])
                high = mid - 1;
            // If we are in the right part of the array
            else 
                low = mid + 1;
        }

        // Return -1 if no peak element found 
        return -1;
    }
}
let nums = [1, 2, 1, 3, 5, 6, 4]
// let aggCows = 2

let sol = new Solution()
console.log(sol.findPeakElement(nums))
// console.log(sol.countCows(nums, 4))