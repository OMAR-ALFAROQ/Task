//console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
let er = [1, 7, 9, 45];
let ar = ["str", "alex", "moh", "the", "fox", "over", "lazy", "dog"];
console.log("Here is the first array:" + er);
console.log("Here is the second array:" + ar);




/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits = ["Tomato", "Banana", "Watermelon"]
console.log(fruits.indexOf("Tomato"));
console.log(fruits.indexOf("Banana"));



/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
const fav = ["pizza", "burger", "chicken", ["basketball", "gaming", "runing", ["madmax", "baki", "headshot", ]]]
const [f1, f2, f3, [s1, s2, s3, [m1, m2, m3]]] = fav;
console.log(`my favorite food is : ${f1}, ${f2}, ${f3}. my favorite sport is: ${s1}, ${s2}, ${s3}. my favorite movie is: ${m1}, ${m2}, ${m3}.`);

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(param) {
    return param[0];
}
console.log(firstOfArray([1, 4, 5]));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function firstOfArray() {
    let param = [1, 4, 5]
    let ls = param[param.length - 1]
    return ls;
}
console.log(firstOfArray());

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9]
var el = array[array.shift()]
el = array[array.shift()]
el = array[array.shift()]
var p = array[array.push(10)]
var us = array[array.unshift(1, 3, 4, 6, 8)]
console.log(array, p, us);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function getMiddle(array) {
    const middle = array.length >> 1;
    return array.length & 1 ?
        array[middle] :
        array.slice(middle - 1, middle + 1);
}

console.log(getMiddle([1, 4, 5]));
console.log(getMiddle([1, 4, 5, 6]));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
var newarr = animals[animals.pop()]
animals[0] = "zebra";
animals[1] = "elephant";
console.log(animals);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(nums) {
    return nums;
}
console.log(indexOfArray([1, 2, 3, 8, 9][3]));
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(nums) {

    return nums;
}
console.log(arrayExceptLast([1, 2, 3, 8, 9].slice(0, 4)));
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(nums) {
    return nums;
}
let num = addToEnd([1, 2, 3, 8, 9].push(55))
console.log(num);
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 8, 9]));

function whileSumArray(numbers) {
    var sum = 0;
    var count = 0;
    while (count < numbers.length) {
        sum += numbers[count]
        count += 1;
    }
    return sum;
}
console.log(whileSumArray([1, 2, 3, 8, 9]));
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(minarray) {
    min = minarray.length;
    for (let i = 0; i < minarray.length; i++) {
        if (minarray[i] < min) {
            min = minarray[i];
        }
    }
    return min;
}
console.log(minInArray([1, 2, 3, 8, 9]));
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function deleteElement(remove) {
    let n = remove.length;
    let x = 8;
    let i;
    for (i = 0; i < n; i++)
        if (remove[i] == x)
            break;

        // If x found in array
    if (i < n) {
        // reduce size of array and move all
        // elements on space ahead
        n = n - 1;
        for (let j = i; j < n; j++)
            remove[j] = remove[j + 1];
    }
    return n;
}
console.log(deleteElement([1, 2, 3, 8, 9]));