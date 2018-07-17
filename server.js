var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var strinifyFile;

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
  fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    strinifyFile = data;
    res.send(data);
  })
})

app.post('/updateNote/:note', function(req, res){
  fs.readFile('./test.json', 'utf8', function(err, data){
    strinifyFile = data + req.params.note;
    fs.writeFile('./test.json', strinifyFile , function(err){
      if (err) throw err;
      console.log('file uploaded')
      res.send(strinifyFile);
    });
  });
});

app.listen(3000);