const express = require('express');
const app = express();
const port = 4000;

app.listen(port, ()=> {
    console.log('Success!');
});

app.use(express('.'));

// app.get('/card', function(req, res){
// rendering a view from https://github.com/expressjs/express/blob/master/Readme.md
//    res.render('./api/index');
//  });