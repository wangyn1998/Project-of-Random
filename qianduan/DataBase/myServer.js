const http = require('http');
const dbconfig = require('./dbconfig.json')
var express = require('express');
var app = express();
var mysql = require("mysql");
var bodyParser = require('body-parser');//引入body parser用于解析post的body

app.use(bodyParser.json());//使用body parser用于解析post的body
app.use(bodyParser.urlencoded({ extended: true }));//使用body parser用于解析post的body

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.static('public'));

app.get('/spot',function(req,res,next){
    console.log(req.url);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from spot where spotType=? ',[1],function(err,result){
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get('/fun',function(req,res,next){
    console.log(req.url);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from spot where spotType=? ',[2],function(err,result){
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get('/method',function(req,res,next){
    console.log(req.url);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from method ',function(err,result){
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get('/hot',function(req,res,next){
    console.log(req.url);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from hot ',function(err,result){
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get('/historic',function(req,res,next){
    console.log(req.url);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from historic ',function(err,result){
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get('/celebrity',function(req,res,next){
    console.log(req.url);
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from celebrity ',function(err,result){
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

var server = app.listen(8001, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
  })