var fs = require('fs');

// 同步文件写入

var txt = fs.openSync('hello.txt', 'w');
console.log(txt);

fs.writeSync(txt, '今天天气真不错~~~~~~');

fs.closeSync(txt);