// var names = ['Picasso', 'Aaron', 'Betsy'];
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Picasso'));
//
// var person = {
//   name: 'Picasso',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();

var add = (a, b) => {
  return a + b;
}

var add2 = (a, b) => a + b;

console.log(add(4, 7));
console.log(add2(9, 8));
