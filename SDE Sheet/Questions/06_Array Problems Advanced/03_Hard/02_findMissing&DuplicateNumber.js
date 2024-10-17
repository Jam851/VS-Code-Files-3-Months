function findMissingRepeatingNumbers(nums) {
    // size of the array
    let n = nums.length;

    let xr = 0;

    for (let i = 0; i < n; i++) {
        // XOR of all elements in nums
        xr = xr ^ nums[i]; 
        
        // XOR of numbers from 1 to n
        xr = xr ^ (i + 1);  
    }

    // Get the rightmost set bit in xr
    let number = (xr & ~(xr - 1));

    // Group the numbers based on the differentiating bit
    // Number that falls into the 0 group
    let zero = 0; 
    
    // Number that falls into the 1 group
    let one = 0;  

    for (let i = 0; i < n; i++) {
        /* Check if nums[i] belongs to the 1 group
        based on the differentiating bit*/
        if ((nums[i] & number) !== 0) {
            
            // XOR operation to find numbers in the 1 group
            one = one ^ nums[i];
            
        } else {
            // XOR operation to find numbers in the 0 group
            zero = zero ^ nums[i]; 
        }
    }

    // Group numbers from 1 to n based on differentiating bit
    for (let i = 1; i <= n; i++) {
        /* Check if i belongs to the 1 group 
        based on the differentiating bit*/
        if ((i & number) !== 0) {
            
            // XOR operation to find numbers in the 1 group
            one = one ^ i; 
            
        } else {
            // XOR operation to find numbers in the 0 group
            zero = zero ^ i; 
        }
    }

    // Count occurrences of zero in nums
    let cnt = 0; 

    for (let i = 0; i < n; i++) {
        if (nums[i] === zero) {
            cnt++;
        }
    }

    if (cnt === 2) {
        /*zero is the repeating number,
        one is the missing number*/
        return [zero, one]; 
    }
    
    /* one is the repeating number, 
    zero is the missing number*/
    return [one, zero]; 
}


//repeating on left, missing on right
console.log(findMissingRepeatingNumbers([2,1,5,3,1]))