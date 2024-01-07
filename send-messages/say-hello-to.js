const {sayMessage} = require("../messages/say-message");

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}
module.exports.sayHelloTo = sayHelloTo;

sayHelloTo("Woody");

module.exports.sayHelloTo = sayHelloTo;


