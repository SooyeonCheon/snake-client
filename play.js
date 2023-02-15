const net = require("net");
const connect = require('./client');


console.log("Connecting ...");
connect();

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};


setupInput();