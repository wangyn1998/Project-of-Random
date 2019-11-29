var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/user', function(req, res, next) {
  res.render('User/user', { title: 'Express' });
});
router.get('/block', function(req, res, next) {
  res.render('Block/block', { title: 'Express' });
});
router.get('/block/post', function(req, res, next) {
  res.render('Block/post', { title: 'Express' });
});
// 展示话题页
router.get('/block/topic', function(req, res, next) {
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from topic",function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Block/topic",{topicList:result});
    }
  });
});
//删除话题
router.get("/deltopic",function (req,res,next) {
  var topicId=req.query.id;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from topic where topicId=?",[topicId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Block/topicdel",{topicList:result});
    }
  });
})
//添加话题
router.post('/addtopic',function (req,res,next) {
    let now='';
    function getDate(){
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        var date = myDate.getDate();
        now = year + '-' + conver(month) + "-" + conver(date);
    }
    function conver(s) {
        return s < 10 ? '0' + s : s;
    }
    getDate();
    var name=req.body.name;
    var content=req.body.content;
    var con=mysql.createConnection(dbconfig);
    con.connect();
    con.query("insert into topic(topicContent,adminUsername,topicTime) values(?,?,?)",[content,name,now],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Block/topicadd",{topicList:result});
    }
  });
});
//找到id值
let topicId=0;
router.post("/topic",function (req,res,next) {
  topicId=req.body.topic;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  console.log(topicId);
  con.query("select * from topic",function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Block/bianji",{topicList:result});
    }
  });
})
// 编辑话题页面
router.post("/update",function (req,res,next) {
  var adminUsername=req.body.name1;
  var topicContent=req.body.content1;
  var con=mysql.createConnection(dbconfig);
  con.connect(); 
  con.query("update topic set topicContent=?,adminUsername=? where topicId=?",[topicContent,adminUsername,topicId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Block/topicnew",{topicList:result});
    }
  });
})
router.get('/score', function(req, res, next) {
  res.render('Score/score', { title: 'Express' });
});
router.get('/score/list', function(req, res, next) {
  res.render('Score/list', { title: 'Express' });
});
router.get('/score/manage', function(req, res, next) {
  res.render('Score/manage', { title: 'Express' });
});
router.get('/score/list/listIn', function(req, res, next) {
  res.render('Score/listIn', { title: 'Express' });
});
router.get('/material', function(req, res, next) {
  res.render('Material/material', { title: 'Express' });
});
router.get('/material/method', function(req, res, next) {
  res.render('Material/method', { title: 'Express' });
});
router.get('/material/spot', function(req, res, next) {
  res.render('Material/spot', { title: 'Express' });
});
router.get('/system', function(req, res, next) {
  res.render('System/system', { title: 'Express' });
});

module.exports = router;
