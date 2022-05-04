// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the
// second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
//   String 2: Dogs eat ants
// Output: False

function anagramChecker(hello, goodbye) {
    let same1 = hello.length;
    let same2 = goodbye.length;
    (same1 != same2)
    let str1 = hello.split('').sort().join('');
    let str2 = goodbye.split('').sort().join('');
    if (str1 === str2) {
        console.log(true);
    } else {
        console.log(false);
    }
}
anagramChecker("dog", "god");
anagramChecker("medium", "hard");
anagramChecker("hat", "ath");