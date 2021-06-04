var fs = require('fs');

  fs.writeFile('hello3.txt', '1', {
    flag: 'a'
  }, (err) => {
    if (!err) {
      console.log('success');
    }
  });
