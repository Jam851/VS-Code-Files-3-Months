//TIME COMPLEXITY = O(N)
function TwoSum(nums, target){
    let ans = [-1, -1]
    let temp = []

    for(const [index, num] of nums.entries()){
        temp.push([num, index])
    }
    temp.sort((a, b) => a[0] - b[0])

    //ALGORITHM
    let i = 0
    let j = temp.length - 1
    while(i < j){
        if(temp[i][0] + temp[j][0] == target){
            ans[0] = temp[i][1]
            ans[1] = temp[j][1]
            return ans
        }
        else if (temp[i][0] + temp[j][0] < target){
            i++
        }
        else if (temp[i][0] + temp[j][0] > target){
            j--
        }
    }

    return ans
}


const nums = [1, 6, 2, 10, 3]
const target = 7
let ans = TwoSum(nums, target)
console.log(ans)