console.log('start practice');
// console.log(parseInt('op'));
// console.log('\u00A9\u9773');
// var city = {};
// console.log(city.name);
// console.log(typeof city);

function Dog() {
  this.name = 'haba';
  this.age = 10;
}

var dog = new Dog();
// console.log(dog.name + ' ' + dog['age']);

Dog.prototype.eat = function (food) {
  // console.log(this.name + ' eat ' + food);
};

dog.eat('bone');


var bird = {
  name: 'lieying',
  age: 5,
  fly: function () {
    // console.log(this.name + ' fly');
  }
};
bird.l = 'l';

bird.fly();
// console.log(bird.l);


var date = new Date();
// console.log(date.toISOString());


var array = [1, 2, 7, 8];
for (var i in array) {
  // console.log(array[i]);
}
// console.log(i);
for (i = 0; i < array.length; i++) {
  // console.log(array[i]);
}


var pattern = new RegExp('student');
var string = 'i am a student.';
// console.log(string.search(pattern));
// console.log(string.replace(pattern, 'teacher'));


try {
  var r = 10 / 0;
  // console.log(r);
  // console.log(isNaN(r));
  // console.log(!isFinite( r));
  var k = new OP();
} catch (e) {
  // console.log('e: ' + e);
} finally {
  // console.log('finally');
}


// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);


var a = null;
console.log(a);
console.log(typeof a === 'object');



