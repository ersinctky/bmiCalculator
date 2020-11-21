const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded,({extended:true}));



app.get('/',function(req,res){
res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post('/',function(req,res){
var boy = Number(req.body.boy);
var kilo = Number(req.body.kilo);
var sonuc = kilo/(boy*boy);
res.send("sonuc "+sonuc.toFixed(2));
});

app.listen(3000,function(){

console.log("server is runnig");

});
