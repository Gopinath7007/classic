
var express = require('express');
var mysql=require('mysql');
var app = express();
var http =require('http');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});


app.get('/user/:id?', function userIdHandler(req, res) {
  console.log(req.route);
  
  res.send(id);
});

app.get('/book/:id?',function(req,res){


  var id = req.query.id;

/*var t=req.query.id;
console.log(t);
*/    var data = {
        "error":1,
        "Books":""
    };
    var t=1;
    connection.query("SELECT * from mytest where id="+id+"",function(err, rows, fields){
        if(rows.length != 0){
            data["error"] = 0;
            data["Books"] = rows;
            res.json(data);
        }else{
            data["Books"] = 'No books Found..';
            res.json(data);
        }
    });
});



  

 app.get("/users/:name/:email",function(req,res){
               var email =req.params.email; 
        var name = req.params.name;
        connection.query("INSERT INTO mytest VALUES('',?,?)",[name,email],function(err, rows, fields){
               if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });



app.post('/book',function(req,res){



var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
    var name= req.data.name;
    var email = req.data.email;
    
    var data = {
        "error":1,
        "Books":""
    };


    if(!!name && !!email){
        connection.query("INSERT INTO mytest VALUES('',?,?)",[name,email],function(err, rows, fields){
            if(!!err){
                data["Books"] = "Error Adding data";
            }else{
                data["error"] = 0;
                data["Books"] = "Book Added Successfully";
            }
            res.json(data);
        });
    }else{
        data["Books"] = "Please provide all required data (i.e : Bookname, Authorname, Price)";
        res.json(data);
    }
});




app.get('/wines', function(req, res) {
   


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
connection.connect();

connection.query('SELECT * from mytest', function(req,res) {
  if (res)
  {
//res.setHeader("Content-Type", "text/html");

res.format(object);
res.send(res);
}
  else
 {

  console.log('Error while performing Query.'+err);

 } 
});

connection.end();

 //res.send([{name:'wine1'}, {name:res[0].name}]);
});
app.get('/wines/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(3000);
console.log('Listening on port 3000...');

/*
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
connection.connect();

connection.query('SELECT * from mytest', function(err, rows, fields) {
  if (!err)
  {
  	  console.log('Success'+rows);
}
  else
 {

  console.log('Error while performing Query.'+err);

 } 
});

connection.end();*/
