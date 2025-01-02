/*
Given an array nums of n integers, where nums[i] represents the number of pages in the i-th book, and an integer m representing the number 
of students, allocate all the books to the students so that each student gets at least one book, each book is allocated to only one student, 
and the allocation is contiguous.
Allocate the books to m students in such a way that the maximum number of pages assigned to a student is minimized. 
If the allocation of books is not possible, return -1.

Example 1
Input: nums = [12, 34, 67, 90], m=2
Output: 113
Explanation: The allocation of books will be 12, 34, 67 | 90. One student will get the first 3 books and the other will get the last one.

Example 2
Input: nums = [25, 46, 28, 49, 24], m=4
Output: 71
Explanation: The allocation of books will be 25, 46 | 28 | 49 | 24.
*/

class Solution {
    countStudents(nums, pages){
        let students = 1
        let cumPages = 0

        for(let i = 0; i < nums.length; i++){
            if(cumPages + nums[i] <= pages){
                cumPages += nums[i]
            }
            else {
                cumPages = nums[i]
                students++
            }
        }

        return students
    }

    findPages(nums, m) {
        if(nums.length < m){
            return -1
        }

        let low = Math.max(...nums)
        let high = nums.reduce((a, b) => a + b)
        let ans = -1

        while(low <= high){
            let mid = Math.floor((low + high) / 2)

            if(this.countStudents(nums, mid) <= m){
                high = mid - 1;
                ans = mid;
            }
            else {
                low = mid + 1
            }
        }

        return ans;
    }
}

let nums =  [12, 34, 67, 90]
let students = 2

let sol = new Solution()
console.log(sol.findPages(nums, students))