function fn(s) {
    let stack = [];
let stringArray = s.split('')

for (let i = 0; i < stringArray.length; i++) {
   if (
       stringArray[i] === ')' && stack[stack.length-1] === '(' ||
       stringArray[i] === '}' && stack[stack.length-1] === '{' ||
       stringArray[i] === ']' && stack[stack.length-1] === '[') {
       stack.pop()
   }
   else {
       stack.push(stringArray[i])
   }
}
return stack.length? false : true;
};

console.log(fn("(]"))
console.log(fn("()"))
console.log(fn("()[]{}"))