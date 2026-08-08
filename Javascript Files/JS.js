// function CountTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }
// let array = [0, null, undefined, "", 2, 3];
// console.log(CountTruthy(array));

// //____________________________________________________________

// function ShowProperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
// }
// //____________________________________________________________

// const movie = {
//   title: "a",
//   director: "b",
//   releaseYear: 2018,
// };
// ShowProperties(movie);

// //____________________________________________________________

// function SumOfMultiples(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
//   return sum;
// }

// console.log(SumOfMultiples(10));

// //____________________________________________________________

// // 1-59 -> f
// // 60-69 -> D
// // 70-79 -> C
// // 80-89 -> B
// // 90-100 -> A

// function CalculateGrade(marks) {
//   let Average = 0;
//   for (let mark of marks) Average += mark;
//   Average = Average / marks.length;
//   if (Average < 60) return "F";
//   if (Average < 70) return "D";
//   if (Average < 80) return "C";
//   if (Average < 90) return "B";
//   return "A";
// }

// const marks = [80, 80, 50];
// console.log(CalculateGrade(marks));

// //Count Truthy Values

// function CountTruthy(array) {
//   let counter = 0;
//   for (let value of array) if (value) counter++;
//   return counter;
// }

// let array1 = [19, 15, 0, "", "Amir", true];
// console.log(CountTruthy(array1));

// //____________________________________________________________

// function showProperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === "string") console.log(key, ":", obj[key]);
// }

// let movie1 = {
//   Name: "Inception",
//   year: 2015,
//   Director: "Nolan",
// };

// console.log(showProperties(movie1));

// //____________________________________________________________

// //Sm of multiplies of 3 & 5

// function Sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
//   return sum;
// }
// console.log(Sum(10));

// //____________________________________________________________

// //Show Stars

// function showStars(rows) {
//   let str = "";
//   for (let i = 1; i <= rows; i++) {
//     for (let j = 0; j < i; j++) str += "*";
//     console.log(str);
//     str = "";
//   }
// }
// showStars(5);

// //____________________________________________________________

// //Show Prime Numbers

// function ShowPrime(limit) {
//   let isPrime = true;
//   for (let i = 2; i <= limit; i++) {
//     for (let j = 2; j <= i / 2; j++) {
//       if (i % j == 0) isPrime = false;
//     }

//     if (isPrime) console.log(i);
//     isPrime = true;
//   }
// }

// ShowPrime(20);

// //____________________________________________________________

// fnction = {
//   isPrime: function (number) {
//     for (let i = 2; i < number / 2; i++) if (number % i == 0) return false;
//     return true;
//   },
// };

// console.log(fnction.isPrime(10));
// // console.log(isPrime(9));

// //____________________________________________________________

// //Circle obeject

// function createCircle(radius) {
//   ((this.radius = radius),
//     (this.draw = function () {
//       console.log("dra");
//     }));
// }
// const Circle = new createCircle(2);
// Circle.draw();

// //____________________________________________________________

// const circle1 = {
//   radius: 2,
//   draw() {
//     console.log("draw");
//   },
// };

// // for(let key in circle){
// //   console.log(key, circle[key]);
// // }

// for (let key of Object.keys(circle1)) console.log(key);

// if ("radius" in circle1) console.log("yes");

// //____________________________________________________________

// const circle1 = {
//   radius: 2,
//   draw() {
//     console.log("draw");
//   },
// };

// const another = { ...circle1 };

// for (let key in circle1) another[key] = circle1[key];

// Object.assign(another, circle1);

// console.log(another["radius"]);

//______________________________________________________________

// function getRandomInt(max){
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(10));

//_______________________________________________________________

// let msg = 'this is my first message';

// const array = msg.split(' ');

// console.log(array);

//_______________________________________________________________

//Template literal

// const name = 'John';

// const msg =
// `Hi ${name}

// thanks for joining the group

// Regards, Amir`;

// console.log(msg);

//______________________________________________________________

// Date

// const date0 = new Date(2026, 2, 8, 11, 5, 15, 35);

// const date = new Date();
// //console.log(date.toLocaleTimeString());

// console.log(date0);

//____________________________________________________________

//Address Exersice
//Street  -  City  -  zipCode
//ShowAddress(address)

// function showAddress(obj){
//     for(let key in obj){
//         console.log(key, ':', obj [key]);
//     }
// }

// obj = {
//     Street : 'Hemat',
//     City : 'Tehran',
//     zipCode : 4716765369
// };

// showAddress(obj);

//______________________________________________________________

//Create Address object with Factory Function and Constructive Function

// function createAddress(Street, City, zipCode) {
//     return{
//         Street,
//         City,
//         zipCode
//     };
// }

// function CreateAddress(Street, City, zipCode) {
//     this.Street = Street;
//     this.City = City;
//     this.zipCode = zipCode;
// }

// const address1 = createAddress('hemat','tehran',4716765369);

// const address2 = new CreateAddress('hemat','tehran',4716765369);

// console.log(address1);
// console.log(address2);

//____________________________________________________________

// function CreateAddress(Street, City, zipCode) {
//   this.Street = Street;
//   this.City = City;
//   this.zipCode = zipCode;
// }

// const address1 = new CreateAddress("hemat", "tehran", 4716765369);
// const address2 = new CreateAddress("hemat", "tehran", 4716765369);

// function areEqual(address1, address2) {
//     for(let key in address1){
//         if(address1[key] != address2[key])
//             return false;
//     }
//     return true;
// }

// console.log(areEqual(address1,address2))

// function areSame(address1, address2) {
//     return address1 === address2;
// }

