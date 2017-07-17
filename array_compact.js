/**
 * This program takes a sorted array as argument and returns
 * a modified version without duplicates
 * 
 * We'll not be defining a prototipal function to potential clashes
 *   
 * @arr --This is the original input array to be compacted
 */

 function array_compact(arr) {
     return arr.filter(function (item, index, arr) {
         return arr.indexOf(item) == index;
     });
 }

 //Usage example

array_compact([1, 3, 7, 7, 8, 9, 9, 9, 10]); // Yields [1, 3, 7, 8, 9, 10]
