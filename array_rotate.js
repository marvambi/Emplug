/**
 * This program implements a function that takes an array of integers and returns that array rotated by N positions.
 * Say N=2, for insance, given the input array [1, 2, 3, 4, 5, 6] the function should return [5, 6, 1, 2, 3, 4]
 * Similarly, it should return ["E", "L", "F", "E"] given the input array ["F", "E", "E", "L"]
 */

 var rotate = function (arr, N) {
     var len = arr.length;

     return arr.slice(len - N).concat(arr.slice(0, len - N));
 };

 //Usage example

 console.log(rotate(["F", "E", "E", "L"], 2));