var express = require ('express');
var app = express();
var morgan =require('morgan');
var mongoose=require('mongoose');
var port = process.env.PORT || 8888;

app.use(morgan('dev'));

// app.get('/home', function(req,res){
//     res.send('hello from the BACK !');
// });
mongoose.connect('mongodb://localhost:27017/getMEANrequest', function(err){
    if (err) {
        console.log('Database not on the AIR' + err);
    } else {
        console.log('Database on the AIR');
    }
});

app.listen(port, function(){
    console.log('The server is Running on port '+ port);
});