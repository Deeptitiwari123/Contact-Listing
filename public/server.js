var express = require('express');
var app = express();
app.use(express.static(__dir,'/public'))
app.get('items',function(req,res)
{
	consol.log("I recieve a get request")

});
app.listen(3000);
console.log('server running on port 3000');

