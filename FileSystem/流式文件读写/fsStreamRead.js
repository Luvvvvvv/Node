var fs = require('fs');

var rs = fs.createReadStream('a.jpg');
var ws = fs.createWriteStream('c.png');

rs.once('open', () => {
  console.log('readStream is on')
});

rs.once('close', () => {
  console.log('readStream is closed')
  ws.close();
});

ws.once('open', () => {
  console.log('writeStream is on')
});

// rs.on('data', (data) => {
//   ws.write(data)
// });

// 使用pipe()将可读流与可写流连接
rs.pipe(ws);