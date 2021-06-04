var str = 'hello 罗';

// 存储的二进制数据
var buf = Buffer.from(str);
console.log(buf);
console.log(buf.length);
console.log(str.length);
console.log('---------------');
var buf2 = new Buffer.alloc(10);
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0;
buf2[3] = 0xaa;
// 556转换为2进制之后只会存储8位
buf2[4] = 556;
console.log(buf2);
console.log(buf2[3].toString(2));
console.log('---------------');
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);