//Given a string, return true if it contains all balanced parentheses (), curly-brackets {}, and square-brackets [].

function isBalanced(str) {
    const openStack = [];
    const open = '([{';
    const close = ')]}';
    const matches = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        // If it's an open bracket, push it into our array
        if(open.includes(char)) {
            openStack.push(char);

        // If it's a close bracket
        } else if(close.includes(char)) {
            // pop an item from the open brackets array.
            const lastOpenBracket = openStack.pop();
          
            // If the open and close bracket don't match, return false
            if(matches[char] !== lastOpenBracket) {
                return false;
            }
        }
    }
    
    // Ensures there are no characters left on the stack
    return !openStack.length;
}