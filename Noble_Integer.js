function solve(arr)   {
    lenA = arr.length
    arr.sort((a, b) => a-b)
    for(let i = 0; i < lenA; i++)   {
        if(i < lenA-1 && arr[i] == arr[i+1])    continue
        if(arr[i] == lenA-1-i)  return 1
    }
    return -1
}
console.log(solve([3, 2, 1, 3]))
