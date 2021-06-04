module.exports = {

  mul:function (x, y) {
    return x * y;
  },

  Hello:function () {
    var name;
    this.setName = function (thyName) {
      name = thyName;
    };
    this.sayHello = function () {
      console.log('Hello ' + name);
    };
  }
}
