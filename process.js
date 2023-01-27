const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    port:3306,
    database:'testing',
    user:'root',
    password:'mysql'
});

var database_connection_status='';

connection.connect(function(error){
    if(error){
        console.log("Unsucessful");

    }else{
        console.log("Sucessful");

    }
})


const app=express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




app.get('/',function(request,respone,next){
    respone.render("home");
});


app.post('/', function(request, response, next){

	response.send(request.body);

});
app.listen(3000,function(req,res){
    console.log("server started at post 3000");
});

