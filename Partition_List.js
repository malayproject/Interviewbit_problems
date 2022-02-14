//param A : head node of linked list
//param B : integer
//return the head node in the linked list
function solve(A, B)   {
    p = A
    s1 = e1 = s2 = e2 = null
    while(p)    {
        let t = p.next
        p.next = null
        if(p.data < B)  {
            if(e1 == null)  {
                e1 = p
                s1 = e1
            }else{
                e1.next = p
                e1 = p
            }
        }else{
            if(e2 == null)  {
                e2 = p
                s2 = e2
            }else{
                e2.next = p
                e2 = p
            }
        }
        p = t
    }
    if(s1 && s2)    {
        e1.next = s2
        return s1
    }
    return s1||s2
}