var fs = require('fs');

var ws = fs.createWriteStream('hello4.txt');

ws.once('open', () => {
  console.log('stream is on')
})
ws.once('close', () => {
  console.log('stream is closed')
});

ws.write('写入写入写入1');
ws.write('写入写入写入2');
ws.write('写入写入写入3');
ws.write('写入写入写入4');
ws.write('写入写入写入5');

ws.close();