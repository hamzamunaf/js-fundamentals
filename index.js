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

console.log("== loop:")
for (var i = 0; i < array.length; i++) {
  console.log("  - array[" + i + "]:", array[i]);
}

function printArrayElem(elem, idx) {
  console.log("  - array[" + idx + "]:", elem);
}

console.log("== forEach():")
array.forEach(function (elem, idx) {
  console.log("  - array[" + idx + "]:", elem);
});
array.forEach(printArrayElem);
// array.forEach(() => {});

console.log("== [ 1, 2, 3 ].join('---'):", [ 1, 2, 3 ].join('---'));
console.log("== '1,2,3,4'.split(','):", '1,2,3,4'.split(','));

console.log("");
console.log("===================");
console.log("== Functions");
console.log("===================");

function add(a, b, c) {
  return a + b + c;
}

console.log("== add(1, 2, 3):", add(1, 2, 3));
console.log("== add('1', '2', '3'):", add('1', '2', '3'));
console.log("== add('1', 2, '3'):", add('1', 2, '3'));
console.log("== add(['11111', '2'], 2, '3'):", add(['11111', '2'], 2, '3'));
console.log("== Number('1') + 2:", Number('1') + 2);
console.log("== add(1, 2, 3, 4, 5, 6):", add(1, 2, 3, 4, 5, 6));

function sumAllArgs() {
  sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log("== sumAllArgs(1, 2, 3, 4, 5, 6):", sumAllArgs(1, 2, 3, 4, 5, 6));

console.log("");
console.log("===================");
console.log("== Objects");
console.log("===================");

var student = {
  'firstName': 'Luke',
  lastName: 'Skywalker',
  'gpa': 3.75,
  getFullName: function (delim) {
    return this.firstName + delim + this.lastName;
  }
};

console.log("== student:", student);
console.log("== student['firstName']:", student['firstName']);
console.log("== student.firstName:", student.firstName);
console.log("== student.getFullName('     '):", student.getFullName('     '));

function Student(firstName, lastName, gpa, id) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gpa = gpa;
  this.id = id || 933111111;
}

Student.prototype.getFullName = function (delim) {
  return this.firstName + delim + this.lastName;
};

var s = new Student("Leia", "Organa", 4.0);
console.log("== s:", s);
console.log("== s.getFullName(' '):", s.getFullName(' '));

var s2 = new Student("Han", "Solo", 4.0);
console.log("== s2.getFullName(' '):", s2.getFullName(' '));
