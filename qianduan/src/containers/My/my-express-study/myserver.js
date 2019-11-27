const http = require('http');
var express = require('express');
var app = express();
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

app.post('/my/login', function (req, res) {  //接收POST请求
  let data = req.body;   //解析body中的信息
  console.log(data);
  let message1 = {success:true}
  let message2 = {success:false}
  if(data.user==='123'&&data.password==='123'){ //判断并返回结果
    res.send(message1);
  }
  else res.send(message2);
})

var server = app.listen(8001, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})