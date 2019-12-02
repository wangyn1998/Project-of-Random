var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/user', function(req, res, next) {
  //数据库的连接
  var con=mysql.createConnection(dbconfig);
  //连接
  con.connect();
  //进行操作(sql语句变化)
  con.query("select * from user",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      //显示到页面--渲染方法--render,
      res.render("User/user",{userList:result});
    }
  })
});
router.get("/deleteuser",function(req,res,next){
  var userName=req.query.userName;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from user where userName=?",[userName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("User/shanchu",{ title: 'Express' })
      }
    })
})
router.post("/searchuser",function (req,res,next) {
  var userName=req.body.userName;
  var con=mysql.createConnection(dbconfig);
  con.connect(); 
  con.query("select * from user where userName=?",[userName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("User/searchuser",{userList:result,userName:userName});
    }
  })
})
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
   //数据库的连接
   var con=mysql.createConnection(dbconfig);
   //连接
   con.connect();
   //进行操作(sql语句变化)
   con.query("select * from score",function(err,result){
     if(err){
       console.log(err);
     }
     else{
       //显示到页面--渲染方法--render,
       res.render("Score/list",{scoreList:result});
     }
   })
});
router.get('/score/slist', function(req, res, next) {
  var userName=req.query.userName;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  //进行操作(sql语句变化)
  con.query("select * from slist where userName=?",[userName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Score/listIn",{slistList:result,userName:userName});
    }
  })
  
});
router.get('/score/manage', function(req, res, next) {
  //数据库的连接
  var con=mysql.createConnection(dbconfig);
  //连接
  con.connect();
  //进行操作(sql语句变化)
  con.query("select * from task",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      //显示到页面--渲染方法--render,
      res.render("Score/manage",{taskList:result});
    }
  })
});

router.get("/score/deletemanage",function(req,res,next){
  var taskId=req.query.taskId;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from task where taskId=?",[taskId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      //显示到页面--渲染方法--render,
      //进行操作(sql语句变化)
      // con.query("select * from user",function(err,result){
      //   if(err){
      //     console.log(err);
      //   }
      //   else{
      //     //显示到页面--渲染方法--render,
      //     res.render("User/user",{userList:result});
      //   }
      //   })
      res.render("Score/shanchu",{ title: 'Express' })
      }
    })
})
let taskId=0;
router.post("/task",function (req,res,next) {
  taskId=req.body.task;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  console.log(taskId);
  con.query("select * from task",function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Score/taskbianji",{taskList:result});
    }
  });
})
router.post("/task1",function (req,res,next) {
  taskId=req.body.task;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  console.log(taskId);
 
  con.query("select * from task where taskId=?",[taskId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Score/taskbianji1",{taskList:result});
    }
  });
})
router.post('/addtask',function (req,res,next) {
  var score=req.body.score;
  var content=req.body.content;
  console.log(score);
  console.log(content);

  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into task(taskContent,taskScore) values(?,?)",[content,score],function (err,result) {
  if(err){
    console.log(err);
  }else{  
    res.render("Score/addtask",{ title: 'Express' });
  }
});
});
router.post("/updatetask",function (req,res,next) {
  var taskContent=req.body.content1;
  var taskScore=req.body.score1;
  var con=mysql.createConnection(dbconfig);
  con.connect(); 
  con.query("update task set taskContent=?,taskScore=? where taskId=?",[taskContent,taskScore,taskId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Score/new",{ title: 'Express' });
    }
  });
})
router.post("/searchtask",function (req,res,next) {
  var taskId=req.body.taskId;
  var con=mysql.createConnection(dbconfig);
  con.connect(); 
  con.query("select * from task where taskId=?",[taskId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Score/searchtask",{taskList:result});
    }
  })
})
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
