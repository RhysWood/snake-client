const { connect } = require("./client");
const { setupInput } = require("./input");

//logs "connecting" before attempting to connect
console.log("Connecting ...");

setupInput(connect());  //passes the connect function as an argument for the input- connection now = connect();