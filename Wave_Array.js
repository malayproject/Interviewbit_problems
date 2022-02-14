function solve(A){
    A.sort((a, b) => a-b)
    var lenA = A.length
    if(lenA < 3)    return A.reverse()
    count = Math.floor(lenA/2)
    for(let i = 0; i < lenA-1; i+=2) {
        let temp = A[i]
        A[i] = A[i+1]
        A[i+1] = temp
    }
    return A
}
console.log(solve([4, 2, 1, 3, 5]))
