//merge sort code

function mergesort(arr, srt, end) {
    var len = end-srt
    if(len < 2) {return arr}
    var mid = Math.floor((srt+end)/2)
    arr = mergesort(arr, srt, mid)
    arr = mergesort(arr, mid, end)
    return merge(arr, srt, mid, end)
}


function merge(arr, srt, mid, end) {
    var auxArr = []

    var i = srt, j = mid
    while(i < mid && j < end)    {
        if(arr[i] <= arr[j]) {
            auxArr.push(arr[i])
            i++
        }else{
            auxArr.push(arr[j])
            j++
        }
    }
    if(i == mid) {
        while(j < end)  {
            auxArr.push(arr[j])
            j++
        }
    }else{
        while(i < mid)   {
            auxArr.push(arr[i])
            i++
        }
    }
    i = srt
    while(i < end)  {
        arr[i] = auxArr[i-srt]
        i++
    }
    return arr
}

console.log(mergesort([8,7,6,5,4,3,2,1], 0, 8))

