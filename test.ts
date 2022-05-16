// let a = {
//   name: 'wasif',
//   age: 27,
//   printPerson: function () {
//     console.log(`${this.name} + ${this.age} check irr out`);
//   },
// };

// a.printPerson();

console.log('1');

// let a = setInterval(() => {
//   console.log('interval');
// }, 2000);

// clearInterval(a);
setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');
