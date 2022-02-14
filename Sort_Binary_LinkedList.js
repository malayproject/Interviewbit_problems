//input A = head pointer of a binary linkedlist(binary means datta values are either 0 or 1)
function solve(A){
    var lenA = 0
    var count = 0
    var s = A
    while(s)   {
        lenA++
        count = s.data==0?count+1:count
        s = s.next
    }
    s = A
    while(s)    {
        if(count > 0)   {
            s.data = 0
            count--
        }else{
            s.data = 1
        }
        s = s.next
    }
    return A
}