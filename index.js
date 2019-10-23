console.log("Hello world!");

console.log("");
console.log("===================");
console.log("== Variables");
console.log("===================");

var n = 16;
var pi = "3.1415";
pi = 3.1415;

console.log("== typeof(pi):", typeof(pi));

console.log("");
console.log("===================");
console.log("== Numbers");
console.log("===================");

console.log("== 9 / 5:", 9 / 5);
console.log("== Math.floor(9 / 5):", Math.floor(9 / 5));

console.log("");
console.log("===================");
console.log("== Comparisons");
console.log("===================");

console.log("== 2 == 2:", 2 == 2);
console.log("== 2 == '2':", 2 == '2');
console.log("== 2 != '2':", 2 != '2');
console.log("== 2 == '3':", 2 == '3');
console.log("== 2 === '2':", 2 === '2');
console.log("== 2 !== '2':", 2 !== '2');
console.log("== 2 >= 1:", 2 >= 1);

console.log("");
console.log("===================");
console.log("== Strings");
console.log("===================");

var str1 = "This is a string";
var str2 = 'This is also a string';
var concatenatedStrings = str1 + str2;

console.log("== concatenatedStrings:", concatenatedStrings);

var decathlon = "decathlon";
console.log("== decathlon.indexOf('cat'):", decathlon.indexOf('cat'));

var team = "team";
console.log("== team.indexOf('i'):", team.indexOf('i'));

console.log("== decathlon.slice(2, 5):", decathlon.slice(2, 5));

// console.log("== n.slice(2, 5):", n.slice(2, 5));

console.log("");
console.log("===================");
console.log("== Arrays");
console.log("===================");

var array = [ 1, 'b', [ 1, 2, 3 ], decathlon];
console.log("== array:", array);

array.push('cat');
array.push(array);
console.log("== array:", array);
