// function solve(A, B)  {
    
//     procArr = getProcessedArr(A, B)

//     currMax = Number.MIN_SAFE_INTEGER
//     lenP = procArr.length
//     for(let i = 0; i <= B; i++) {
//         sum = 0
//         for(let j = i; j < i+B; j++)  {
//             sum += procArr[j]
//         }
//         currMax = sum > currMax ? sum : currMax
//     }
//     console.log(currMax)
// }

// function getProcessedArr(A, B)  {
//     procArr = []
//     lenA = A.length
//     start = lenA-B
//     console.log(start)
//     for(let i = start; i < start+2*B; i++)    {
//         procArr.push(A[i%lenA])
//     }
//     return procArr
// }

A = [0,1,2,3,4,5,6,7]
solve(A, 4)



/**************************************Solution 2*************************************************/
function solve(A, B)    {
    sum = 0
    lenA = A.length
    p1 = 0, p2 = lenA-B
    for(let i = p2;  i< lenA; i++)  {
        sum += A[i]
    }
    currMax = sum
    for(let i = 0; i < B; i++)  {
        sum = sum - A[p2] + A[p1]
        p1++
        p2++
        currMax = Math.max(currMax, sum)
    }
    console.log(currMax)
}