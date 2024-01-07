const sayHello = require("./hello-message");

const helloMessage = sayHello.helloMessage;

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

module.exports.sayMessage= sayMessage;