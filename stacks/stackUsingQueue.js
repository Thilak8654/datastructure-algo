/***
 * Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
 * Implement the MyStack class:
 * void push(int x) Pushes element x to the top of the stack.
 * int pop() Removes the element on the top of the stack and returns it.
 * int top() Returns the element on the top of the stack.
 * boolean empty() Returns true if the stack is empty, false otherwise.
 */


var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    while(this.q1.length!== 0){
        this.q2.push(this.q1.shift())
    }
    this.q1.push(x);
    while(this.q2.length!==0){
        this.q1.push(this.q2.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length===0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var stack = new MyStack()
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.top());
console.log(stack.pop());