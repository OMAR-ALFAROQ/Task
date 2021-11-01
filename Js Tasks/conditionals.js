/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
let x = 5;
let y = 6;
if (x > y) {
    console.log(x);
} else { console.log(y); }
/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is* -/ 
/******* Start Your Code *********/
function findTheSign(sng) {
    if (sng.length) {
        for (let c = 0; c < sng.length; c++)
            if (sng[c] < 0)
                alert("The sign is - : " + sng[c]);
    } else { return "NAN"; }
}
alert(findTheSign([1, -3, 4]));
/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
function Sort(Sarr) {
    Sarr = [0, -1, 4];
    if (Sarr.length) {
        for (let i = 0; i < Sarr.length - 1; i++)
            if (Sarr[i] < Sarr[i + 1]) {
                var temp = Sarr[i];
                Sarr[i] = Sarr[i + 1]
                Sarr[i + 1] = temp;
                i = -1;
            }
        alert(Sarr);
    } else alert("NAN");
}
console.log(Sort());
/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
function largest(lar) {
    if (lar.length) {
        var max = lar[0];
        for (let i = 0; i < lar.length - 1; i++)
            if (max < lar[i])
                max = lar[i];
        alert(max);
    } else alert("NAN");
}
console.log(largest([-5, -2, -6, 0, -1]));
/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

let xx = 4;
let yy = 1;
if (xx > yy)
    alert("Hello World");
else
    alert("Goodbye");
/******* End Your Code ********* */