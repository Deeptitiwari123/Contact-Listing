var express = require('express');
mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
  //connection to db - mysql
  
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'demo'
 });
 connection.connect(function(err){

 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
    // for Select the the data
  connection.query("SELECT * FROM user_registration", function (err, result, fields, res) {
    if (err) throw err;
    console.log(result);
    response=result;
    var data =res.json(response);
  // res.send(response);

  });

   connection.end();

 });


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.get('/myapp', function(req,res)
{
  console.log("I recieve a get request")
});
console.log('server running on port 3000');