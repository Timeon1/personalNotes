var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

//检查是否重复
const checkRepeat = (arr)=>{
    return new Set(arr).size == arr.length
}
//合并去重复
const concatRepeat = (arr)=>{
    return Array.from( new Set(arr))
}

//找出未出现的数字
const findNums = (arr)=>{
    const nums = [1,2,3,4,5,6,7,8,9]

    const newArr = nums.filter((item)=>{
        return item != 0 && !arr.includes(item) && nums.includes(item)
    })
    return newArr
}
//找出每次都出现的数字
const findAllNums = (arr1, arr2, arr3)=>{
    const nums = [1,2,3,4,5,6,7,8,9]

    const newArr = nums.filter((item)=>{
        return item != 0 && arr1.includes(item) && arr2.includes(item) && arr3.includes(item)
    })
    return newArr
}

function sudoku(puzzle){
    console.log(findNums(puzzle[0]))
    console.log(findNums(puzzle[1]))
        

    const result = []

    puzzle.map((horizon, hIndex)=>{
        // 一行 
        const h = horizon
        horizon.map((block , bIndex)=>{
            // 一列
            const l = puzzle.map(item=> item[0] )
            //九宫格
            const hStart = Math.floor(hIndex/3) * 3
            const hEnd = hStart + 2
            const lStart = Math.floor(bIndex/3) * 3
            const lEnd = lStart + 2

            const filedArr = [ puzzle[hStart][hStart] , puzzle[hStart][hStart+1], puzzle[hStart][hStart+2] ,puzzle[hStart+1][hStart] , puzzle[hStart+1][hStart+1], puzzle[hStart+1][hStart+2], puzzle[hStart+2][hStart], puzzle[hStart+2][hStart+1], puzzle[hStart+2][hStart+2]  ]


            if(block == 0){
                const a = findNums(horizon)
                const b = findNums(puzzle.map(item => item[bIndex]))
                const c = findNums(filedArr)

                const find = findNums([...a,...b,...c])

                const cResult = findAllNums(a,b,c)

                if(cResult.length ){
                    puzzle[hIndex][bIndex] = cResult[0]
                }
                
                console.log('abc',`hIndex-${hIndex}-${bIndex}`, a , b  , c ,'-----', cResult, find)
                return
            }



        })  

    })



    console.log('result', puzzle)
    return puzzle




}




sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 
*/