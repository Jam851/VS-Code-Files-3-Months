//Arrays are pre-sorted
//Union of array should not contain duplicates & maintain ascending order of elements

function unionArray(nums1, nums2) {
    let i = 0
    let j = 0
    let tempArray = []
    while(i<nums1.length && j<nums2.length){
        //Comparison between the two array elements using pointers
        if (nums1[i] < nums2[j]){
            //To avoid repetition in tempArray
            if(tempArray.length == 0 || nums1[i] != tempArray[tempArray.length - 1]){
                tempArray.push(nums1[i])
            }
            i++
        } else if (nums1[i] > nums2[j]){
            if(tempArray.length == 0 || nums2[j] != tempArray[tempArray.length - 1]){
                tempArray.push(nums2[j])
            }
            j++               
        } else if (nums1[i] == nums2[j]){
            if(tempArray.length == 0 || nums1[i] != tempArray[tempArray.length - 1]){
                tempArray.push(nums1[i])
            }
            i++
            j++
        }
    }
    //To push remianing array elements
    if(j < nums2.length){
        for(j; j < nums2.length; j++){
            if(tempArray.length == 0 || nums2[j] != tempArray[tempArray.length - 1]){
                tempArray.push(nums2[j])
            }
        }
    } else if (i < nums1.length){
        for(i; i < nums1.length; i++){
            if(tempArray.length == 0 || nums1[i] != tempArray[tempArray.length - 1]){
                tempArray.push(nums1[i])
            }
        }
    }
    console.log(tempArray) 
}
let nums1 = [3, 4, 6, 7, 9, 9]
let nums2 = [1, 5, 7, 8, 8]
unionArray(nums1, nums2)