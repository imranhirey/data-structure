// linked list 
class Node{
      constructor(val){
            this.val=val
            this.next=null
      }
}
let a=new Node('A')
let b=new Node('B')
let j=new Node('J')





a.next=b
b.next=j
let c=new Node('C')
let d=new Node('D')
let h=new Node('H')
let y=new Node('Y')


c.next=d
d.next=h
h.next=y





// let printall=(head)=>{

//       let curent=head
//       let len=0
//       while(curent){
//             console.log(curent.val)
//             curent=curent.next
//             len=len+1
           
//       }
//       console.log('length of this linked list is ',len)
     
  
// }
// printall(a)

// recursive
// let printall=(head)=>{
//       if (!head) return
//       console.log(head.val)
//       printall(head.next)

// }
// printall(a)


// sum of linked list
// let all=(head,target)=>{
//      if (head==null) return
//      if (head.val==target){
//       return true
//      }
//      let res=all(head.next,target)
   
//      return res==undefined?false:res
   
     

     

// }
// console.log(all(a,false))

// index teler
// let getindex=(index)=>{
//       let head=a
//       let cur=head
//       let i=1
//       while(cur!=null){
//             if (i==index) return cur
//             cur=cur.next
//             i++

//       }
//       throw new Error('not found')
// }
// console.log(getindex(4))

// recursively 

// let getindex=(head,index,i=1)=>{
//       if (!head) return;
//      if (i==index){
//       return head
//      }
//       return head==null?getindex(head.next,index,i+1)+' and this is the last one ':getindex(head.next,index,i+1)




// }

// console.log(getindex(a,4))

// reverse

// let reverse=(head)=>{
// if (head==null) return
// let prev=null
// let curent=head
// let i=0
// while(curent!=null){
      
// let next= curent.next
// curent.next=prev
// prev=curent
// curent=next
// i++
// console.log(prev,' in ',i )
    

// }
// console.log('.....................................')
// console.log('.....................................')
// console.log(prev)




// }
// reverse(a)

// join two linked lists
let jointwolinkedlists=(head1,head2)=>{
      if(head1==null) return
      let curent=head1
      let curent2=head2
      let tooko=1

      while(curent!=null && curent2!=null){
            console.log(curent!=null && curent2!=null)
            console.log(curent.val)
            console.log(curent2.val)
            console.log('cmldlkd',curent?.next)
            console.log(curent2?.next)
            curent=curent.next
            curent2=curent2.next
          

          
      
            
      }
        
      }



jointwolinkedlists(a,c)