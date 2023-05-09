// Given a string that may consist of opening and closing parentheses, your task is to check 
// if the string contains valid parenthesization or not.

export function isValid(string) {
    // Create a stack to store opening brackets
    let stack = [];
  
    // Define the opening and closing brackets
    const brackets = new Map([
      ['(', ')'],
      ['[', ']'],
      ['{', '}']
    ]);
  
    // Iterate through each character in the string
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
  
      // If the character is an opening bracket, push it onto the stack
      if (brackets.has(char)) {
        stack.push(char);
      } else if (brackets.has(stack[stack.length - 1]) && brackets.get(stack[stack.length - 1]) === char) {
        // If the character is a closing bracket that matches the top of the stack, pop the stack
        stack.pop();
      } else {
        // If the character is a closing bracket that doesn't match the top of the stack, return false
        return false;
      }
    }
  
    // If the stack is empty, all brackets are matched and the string is valid
    return stack.length === 0;
  }

function main() {
    let inputs = [
        "{}[]{}[{}])",
        "(){[{()}]}",
        "(((((",
        "{{()}",
        "{()}}"
    ];
    for (let i = 0; i < inputs.length; i++) {
        console.log(i + 1 + `.\tString: '${inputs[i]}'`);
        let resultingString = isValid(inputs[i]);
        console.log("\tIs it valid parentheses? :", resultingString);
        console.log("-".repeat(100));
    }
}

main();