// // var firstName = "John";

// // console.log(firstName);

// // var lastName = "Smith";
// // var age = 28;

// // var fullAge = true;
// // console.log(fullAge);

// // var job;
// // console.log(job)

// // job = 'Teacher';
// // console.log(job)

// // var firstName = 'John';
// // var age = 28;

// // console.log(firstName + " " + age);

// // var jab, isMarried;
// // job = 'teacher';
// // isMarried = false;

// // console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// // // Variable mutation

// // age = 'twenty eight';
// // job = 'driver';

// // console.log(age)

// // alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// // var lastName = prompt('What is his last Name?');

// // console.log(firstName + ' ' + lastName)

// // BASIC OPERATORS

// var year, yearJohn, yearMark;
// now = 2020;
// ageJohn = 28;
// ageMark = 33

// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn)

// console.log(now + 2)

// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder)

// // typeof operator
// console.log(typeof johnOlder)
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof juan)

// // OPERATOR PRECEDENCE

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now-yearJohn >= fullAge;
// console.log(isFullAge)

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2
// console.log(average)

// // Multiple assignements
// var x, y;
// x = y = (3+5)* 4 - 6  // 8 * 4 -6 = 26
// console.log(x, y)

// // x = x * 2
// x *= 2;
// console.log(x)
// x++
// console.log(x)

// // CODING CHALLENGE 1
// var johnMassInKg = 92
// var johnHeightInMeters = 1.95
// var markMassInKg = 78
// var markHeightInMeters = 1.69

// johnBMI = johnMassInKg / (johnHeightInMeters * johnHeightInMeters);
// markBMI = markMassInKg / (markHeightInMeters * markHeightInMeters);

// console.log("John's BMI: ", johnBMI)
// console.log("Mark's BMI: ", markBMI)

