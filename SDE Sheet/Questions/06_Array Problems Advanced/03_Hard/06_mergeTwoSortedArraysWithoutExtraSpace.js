//Merge two sorted arrays without extra space
//OPTIMAL - II
/*
Example 2 ->
Input: nums1 = [0, 2, 7, 8], nums2 = [-7, -3, -1]
Output: [-7, -3, -1, 0, 2, 7, 8]
*/

function merge(nums1, m, nums2, n) {
    // Pointer for nums1 (end of valid elements)
    let left = m - 1;
    
    // Pointer for nums2 (beginning of valid elements)
    let right = 0;
    
    /* Swap the elements until nums1[left]
    is smaller than nums2[right]*/
    while (left >= 0 && right < n) {
        if (nums1[left] > nums2[right]) {
            [nums1[left], nums2[right]] = [nums2[right], nums1[left]];
            left--;
            right++;
        } else {
            break;
        }
    }
    
    // Sort nums1 from index 0 to m-1
    let sortedSlice = nums1.slice(0, m).sort((a, b) => a - b);

    // Replace the sorted segment back into the original array
    nums1.splice(0, sortedSlice.length, ...sortedSlice);
     
    // Sort nums2 from start to end
    nums2.sort((a, b) => a - b);
    
    // Put the elements of nums2 in nums1
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[i - m];
    }
}

let array1 = [0, 2, 7, 8]
let array2 =  [-7, -3, -1]
let m = array1.length
let n = array2.length

merge(array1, m, array2, n)
console.log(array1)

/*
Time Complexity: O(min(N, M)) + O(NxlogN) + O(MxlogM), where N and M are the sizes of the given arrays. 
O(min(N, M)) is for swapping the array elements. And O(NxlogN) and O(MxlogM) are for sorting the two arrays.
*/