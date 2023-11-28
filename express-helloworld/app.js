var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello lover!\n');
});

app.get('/mars', function(req, res){
  res.send('happy birthday!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

