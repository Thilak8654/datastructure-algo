class Stack {
    constructor(){
        this.stack = [];
    }
    push(element){
        this.stack.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is empty. Can't perform pop()";
        }
        return this.stack.pop();
    }

    size(){
        return this.stack.length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is Empty. Can't perform peek()";
        }
        return this.stack[this.size()-1];
    }
    
}
const stack = new Stack();
stack.push(10);
stack.push(12);
stack.push(13);
stack.push(15);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());

