/** RULES:
 *  Do NOT change any of the existing code.
 *  You are NOT allowed to type any numbers.
 *  You should NOT redeclare the variables a and b.
 *  
 *  OUTPUT:
 *  a is 8
 *  b is 3
 */


function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var temp = a;
a = b;
b = temp;

    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

test();

/** OPTIMAL SOLUTION
 *  
 *  a = a + b; // 11
 *  b = a - b; // 3
 *  a = a - b; // 8
 * 
 *  This is the most optimal solution using the benefits
 *  of javascript being an interpreter language.
 */
