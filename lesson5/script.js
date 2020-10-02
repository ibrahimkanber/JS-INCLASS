// Iterators
// << forEach >> ================================================
// const numbers = [1, 3, 6, "Selam!", 7, 33, 2, { id: 0, name: "Ahmet" }, 4, 10];
// numbers.forEach((number) => {
//   console.log("number: " + number);
// });
// numbers.forEach(logNumbers);
// function logNumbers(n) {
//   console.log("number: " + n);
// }
// << map >> ================================================
// const numbers = [1, 3, 6, 7, 33, 2, 4, 10];
// const newNumbers = numbers.map((num) => {
//   return num * 2;
// });
// console.log(newNumbers);
// ================================================ 🔥
// << map vs foreach >>
// const users = [
//     { id: 0, name: "Jack", age: 20 },
//     { id: 1, name: "Milton", age: 34 },
//     { id: 2, name: "Arthur", age: 76 },
//     { id: 3, name: "Mercedes", age: 16 },
//     { id: 4, name: "Dave", age: 76 },
//   ];
//   // => forEach
//   const ageArray_1 = [];
//   users.forEach((us) => {
//     ageArray_1.push(us.age * 2);
//   });
//   console.log(ageArray_1);
//   // => map
//   const ageArray_2 = users.map((us) => us.age * 2);
//   console.log(ageArray_2);
// ================================================ 🔥
// << find >> ================================================
// const users = [
//   { id: 0, name: "Jack", age: 20 },
//   { id: 1, name: "Milton", age: 34 },
//   { id: 2, name: "Arthur", age: 76 },
//   { id: 3, name: "Mercedes", age: 16 },
//   { id: 4, name: "Dave", age: 76 },
// ];
// const myUser = users.find((user) => user.age === 76);
// const myUser = users.find((user) => user.age < 25);
// const myUser = users.find((user) => {
//   return user.age < 25;
// });
// console.log(myUser);
// << filter >> ================================================
// const myUsers = users.filter((user) => user.age < 25);
// console.log(myUsers);
// << reduce >> ================================================
// const myArray = [1, 3, 5, 6, 8];
// const sumOfNumbers = myArray.reduce((acc, curr) => {
//   console.log("acc: " + acc);
//   console.log("curr: " + curr);
//   return acc + curr;
// })
// ;
// console.log("sumOfNumbers:" + sumOfNumbers);
// 🔥 MAX
// const numbers = [9, 5, 65, 1, 77, 23, 24, 2];
// const max = numbers.reduce((acc, curr) => {
//   return acc > curr ? acc : curr;
// });
// console.log(max);
// << every , some >>
// const users = [
//   { id: 0, isOld: false, name: "Jack", age: 20 },
//   { id: 1, isOld: true, name: "Milton", age: 34 },
//   { id: 2, isOld: true, name: "Arthur", age: 76 },
//   { id: 3, isOld: false, name: "Mercedes", age: 16 },
//   { id: 4, isOld: true, name: "Dave", age: 76 },
// ];
// // Hepsi olmak zorunda
// console.log("every: " + users.every((user) => user.isOld === true));
// // Bir tane bile yeter
// console.log("some: " + users.some((user) => user.isOld === true));
// << for-in , for-of >>
const user = {
    id: 0,
    isOld: false,
    name: "Jack",
    age: 20,
  };
  // for (key in user) {
  //   console.log("key: " + key);
  //   console.log("value: " + user[key]);
  // }
  const userArray = [
    { id: 0, isOld: false, name: "Jack", age: 20 },
    { id: 1, isOld: true, name: "Milton", age: 34 },
    { id: 2, isOld: true, name: "Arthur", age: 76 },
    { id: 3, isOld: false, name: "Mercedes", age: 16 },
    { id: 4, isOld: true, name: "Dave", age: 76 },
  ];
  for (element of userArray) {
    
    console.log(element);
  }
  for (element of user) {
    console.log(element);
  }