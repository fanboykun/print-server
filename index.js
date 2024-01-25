const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // let a = []
    const obj1 = {
        type: 0,
        content: 'My Title',
        bold: 1, 
        align: 2,
        format: 3
    };
    a.push(obj1)
  res.json(obj1);
  // res.json(a);
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
