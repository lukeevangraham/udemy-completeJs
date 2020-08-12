//////////////////////
// // Function constructor
// var john = {
//   name: "John",
//   yearOfBrith: 1990,
//   job: "teacher",
// };

// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge= function() {
//     console.log(2016 - this.yearOfBirth)
// }

// Person.prototype.lastName = "Smith";

// var john = new Person("John", 1990, "teacher");

// var jane = new Person("Jane", 1969, "designer");
// var mark = new Person("Mark", 1948, "retired");

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName)
// console.log(jane.lastName)
// console.log(mark.lastName)

// // ******************
// //Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth)
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto,
//     {
//         name: { value: 'Jane'},
//         yearOfBirth: { value: 1969},
//         job: { value: 'designer'}
//     })

// // **************
// // Primitives vs objects

// // Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a)
// console.log(b)

// // Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age)
// console.log(obj2.age)

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city)

// ///////////////////////////
// // Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2016 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge)
// var maxRates = arrayCalc(ages, maxHeartRate)

// console.log(ages);
// console.log(fullAges)
// console.log(maxRates)

// ////////////////////////
// // Functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ", can you please explain what UX design is?")
//         }

//     }else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?')
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Jane');
// designerQuestion('Mark');
// designerQuestion('Mike');

// interviewQuestion('teacher')('Mark')

// ///////////////////
// // IIFE
// // Immediately invoked function expressions

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// // console.log(score);

// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

// ///////////////////
// // Closures

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);

// retirement(66)(1990);

// function interviewQuestion(job) {
//   return function (name) {
//     if (job === "designer") {
//       console.log(name + ", can you please explain what UX design is?");
//     } else if (job === "teacher") {
//       console.log("What subject do you teach, " + name + "?");
//     } else {
//       console.log("Hello " + name + ", what do you do?");
//     }
//   };
// }

// var designerQuestion = interviewQuestion("designer");
// var otherQuestion = interviewQuestion("other");
// var teacherQuestion = interviewQuestion("teacher");

// teacherQuestion("Fred");
// designerQuestion("Rita");
// otherQuestion("Dominic");

// //////////////////////////
// // BIND CALL AND APPLY METHODS

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log("Good " + timeOfDay + ", Ladies and gentlemen! I'm " + this.name + ", I'm a " + this.job + " and I'm " + this.age + " years old.");
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' + this.name + ", I'm a " + this.job + " and I'm " + this.age + " years old. Have a nice " + timeOfDay + '.');
//         }
//     }
// };

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// }

// john.presentation('formal', 'morning');

// john.presentation.call(emily, 'friendly', 'afternoon')

// // john.presentation.apply(emily, ['friendly', 'afternoon'])

// var johnFriendly = john.presentation.bind(john, "friendly")

// johnFriendly('morning')
// johnFriendly('night')

// var emilyFormal = john.presentation.bind(emily, 'formal');

// emilyFormal('noonday')

// //////////////////////
// // CODING CHALLENGE

(function () {
  let randomQuestionIndex;

  var Question = function (questionText, answers, rightAnswer) {
    this.questionText = questionText;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
  };

  Question.prototype.showQuestion = function () {
    // let randNum = Math.round(Math.random() * 2)
    console.log(this.questionText);
    for (i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function (input) {
    if (input == this.rightAnswer) {
      console.log("THAT'S RIGHT!");
    } else {
      console.log("Nope :(");
    }
  };

  var q1 = new Question(
    "The country with the third largest population is: ",
    ["United States", "China", "Mexico"],
    0
  );
  var q2 = new Question(
    "The country with the largest geographic space is: ",
    ["Canada", "Russia", "Australia"],
    1
  );
  var q3 = new Question(
    "This country welcomes the most tourists annually: ",
    ["Italy", "France", "United States"],
    1
  );

  let questionArray = [q1, q2, q3];

  // console.log(questionArray[Math.round(Math.random() * 2)])

  randomQuestionIndex = Math.round(Math.random() * 2);

  questionArray[randomQuestionIndex].showQuestion();
  // questionArray[randomQuestionIndex].showQuestion()
  let input = prompt("Enter the correct answer: ");

  questionArray[randomQuestionIndex].checkAnswer(input);
})();