//_________________________________________________________

//Blog Post Object
// Title - Author - Body - Views - Comments(Author - Body) - isLive

// const BlogPost = {
//     Title : 'First Blog',

//     Author : 'Amir',

//     Body :
//     `Hello, My Name Is Amir
//     This is my First Blog of my life
//     Welcome To my World`,

//     Views : 1253,

//     Comments : [{Author : 'a',Comment : 'b'}],

//     isLive : true
// };

//___________________________________________________________

//Constructive Function For creating Blog Post Object

// function CreateBlogPost(Title, Body, Author, isPublic) {
//   this.Title = Title;
//   this.Body = Body;
//   this.Author = Author;
//   this.Views = 0;
//   this.Comments = [];
//   this.isLive = false;
//   this.isPublic = isPublic;
// }

// let post = new CreateBlogPost("a", "b", "c");

//________________________________________________________

//Adding Number to an array

// const number = [3, 4];

// const number2 = [5, 6];

// //Add To First

// number.unshift(1, 2);

// //Add To End

// number.push(5, 6);

// //Add to Middle

// number.splice(2, 0, 3, 3, 3, 3);

// //number.splice(start_index, number of elements that you want to delete, new elements)

// console.log(number);

//______________________________________________________

//Finding Elements in an array

// const array = [1, 2, 3, 1, 4];

// console.log(array.indexOf(1));
// console.log(array.lastIndexOf(1));
// console.log(array.includes(1));

//______________________________________________________

//Finding Refrencing values in an array

// const courses = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
// ];

// const course = courses.find(function (course) {
//   return course.name === "B";
// });

// console.log(course);

//______________________________________________________

//Arrow Functions

// const courses = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
// ];

// const course = courses.find((course) => course.name === "A");

// console.log(course);

//___________________________________________________

//Removing Element

// const array = [1, 2, 3, 4];

// //End

// const last = array.pop();
// console.log(array);
// console.log(last);

// //Begginig

// const first = array.shift();
// console.log(array);
// console.log(first);

//Middle

// array.splice(1, 2);

// console.log(array);

//__________________________________________________

// let numbers = [1, 2, 3, 4, 5, 6];

// Emptying an Array

// Soloution 1 not recomended

// numbers = [];

// Soloution 2

// numbers.length = 0;

//Soloution 3

// numbers.splice(0, numbers.length);

//Soloution 4

// while (numbers.length > 0) numbers.pop();

// console.log(numbers);

//___________________________________________________

// const nums1 = [0, 1, 2, 3, 4];
// const nums2 = [...nums1];

// let nums3 = nums1.slice(1, 4);
// console.log(nums2);

//__________________________________________________

//Combining and Slicing

// const nums = [1, 2, 3, 4, 5, 6];
// const num1 = [7, 8, 9];

// const combined = [...nums, ...num1];

// const sliced = combined.slice(3);

// console.log(sliced);
// console.log(combined);

//_________________________________________________

//itterating an array

// const nums = [1, 2, 3, 4, 5, 6];

// nums.forEach((num) => console.log(num));

// const joined = nums.join(",");

// console.log(joined);

// const spread = joined.split(",");

// console.log(spread);

//__________________________________________________

// Sort

// const nums = [2, 1, 4, 3, 6, 5];

// const sorted = nums.sort();

// console.log(sorted);

// const reversed = sorted.reverse();

// console.log(reversed);

//________________________________________________

//ArrayFromRange

// function arrayFromRange(min, max) {
//   const result = [];
//   for (let i = min; i <= max; i++) result.push(i);
//   return result;
// }

// const nums = arrayFromRange(-10, -4);
// console.log(nums);

//________________________________________________

//Include method

// function my_Includes(value, array) {
//   for (let num of array) if (value === num) return true;
//   return false;
// }

// const array = [3, 4, 5, 6, 7];

// console.log(my_Includes(8, array));

//_________________________________________________

//Except Function

// function except(array, excluded) {
//   const output = [];

//   for (let element of array) {
//     if (excluded.includes(element)) continue;
//     else output.push(element);
//   }
//   return output;
// }

// const array = [2, 3, 3, 4, 5, 3, 6, 7, 2, 2, 2];
// console.log(except(array, [2, 3]));

//__________________________________________________

//Move

// function move(array, index, offset) {
//   let backup = array[index];
//   array.splice(index, 1);
//   array.splice(offset, 0, backup);
//   return array;
// }

// const array0 = [1, 2, 3, 4];

// console.log(move(array0, 0, 2));

//__________________________________________________

//CountOccurances

// function CountOccurrances(array, SearchElement) {
//   let count = 0;
//   for (let element of array) {
//     if (element === SearchElement) count++;
//   }
//   return count;
// }
// const array = [2, 3, 3, 4, 5, 3, 6, 7, 2, 2, 2];

// console.log(CountOccurrances(array, 2));

//_________________________________________________

//GetMax

// function getMax(array) {
//   return array.reduce((a, b) => (b > a ? b : a));
// }

// const array0 = [1, 2, 5, 8, 4, 3, 8];

// console.log(getMax(array0));

//________________________________________________

// function sum(...args) {
//   return args.reduce((sum, current) => sum + current);
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//_________________________________________________
// function sum(...Args) {
//   let sum = 0;
//   for (let i = 0; i < Args.length; i++)
//     if (Array.isArray(Args[i])) sum += Args[i].reduce((a, b) => (b = b + a));
//     else sum += Args[i];
//   // Args.reduce((a, b) => (b = b + a))
//   return sum;
// }

// const result = sum([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);

// console.log(result);
//___________________________________________________
