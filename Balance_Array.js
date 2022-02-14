/***************************************Solution1**********************************************/
function solve(A)   {
    lenA = A.length
    if (lenA < 2) return lenA
    
    rightArr = []
    for(let i = 1; i < lenA; i++)   {
        rightArr.push(A[i])
    }
    left = [0n,0n]
    right = getSumArray(rightArr)
    count = 0
    for(let i = 0; i < lenA; i++)   {
        if((left[0] + right[1]) == (left[1] + right[0]))  {
            count++
        }
        if(i == lenA-1)  break
        if(i%2) {
            left[1] += BigInt(A[i])
        }else{
            left[0] += BigInt(A[i])
        }
        right[0] -= BigInt(A[i+1])
        right[0] = right[0] + right[1]
        right[1] = right[0] - right[1]
        right[0] = right[0] - right[1]
        
    }
    return count
}

function getSumArray(arr)    {
    lenArr = arr.length
    if(lenArr == 0) return [0n,0n]
    sumE = 0n, sumO = 0n
    for(let i = 0; i < lenArr; i++) {
        if(i%2) {
            sumO += BigInt(arr[i])
        }else{
            sumE += BigInt(arr[i])
        }
    }
    return [sumE, sumO]
}

console.log(solve([2, 33, 5, 65, 32, 44, 82, 1, -3, 44, 65, 11, 90, 9, 20, 82, -23, 33, -101, 1]))

/***************************************Solution2(TC=O(n2)**********************************************/

// function solve(A){
//     lenA = A.length
//     count = 0
//     for(let i = 0; i < lenA; i++)   {
//         [left, right] = getSubArrs(i, A, lenA)
//         if((left[0] + right[1]) == (left[1] + right[0]))  {
//             count++
//         }
//     }
//     return count;
// }
// function getSubArrs(i, A, lenA)    {
//     leftArr = [], rightArr = []
//     for(let j = 0; j < lenA; j++)  {
//         if(j < i) leftArr.push(A[j])
//         else if( j > i) rightArr.push(A[j])
//     }
//     return [getSumArray(leftArr), getSumArray(rightArr)]
// }
// function getSumArray(arr)    {
//     lenArr = arr.length
//     if(lenArr == 0) return [0,0]
//     sumE = 0, sumO = 0
//     for(let i = 0; i < lenArr; i++) {
//         if(i%2) {
//             sumO += arr[i]
//         }else{
//             sumE += arr[i]
//         }
//     }
//     return [sumE, sumO]
// }

// console.log(solve([5,5,2,5,8]))