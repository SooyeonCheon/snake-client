const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: CSY');
  });

// conn.on('connect', () => {
//   // setTimeout(() => {conn.write('Move: up')}, 2000);
//   setInterval(() => {
//     conn.write('Move: up');
//   }, 50);
// })

  conn.on('data', (data) => {
    console.log('data: ', data);
  })

  return conn;
};


module.exports = connect;