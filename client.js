const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to the game server");
    conn.write('Name: RHW');
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};