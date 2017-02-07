var students = ['Gus', 'Josh', 'Cobi', 'Monty', 'Kevin', 'Eric', 'matthew', 'David', 'haley', 'alfredo', 'marisa', 'micaela', 'osvaldo', 'rosamaria', 'rigoberto', 'leonardo'];
//
//
// function randomStudent() {
//   var numStudents = students.length;
//   var randStudent = Math.ceil(Math.random() * numStudents) - 1;
//   alert(students[randStudent]);
// }
//
// randomStudent();

var fruits = ['mango', 'strawberry', 'pineapple', 'avocado', 'dragonfruit'];

// console.log(fruits);

// this puts more into the back of array
fruits.push('apple');
// console.log(fruits);

// removes from end of array
var lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

// puts in the front of array
fruits.unshift('kiwi');
// console.log(fruits);

// remove from front of array
var firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

// IndexOf - finds the index of an item in an array
var posFruit = fruits.indexOf('avocado');
// console.log(posFruit);

// splice - remove and item by index number
var remFruit = fruits.splice(1, 1);
// console.log(remFruit);
// console.log(fruits);

// this doesnt change the original like the others
// slice - copies an array     first number starts but doesn't include it
var copyFruit = fruits.slice(2, 3);

// console.log(fruits);
// console.log(copyFruit);
// console.log(fruits);

//  bhvjkfdoso bh vjncdlx;sjgnvcdx,lzw.; hgjfkdl

var Gus = ['boring ceramics'];

Gus.unshift('boring algebra');
Gus.push('fun english');
Gus.push('fun econ');
Gus.unshift('okay geekwise');
console.log(Gus);

var jerry = Gus.slice(4, 5);

console.log(jerry);
console.log(Gus);

// moves it alphabetically
Gus.sort();
console.log(Gus);

// reverse array aphabetically
Gus.reverse();
console.log(Gus);

var nums = [0, 53, 5, 103, 7, 78, 10];
// 0,5,7,10,53,78,103
nums.sort();
console.log(nums);
