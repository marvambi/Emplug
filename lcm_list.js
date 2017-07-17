/**
 * This program computes and returns the Least common multiple of a set of input integers
 * by returning the smallest positive integer that is a multiple of all the 
 * integers in a set
 * 
 * @arrIn --The input array containing the set of number for the computation
 */

 function lcmList(arrIn) {
     return arrIn.reduce(lcm);
 }

 
 function lcm(a, b) {
     return (a * b)/gcd(a, b);
 }

 function gcd(a, b) {
     return (b == 0)? a : gcd(b, a%b);
 }

 //Usage example
// Ex.1
 lcmList([2,5, 7]);

 //Ex.2
var input = [2,3,4];
var txt = "LCM of ";
input.forEach(function(x){
	txt += " " + x;
});
alert(txt + " is: " +lcmList([2,5, 7]));