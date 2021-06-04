var m = require('./mul');
console.log(m.mul(20, 20));

var Hello = require('./hello');
h1 = new Hello();
h1.setName('luv');
h1.sayHello();

// hello+sayHi output

var hs = require('./hello&mul');
console.log(hs.mul(10, 20));

h2 = new hs.Hello();
h2.setName('hon');
h2.sayHello();