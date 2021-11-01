/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(x, y, z, w) {
    document.write("<p> You will be a " + x + " in " + y + ", and married to " + z + " with " + w + " kids.</p>");
}
tellFortune('software engineer', 'Jordan', 'Alice', 3);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age) {
    document.write("<p> Your doggie is " + age * 7 + " years old in dog years!</p>");
}
calculateDogAge(5);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amount) {
    document.write("<p> You will need " + (100 - age) * amount * 365 + " cups of tea to last you until the ripe old age of 100</p>");
}
calculateSupply(30, 2);
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Jouza")
=> "Hello Jouza"
*/
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Omar"));
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double(cat) {
    return 2 * cat;
}

function double(x) {
    return 2 * x;
}

function double(x) {
    return 2 * x;
}
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
    return 2 * x;
}

function double2(x) {
    return 2 * x;
}

function double3(x) {
    return 2 * x;
}
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(d) {
    return Math.pow(d, 3);
}
console.log(cube(4));
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(x, y) {
    return x * y;
}
console.log(multiply(3, 4));
console.log(multiply(5, 4));
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age) {
    if (age >= 20)
        console.log("yes you can");
    else
        console.log("please come back after", 20 - age, " years to get one");
}
canIGetADrivingLicense(21);
canIGetADrivingLicense(17);
canIGetADrivingLicense(20);
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(s1, s2) {
    if (s1.length == s2.length)
        return true;
    return false;
}
console.log(sameLength("tree", "clue"));
console.log(sameLength("tree", "car"));

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(n1, n2) {
    if (n1 > n2)
        return n1;
    return n2;
}
console.log(largerNubmer(5, 6));
console.log(largerNubmer(5, 3));
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(sm) {
    if (sm.length) {
        min = sm[0];
        for (let i = 1; i < sm.length - 1; i++)
            if (min > sm[i])
                min = sm[i];
        return min;
    }
    return "Empty array :)";
}
console.log(smallerNubmer([8, 6, 7]));
console.log(smallerNubmer([5, 99, 3]));
console.log(smallerNubmer([5, 3, 3]));
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(sh) {
    if (sh.length) {
        s = sh[0];
        for (let i = 1; i < sh.length; i++)
            if (s.length > sh[i].length)
                s = sh[i];
        return s;
    }
    return "Empty array :)";
}
console.log(shorterString(["air", "school", "car", "by", "github"]));
console.log(shorterString(["air", "tr", "car", "by", "github"]));
console.log(shorterString(["by", "tr", "car", "air", "github"]));
console.log(shorterString(["air", "by", "car", "school", "github"]));
console.log(shorterString(["air", "tr", "by", "car", "github"]));
console.log(shorterString(["air", "tr", "car", "github", "by"]));
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(ls) {
    if (ls.length) {
        l = ls[0];
        for (let i = 1; i < ls.length; i++)
            if (l.length < ls[i].length)
                l = ls[i];
        return l;
    }
    return "Empty array :)";
}
console.log(longerString(["air", "school", "car", "github"]));
console.log(longerString(["air", "schoo", "car", "github"]));
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(num) {
    if (num % 2)
        return false;
    return true;
}
console.log(isEven(1));
console.log(isEven(2));
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num) {
    if (num % 2)
        return true;
    return false;
}
console.log(isOdd(4));
console.log(isOdd(5));
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num) {
    return Math.abs(num);
}
console.log(positive(4));
console.log(positive(-5));
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(s1, s2) {
    return s1 + " " + s2;
}
console.log(fullName("Mohammad", "Jouza"));
console.log(fullName("Alex", "Mercer"));
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function sum(sm) {
    if (sm.length) {
        let sum = 0;
        for (let i = 0; i < sm.length; i++)
            sum += sm[i];
        return sum;
    }
    return 0;
}

function average(avg) {
    var Sum = sum(avg);
    return Sum / avg.length;
}
console.log(average([1, 2, 3, 4, 5]));
console.log(average([5, 7, 9, 3, 5]));
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
    return Math.random().toPrecision(3);
}
console.log(randomNumber());