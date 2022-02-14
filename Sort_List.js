function sortList(A){
    if(!A || !A.next) return A
    var mid = getMid(A)
    var temp = mid.next
    mid.next = null
    mid = temp
    return this.mergeTwoLists(sortList(A), this.sortList(mid))
}
function mergeTwoLists(A, B){
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
function getMid(A)    {
    slow = A
    fast = A
    while(fast && fast.next)    {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}
class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}
