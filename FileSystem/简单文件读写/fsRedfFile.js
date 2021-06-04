var fs = require('fs');


var path='C:/Users/Luv/Desktop/图片/virgo.png';

fs.readFile(path, (err, data) => {
  if (!err) {
    console.log(data);
    fs.writeFile('a.jpg',data,(err)=>{
      if(!err){
        console.log('success');
      }
    })
  }
});