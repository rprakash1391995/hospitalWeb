var express = require('express');
var app = express();

app.get('/',(req,res) =>{
    res.render('hospitalwebsite')
});

var port = process.env.PORT || 8080
app.listen(port, () =>{
    console.log("app running");
})



