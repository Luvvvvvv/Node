var fs = require('fs');

fs.open('hello2.txt', 'w', (err, fd) => {
  if (!err) {
    fs.write(fd, '异步操作~~~~~~~', (err) => {
      if (!err) {
        console.log('success');
      }
      fs.close(fd, (err) => {
        if (!err) {
          console.log('closed')
        }
      })
    });
  } else {
    console.log(err);
  }
});