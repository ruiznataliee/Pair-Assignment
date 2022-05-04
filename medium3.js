// Write a function that takes in two numbers and determines the largest positive integer that divides the two
// numbers without a remainder. 
// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24
// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6


function twoNums(x, z) {
    if ((x, z) >= 0 && (typeof (x, z) === 'number')) {
        x = Math.abs(x);
        z = Math.abs(z);
        while (z) {
            var v = z;
            z = x % z;
            x = v;
        }
        console.log(x);
    }
    else {
        return false;
    }
}
twoNums(336, 360);
twoNums(78, 126);





