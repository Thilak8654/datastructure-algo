/**
 * Given a string s containing just the characters '(', ')', '{','}','[',']', determin if the input string is valid.
 * Open brackets must be closed by the same type of brackets
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * Input: "()"        => output: true
 * Input: "([]{})"    => output: true
 * Input: "(]"        => output: false
 */

function isValid(s){
       while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
        s = s.replace("()", "");
        s = s.replace("[]", "");
        s = s.replace("{}", "");
    }
    return s.length === 0;
}

// or

// function isValid(s){
//     let myMap = {
//         ')': '(',
//         ']': '[',
//         '}': '{'
//     }
//     let stack = [];
//     for(let char of s){
//         if(char === '(' || char === '[' || char === '{'){
//             stack.push(char);
//         } else {
//             if(stack.length ===0 || stack[stack.length-1] !== myMap[char]){
//                 return false;
//             }
//             stack.pop();
//         }
     
//     }
//        return stack.length===0;
// }

console.log(isValid("()"));
console.log(isValid("([]{})"));
console.log(isValid("(]"));