class ListNode{
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
    }
    addFirst(val){
        const newNode = new ListNode(val);
        newNode.next = this.head;
        if(this.head){
            this.head.prev = newNode;
        }
        this.head = newNode;
    }

    addLast(val){
        const newNode = new ListNode(val);
        if(!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        newNode.prev = current;
        current.next = newNode;
      
    }
    size(){
        let current = this.head;
        let count = 0;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }
    addAt(index, val){
        const newNode = new ListNode(val);
        if(index<0 && index>this.size()){
            console.error('Invalid Index');
            return;
        }
        if(index === 0){
            newNode.next = this.head;
            if(this.head){
                this.head.prev = newNode;
            }
            this.head = newNode;
        }
        let current = this.head;
        for(let i=0; i<index-1; i++){
            current = current.next;
        }
        newNode.prev = current;
        newNode.next = current.next;
        if(current.next){
            current.next.prev = newNode;
        }
        current.next= newNode;
        // newNode.next.prev = newNode;

    }
      print(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
}


const dll = new DoublyLinkedList();

dll.addFirst(2);
dll.addFirst(3);
dll.addFirst(5);
dll.addLast(9)
dll.addFirst(10);
dll.addAt(4, 8);
// dll.removeLast();
// dll.removeAt(2);
dll.print();