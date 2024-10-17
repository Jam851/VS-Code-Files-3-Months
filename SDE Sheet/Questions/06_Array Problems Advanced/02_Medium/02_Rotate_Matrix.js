//Rotate Matrix By 90 degrees without using additional matrix

[1, 2, 3],          [ 7, 4, 1 ],
[4, 5, 6],  /*->*/  [ 8, 5, 2 ],
[7, 8, 9]           [ 9, 6, 3 ]

//Transpose Method
//TIME COMPLEXITY = O(N^2 + N/2(reversing))     SPACE COMPLEXITY = O(1)
function rotateUsingTranspose(matrix) {
    let n = matrix.length
    
    //Transpose Algorithm
    for(let i = 0; i <= n-2; i++){
        for(let j = i+1; j < n; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for(let i = 0; i < n; i++){
        matrix[i].reverse()
    }
}





//TIME COMPLEXITY = O(N^2 + N^2)     SPACE COMPLEXITY = O(3N)
function rotateMatrix(matrix) {
    let n = matrix.length

    let ans = []
    for(let i = 0; i < n; i++){
        let line = []
        for(let j = n - 1; j >= 0; j--){
            line.push(matrix[j][i])
        }

        ans.push(line)
    }

    //Replacing matrix elements
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            matrix[i][j] = ans[i][j]
        }
    }
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// rotateMatrix(matrix)
// console.log(matrix)

rotateUsingTranspose(matrix)
console.log(matrix)
