//Merge two sorted arrays without extra space
//OPTIMAL - I
/*
Example 1 ->
Input: nums1 = [-5, -2, 4, 5], nums2 = [-3, 1, 8]
Output: [-5, -3, -2, 1, 4, 5, 8]
*/

function merge(nums1, m, nums2, n) {
    let len = n + m;
    let gap = Math.ceil(len / 2);

    while (gap > 0) {
        let left = 0;
        let right = left + gap;
        while (right < len) {
            // When left in nums1[] and right in nums2[]
            if (left < m && right >= m) {
                swapIfGreater(nums1, nums2, left, right - m);
            }
            // When both pointers in nums2[]
            else if (left >= m) {
                swapIfGreater(nums2, nums2, left - m, right - m);
            }
            // When both pointers in nums1[]
            else {
                swapIfGreater(nums1, nums1, left, right);
            }
            // Increment the pointers by 1 each
            left++;
            right++;
        }
        // If gap is equal, break out of the loop
        if (gap === 1) break;
        gap = Math.ceil(gap / 2);
    }

    // Copy elements of nums2 into nums1
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[i - m];
    }
}

// Utility function to swap elements if needed
function swapIfGreater(arr1, arr2, idx0, idx1){
    if (arr1[idx0] > arr2[idx1]) {
        [arr1[idx0], arr2[idx1]] = [arr2[idx1], arr1[idx0]];
    }
}

let array1 = [-5, -2, 4, 5]
let array2 =  [-3, 1, 8]
let m = array1.length
let n = array2.length


merge(array1, m, array2, n)
console.log(array1)

/*
Time Complexity: O((N+M)xlog(N+M)), 
where N and M are the sizes of the given arrays. 
The gap is ranging from N+M to 1 and every time the gap gets divided by 2. So, the time complexity of the outer loop will be O(log(N+M)). 
Now, for each value of the gap, the inner loop can at most run for (N+M) times. So, the time complexity of the inner loop will be O(N+M). 
So, the overall time complexity will be O((N+M)xlog(N+M)).
*/