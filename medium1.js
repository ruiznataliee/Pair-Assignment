// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input 
// is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’




function vowelChecker(x) {
    var vowel = x.toLowerCase();
    // charAt(0);
    if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" || vowel != "y") {
        console.log("It's a vowel!");
    }
    else {
        console.log(`It's NOT a vowel.`);
    }
}


console.log(vowelChecker('y'))




