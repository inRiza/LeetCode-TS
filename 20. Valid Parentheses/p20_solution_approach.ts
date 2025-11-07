/* 
    @params s: string
    @return boolean
*/

function isValid(s: string): boolean {
    const stack: string[] = [];
    const parenthesesMap: { [key: string]: string } = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for (let char of s) {
        // checking if char is the closing parentheses (the exist value of the parenthesesMap)
        if (char in parenthesesMap) {
            // check if its empty or the last opened parentheses is not a match
            if (stack.length === 0 || stack.pop() !== parenthesesMap[char]) {
                return false;
            }
        } else {
            // push the opening parentheses
            stack.push(char);
        }
    }

    return stack.length === 0; // close if all opened parentheses had been found as key

} 