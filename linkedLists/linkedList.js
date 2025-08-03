class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  
  addFirst(item){
    const newNode = new Node(item);
    newNode.next = this.head
     this.head =newNode;
  }
  
  size(){
    let count = 0;
    let current = this.head;
    while(current!=null){
      count+=1;
      current = current.next;
    }
    return count;
  }
  
  addLast(item){
    const newNode = new Node(item);
    let current = this.head;
    
    while(current.next){
      current = current.next;
    }
    current.next = newNode;
    newNode.next = null;
  }
  
  addAt(index, item){
    if(index<0 && index>this.size()){
      console.error('Invalid index');
      return;
    }  
    const newNode = new Node(item);
    if(index ===0){
   
      newNode.next = this.head;
      this.head=newNode;
      return;
    }
    let current = this.head;
    for(let i=0; i<index-1; i++){
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
 
  }
  
  removeLast(){
    if(!this.head){
      return;
    }
    
    let current = this.head;
    while(current.next.next){
      current = current.next;
    }
    current.next = null;
  }
  
  removeAt(index){
    if(index<0 && index>this.size()){
      console.error('Invalid index');
    }
    if(index === 0){
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    for(let i=0; i<index-1; i++){
      current = current.next;
    }
    current.next = current.next.next;
    
  }
  
   reverseLinkedList(){
    let prev = null;
    let current = this.head;
    while(current!=null){
        const temp  = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    this.head= prev;
}
  
  print(){
    let current = this.head;
    let result = [];
    while(current){
      result.push(current.value);
 
      current = current.next;
    }
         console.log(result.join('->'))
  }
}

  const linkedlist = new LinkedList();
linkedlist.addFirst(2);
linkedlist.addFirst(3);
linkedlist.addFirst(5);
linkedlist.addLast(9)
linkedlist.addFirst(10);
linkedlist.addAt(4, 8);
// linkedlist.removeLast();
// linkedlist.removeAt(2);
linkedlist.print();
linkedlist.reverseLinkedList();
linkedlist.print();