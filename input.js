let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin; 
  stdin.setRawMode(true);
  stdin.setEncoding("utf8"); //sets the language to the universal codeed character set
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') { // if ctrl C is pressed
    process.exit(); //exit the game
  }
  if (key === 'w') { 
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'g') {
    connection.write('Say: Gud game loser!');
  }
  if (key === 'c') {
    connection.write('Say: Come here ya lil dot!');
  }
};

module.exports = {setupInput, handleUserInput};
