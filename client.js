const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });  

  conn.on('connect', () => {
    console.log("Successfully connected to the game server")
    conn.write('Name: RHW')
  })

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write('Move: down')
  //   }, 1000);
  //   // conn.write('Move: down')
  // })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;