//A, B are two sorted linked lists, output should be a sorted linkedlist
function solve(A, B){
    var s = null
    var e = null
    if(A==null && B==null)  return A
    while(A&&B) {
        t = null
        if(A.data < B.data) {
            t = A.next
            A.next = null
            if(s == null)   {
                e = A
                s = e
            }
            e.next = A
            e = A
            A = t
        }else{
            t = B.next
            B.next = null
            if(s == null)   {
                e = B
                s = e
            }
            e.next = B
            e = B
            B = t
        }
    }
    A == null? e.next = B: e.next = A
    return s
}