// if (markBMI > johnBMI) {
//     console.log("Mark's BMI is Higher")
// } else {
//     console.log("Mark's BMI is not Higher")
// }

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// // BOOLEAN LOGIC
// var firstName = "John";
// var age = 20;

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age < 20 && age >= 13) {
//   //Bewteen 13 and 20
//   console.log(firstName + " is a teenager.");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a young man.");
// } else {
//   console.log(firstName + " is a man.");
// }

// // TERNARY OPERATOR AND SWITCH STATEMENTS

// var firstName = "John";
// // var age = 16;

// age > 18
//   ? console.log(firstName + " drinks beer.")
//   : console.log(firstName + " drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";

// console.log(drink);

// // Switch statment
// var job = "instructor";

// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teaches kids how to code.");
//     break;
//   case "driver":
//     console.log(firstName + " drives an uber in Lisbon.");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful website");
//     break;
//   default:
//     console.log(firstName + " does something else.");
// }

// var age = 22;

// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case age < 20 && age >= 13:
//     console.log(firstName + " is a teenager.");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a young man.");
//     break;
//   default:
//     console.log(firstName + " is a man.");
// }

// // falsy values: undefined, null, 0, '', NaN
// // truthy values: NOT falsy values

// let height;

// height = 23;

// if (height || height === 0) {
//   console.log("Variable is defined");
// } else {
//   console.log("Variable has NOT been defined");
// }

// // Equality operators
// if (height === "23") {
//   console.log("The == operator does type coercion!");
// }

// // CODING CHALLENGE 2
// let johnScores = [89, 120, 103];
// let mikeScores = [116, 94, 123];
// let maryScores = [97, 134, 105];

// function calculateAverages(scores) {
//   let average = 0;
//   scores.forEach((score) => {
//     average += score;
//   });
//   return average / scores.length;
// }

// console.log("JOHN'S SCORES: ", calculateAverages(johnScores));
// console.log("MIKE'S SCORES: ", calculateAverages(mikeScores));
// console.log("MARY'S SCORES: ", calculateAverages(maryScores));

// switch (true) {
//   case calculateAverages(johnScores) === calculateAverages(mikeScores) &&
//     calculateAverages(johnScores) === calculateAverages(maryScores):
//     console.log(
//       "All teams tied with an average score of ",
//       calculateAverages(johnScores)
//     );
//     break;
//   case calculateAverages(johnScores) > calculateAverages(mikeScores) &&
//     calculateAverages(johnScores) > calculateAverages(maryScores):
//     console.log(
//       "John wins with an average score of: ",
//       calculateAverages(johnScores)
//     );
//     break;
//   case calculateAverages(johnScores) < calculateAverages(mikeScores) &&
//     calculateAverages(maryScores) < calculateAverages(mikeScores):
//     console.log(
//       "Mike wins with an average score of: ",
//       calculateAverages(mikeScores)
//     );
//     break;
//   case calculateAverages(johnScores) < calculateAverages(maryScores) &&
//     calculateAverages(mikeScores) < calculateAverages(maryScores):
//     console.log(
//       "Mary wins with an average score of: ",
//       calculateAverages(maryScores)
//     );
//     break;
//   default:
//     break;
// }

// // FUNCTIONS

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// let ageJohn = calculateAge(1990);
// let ageMike = calculateAge(1948);
// let ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years.");
//   } else {
//     console.log(firstName + " is already retired.");
//   }
// }

// yearsUntilRetirement(1990, "John");
// yearsUntilRetirement(1948, "Mike");
// yearsUntilRetirement(1969, "Jane");

// // FUNCTION STATEMENTS AND EXPRESSIONS

// //function declaration
// // function whatDoYouDo(job, firstName) {}

// // function expression
// let whatDoYouDo = function (job, firstName) {
//   switch (job) {
//     case "teacher":
//       return firstName + " teaches kids how to code";
//     case "driver":
//       return firstName + " drives a cab in Lisbon.";
//     case "designer":
//       return firstName + " designs beautiful websites.";
//     default:
//       return firstName + " does something else.";
//   }
// };

// console.log(whatDoYouDo("teacher", "John"));
// console.log(whatDoYouDo("designer", "Jane"));
// console.log(whatDoYouDo("retired", "Mark"));

// // ARRAYS

// // initialize new array
// let names = ["John", "Mark", "Jane"];
// let years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names.length);

// // Mutate array data
// names[1] = "Ben";
// names[names.length] = "Mary";

// console.log(names);

// // different data types
// var john = ["John", "Smith", 1990, "designer", false];

// john.push("blue");
// john.unshift("Mr.");

// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(23));

// var isDesigner =
//   john.indexOf("designer") === -1
//     ? "John is NOT a designer"
//     : "John IS a designer";

// console.log(isDesigner);

// // CODING CHALLENGE 3
// let restBills = [124, 48, 268];
// let allTips = [];
// let allFinalAmounts = [];

// let calculateTip = function (bill) {
//   switch (true) {
//     case bill < 50:
//       return bill * 0.2;
//     case bill > 50 && bill < 200:
//       return bill * 0.15;
//     case bill > 200:
//       return bill * 0.1;
//     default:
//       break;
//   }
// };
// console.log("LOOK HERE:", calculateTip(30));
// console.log("LOOK HERE:", calculateTip(250));
// console.log("LOOK HERE:", calculateTip(100));

// restBills.forEach(bill => {
//   allTips.push(calculateTip(bill))
//   allFinalAmounts.push(bill + calculateTip(bill))
// });

// console.log("TIPS: ", allTips)
// console.log("FINAL AMOUNTS: ", allFinalAmounts)

// // OBJECTS AND PROPERTIES

// // Object literal
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// };

// console.log(john.firstName)
// var x = 'birthYear';
// console.log(john['lastName'])
// console.log(john[x])

// john.job = 'designer';
// john['isMarried'] = true;

// console.log(john)

// // new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthyear = 1969;
// jane['lastName'] = 'Smith'

// console.log(jane)

// // OBJECTS AND METHODS

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2018 - this.birthYear;
//   }
// };

// // john.calcAge()

// console.log(john)

// let john = {
//   name: "John",
//   massInKg: 92,
//   heightInMeters: 1.95,
//   calculateBMI: function () {
//     this.BMI = this.massInKg / (this.heightInMeters * this.heightInMeters);
//     return this.BMI
//   },
// };

// let mark = {
//   name: "Mark",
//   massInKg: 78,
//   heightInMeters: 1.69,
//   calculateBMI: function () {
//     this.BMI = this.massInKg / (this.heightInMeters * this.heightInMeters);
//     return this.BMI
//   },
// };

// // john.calculateBMI();
// // mark.calculateBMI();

// if (john.calculateBMI() > mark.calculateBMI()) {
//   console.log("John: ", john.BMI);
// } else if (john.BMI < mark.BMI) {
//   console.log("Mark: ", mark.BMI);
// } else {
//   console.log("John and Mark have the same BMI", john.BMI)
// }


// LOOPS AND ITERATION

// For loop

for (var i = 0; i <= 20; i+=2) {
  console.log(i)
}

var john = ["John", "Smith", 1990, "designer", false];


// //for loop
// for (let index = 0; index < john.length; index++) {
//   console.log(john[index]);
// }

// // while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i])
//   i++
// }

// // continue and break statements
// for (let index = 0; index < john.length; index++) {
//   if (typeof john[index] !== 'string') continue;
//   console.log(john[index])
// }

// for (let index = 0; index < john.length; index++) {
//   if (typeof john[index] !== 'string') break;
//   console.log(john[index])
// }

// // Looping backwards
// for (let index = john.length - 1; index >= 0; index--) {
//   console.log(john[index]);  
// }


// CODING CHALLENGE 5

