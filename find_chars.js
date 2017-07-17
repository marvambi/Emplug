/** This program takes two strings as inputs(arguments)
*   and computes a third string comprised of characters 
*   common to both strings but ordered as it occurs in 
*   in the first string
*/

/**
 * @string1 first input string
 * @string2 second input string
 * @string3 output string from computation
 * @index used for manipulating the computation
 */

 function find_chars(string1, string2) {
     // Here, we initialise an array to hold temporally, intermediate computations

     var arrHolder = [];

     for (var i = 0, len = string1.length; i < len, i++;) {
        if ((string2.indexOf(string1[i]) != -1) && (string1[i] != " ")) {
            arrHolder[i] = string1[i];
            string2 = setCharAt(string2, string2.indexOf(string1[i]), '');
        }
     }

     var string3 = "";

     //We store the temporal character in the holder array for later
     arrHolder.forEach(function(el) {
         string3 += el;
     });

     return string3;
 }

 function setCharAt(str, index, rep) {
     if (index > str.length - 1) return str;
     return str.substr(0, index) + rep + str.substr(index + 1);
 }