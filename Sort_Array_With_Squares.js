 //param A : array of integers
//return a array of integers
function solve(A){
    lenA = A.length
    ind = 0
    res = []
    for(let i = 0;  i < lenA; i++)  {
        if(A[i] > 0)    {
            ind = i
            break
        }
    }
    negatives = []
    for(let i = ind-1; i > -1; i--) {
        negatives.push(A[i]*A[i])
    }
    positives = []
    for(let i = ind; i < lenA; i++) {
        positives.push(A[i]*A[i])
    }
    p1 = 0, p2 = 0
    lenN = negatives.length, lenP = positives.length;
    while(p1 < lenN && p2 < lenP)   {
        if(negatives[p1] <= positives[p2])  {
            res.push(negatives[p1])
            p1++
        }else{
            res.push(positives[p2])
            p2++
        }
    }
    if(p1 == lenN)  {
        while(p2 < lenP)    {
            res.push(positives[p2])
            p2++
        }
    }else{
        while(p1 < lenN)    {
            res.push(negatives[p1])
            p1++
        }
    }
    return res
}
console.log(solve([-23, -11, -9, -4, -4, 2, 13, 14, 18, 21, 27, 33]))

    
