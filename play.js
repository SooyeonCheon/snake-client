const net = require("net");
const connect = require('./client');




console.log("Connecting ...");
connect();

/*
connect.on("connect", (data) => {
  // code that does something when the connection is first established
  console.log(data);
});
*/