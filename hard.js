// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of
// matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True
// Example 2:
// Input: str = “{hello world]” brackets(srt)




let match = (input) => {
    let brackets = "{}[]()"
    let stack = []

    for (let bracket of input) {
        let index = brackets.indexOf(bracket)
        if (index % 2 === 0) {
            stack.push(index + 1)
        } else {
            if (stack.pop() !== index) {
                return false;
            }
        }
    }
    return stack.length === 0
}

console.log(match('([]) [{}] {(())}'));
console.log(match('([])[{}] {(([))}'));
console.log(match('{()} []'));