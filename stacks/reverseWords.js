/***
 * Question: Given an input string s, reverse the order of the words
 * Input: "The sky is blue" ==========> Output: "blue is sky the"
 * Input: "    hello world    " ======> Output: "world hello"
 * Input "a good    example"   =====> Output: "example good a"
 * 
 * Note: This can be solved in better way. this is just to demonstrate stack usage
 */

const reverseWords = function(s){
    const splitS = s.split(' ');
    let stack = [];
    for(let i of  splitS){
         stack.push(i);
    }
    let finalS = "";
    while(stack.length){
        const current = stack.pop();

        if(current){
            finalS += " " + current;
        }
    }
    return finalS.trim();
}

console.log(reverseWords("The sky is blue"));
console.log(reverseWords("   hello world    "));
console.log(reverseWords("a good    example"));