//The no of elements in a row is equal to the row no.            2nd row has 2 elements and so on...

function SpecificNo(){
    //TIME COMPLEXITY -> O(r)       where r is the column no.
    //Finding an element from Pascal's Triangle using its Row & Column No.
    const numRow = 5
    const numCol = 3

    //Using Combination Method & Applying a shortcut in its calculation
    let row = numRow - 1
    let col = numCol - 1
    let ans = 1

    for(let i = 0; i < col; i++){
        ans = ans * (row - i)
        ans = ans / (i + 1)
    }

    console.log(ans)
}




function LinePrinter(rowP){
    //TIME COMPLEXITY -> O(N)       where N is the Row no.
    //Printing One row of Pascal's Triangle

    //Using a relation in Pascal's Triangle between consecutive elements in a row
    //Columns in this algorithm will start from 0 & Rows start from 1
    let Row = []
    Row.push(1)       //First & last element of a row is always 1
    let ans = 1

    for(let col = 1; col < rowP; col++){
        ans = ans * (rowP - col)
        ans = ans / (col)
        Row.push(ans)
    }
    
    return(Row)
}




function PascalTriangle(row){
    //Iterating the rows from 1
    let ans = []
    for(let i = 1; i <= row; i++){
        ans.push(LinePrinter(i))
    }

    console.log(ans)
}

PascalTriangle(5)