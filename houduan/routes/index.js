var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var dbconfig=require('../config/dbconfig.json');
var login = false;
var user = "";
/* GET home page. */
//渲染登录页面
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});
//验证身份
router.post('/home', function(req,res,next) {
  var username = req.body.username;
  var password = req.body.pwd;
  var test = req.body.test;
  var testcode = req.body.testcode;
  user = username;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from alist",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i=0;i<result.length;i++){
        if(username == result[i].adminUsername && password == result[i].adminPwd){
          login=true;
          if(test == testcode){
            res.end("success");
          }
          else{
            res.end("codeerror");
          }
          break;
        }
        else{
          continue;
        }
      }
      if(login == false){
        res.end("error");
      }    
    }
  });
});
//展示首页
router.get('/home',function(req,res,next){
  var con=mysql.createConnection(dbconfig);
  con.connect();
  let now='';
  var time=new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  now = year + '-' + conver(month) + "-" + conver(date);
  function conver(s) {
      return s < 10 ? '0' + s : s;
  }
 
  con.query("select * from user;select * from user where Uday =?;select * from post",[now],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result[1]);
        res.render('home',{userListall:result[0],userListnew:result[1],postList:result[2]});
      }
    })
});

//展示用户列表页
router.get('/user', function(req, res, next) {
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from user",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("User/user",{userList:result});
    }
  })
});
//删除用户
router.get("/deleteuser",function(req,res,next){
  var Uphone=req.query.Uphone;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from user where Uphone=?",[Uphone],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("User/shanchu",{ title: 'Express' })
      }
  })
  con.query("delete from score where Uphone=?",[Uphone],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log('success')
      }
    })
    con.query("delete from slist where Uphone=?",[Uphone],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log('success')
        }
      })
})
//搜索用户
router.post("/searchuser",function (req,res,next) {
  var Uphone=req.body.Uphone;
  var con=mysql.createConnection(dbconfig);
  con.connect(); 
  con.query("select * from user where Uphone=?",[Uphone],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("User/searchuser",{userList:result,Uphone:Uphone});
    }
  })
})
router.get('/block', function(req, res, next) {
  res.render('Block/block', { title: 'Express' });
});
// 展示帖子管理页面
router.get('/block/post', function(req, res, next) {
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from post",function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Block/post",{postList:result});
    }
  });
});

// 删除帖子页面
router.get("/delpost",function (req,res,next) {
  var postId=req.query.id;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from post where postId=?",[postId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Block/postdel",{topicList:result});
    }
  });
});
// 展示帖子细节
router.get('/postdetail', function(req, res, next) {
  var postId=req.query.id;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from post where postId=?",[postId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Block/postdetail",{postList:result,postId:postId});
    }
  });
});
// 搜索帖子
router.post("/searchpost",function (req,res,next) {
  var userName=req.body.userName;
  var con=mysql.createConnection(dbconfig);
  console.log(userName);
  con.connect(); 
  con.query("select * from post where userName=?",[userName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Block/postsearchResult",{postList:result,userName:userName});
    }
  })
})
// 时间搜索帖子
router.post("/timesearchpost",function (req,res,next) {
  var postTime=req.body.postTime;
  var con=mysql.createConnection(dbconfig);
  console.log(postTime);
  con.connect(); 
  con.query("select * from post where postTime=?",[postTime],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Block/timesearchpostResult",{postList:result,postTime:postTime});
    }
  })
})
// 帖子回复
router.get('/postreply', function(req, res, next) {
  var con=mysql.createConnection(dbconfig);
  var postId=req.query.id;
  con.connect();
  con.query("select * from reply where postId=?",[postId],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.render("Block/postReply",{replyList:result});
    }
  });
});
// 回复删除
router.get("/delpostreply",function (req,res,next) {
  var replyId=req.query.id;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from reply where replyId=?",[replyId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Block/postReplydel",{replyList:result});
    }
  });
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
    var type=req.body.type;
    var con=mysql.createConnection(dbconfig);
    con.connect();
    con.query("insert into topic(topicContent,adminUsername,topicTime,topicType) values(?,?,?,?)",[content,name,now,type],function (err,result) {
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
});
// 编辑话题页面
// 编辑话题页面
router.post("/update",function (req,res,next) {
  var adminUsername=req.body.name1;
  var topicContent=req.body.content1;
  var topicType=req.body.type1;
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
  var con=mysql.createConnection(dbconfig);
  con.connect(); 
  con.query("update topic set topicContent=?,adminUsername=?,topicTime=?,topicSign=? where topicId=?",[topicContent,adminUsername,now,topicType,topicId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Block/topicnew",{topicList:result});
    }
  });
});
// 搜索话题
router.post("/searchtopic",function (req,res,next) {
  var topicContent=req.body.topicContent;
  var con=mysql.createConnection(dbconfig);
  con.connect(); 
  con.query("select * from topic where topicContent=?",[topicContent],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Block/topicsearchResult",{topicList:result,topicContent:topicContent});
    }
  })
});
//积分管理页
router.get('/score', function(req, res, next) {
  res.render('Score/score', { title: 'Express' });
});
//积分表页
router.get('/score/list', function(req, res, next) {
   var con=mysql.createConnection(dbconfig);
   con.connect();
   con.query("select * from score order by sum DESC",function(err,result){
     if(err){
       console.log(err);
     }
     else{
       res.render("Score/list",{scoreList:result});
     }
   })
});
//积分表详情管理页
router.get('/score/slist', function(req, res, next) {
  sum=[];
  var sum0=0;
  var Uphone=req.query.Uphone;
  var userName=req.query.userName;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from slist where Uphone=?",[Uphone],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i = 0 ; i < result.length; i++) {
        if(i==0){
          sum[i]=parseInt(result[i].taskScore)
        }
        else{
          sum[i]=parseInt(result[i].taskScore)+sum[i-1]
        }
      }
      res.render("Score/listIn",{slistList:result,userName:userName,Uphone:Uphone,sum:sum});
    }
  })
  
});
//积分对照表管理页
router.get('/score/manage', function(req, res, next) {
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from task",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Score/manage",{taskList:result});
    }
  })
});

//删除任务
router.get("/score/deletemanage",function(req,res,next){
  var taskId=req.query.taskId;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from task where taskId=?",[taskId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Score/shanchu",{ title: 'Express' })
      }
    })
})
//找到ID
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
//添加任务
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
//编辑任务
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
//搜索任务
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
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from method",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Material/method', { methodList:result });
    }
  });
  
});
//搜索攻略
var city = "";
router.post("/searchmethod",function (req,res,next) {
  city=req.body.city;
  var con=mysql.createConnection(dbconfig);
  con.connect(); 
  con.query("select * from method where cityName=?",[city],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Material/searchmethod",{methodList:result});
    }
  })
});
//添加攻略
router.post('/material/method', function(req, res, next) {
  var cityName = req.body.cityName;
  var methodDay = req.body.methodDay;
  var cityContent = req.body.cityContent;
  var cityImage = req.body.cityImage;
  var methodContent = req.body.methodContent;
  console.log(req.body);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into method(cityName,methodDay,cityContent,cityImage,methodContent) values(?,?,?,?,?)",[cityName,methodDay,cityContent,cityImage,methodContent],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end("success");
    }
  });
 });
//编辑攻略
var methodId = 0;
router.post('/method', function(req, res, next) {
  methodId = req.body.method;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from method",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Material/upmethod', { methodList:result });
    }
  });    
});
router.post('/upmethod', function(req, res, next) {
  var cityName = req.body.cityName;
  var methodDay = req.body.methodDay;
  var cityContent = req.body.cityContent;
  var cityImage = req.body.cityImage;
  var methodContent = req.body.methodContent;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update method set cityName=?,methodDay=?,cityContent=?,cityImage=?,methodContent=? where methodId=?",[cityName,methodDay,cityContent,cityImage,methodContent,methodId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end("success");
    }
  });
});
router.post('/method1', function(req, res, next) { 
  methodId = req.body.method;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from method where cityName=?",[city],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Material/upmethod1', { methodList:result });
    }
  });    
});
router.get('/material/methodsuc',function(req,res,next){
  res.render('Material/methodsuc', { title:'methodsuc' });
});
//删除攻略
router.get('/material/delmethod', function(req, res, next) {
  var methodId = req.query.methodId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from method where methodId=?",[methodId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Material/delmethod', { title: 'delMethod' });
    }
  });
});

router.get('/material/spot', function(req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from spot",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Material/spot', { spotList:result });
    }
  });
});
//搜索景点
var spotcity="";
router.post("/searchspot",function (req,res,next) {
  spotcity=req.body.spotcity;
  var con=mysql.createConnection(dbconfig);
  con.connect(); 
  con.query("select * from spot where spotCity=?",[spotcity],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Material/searchspot",{spotList:result});
    }
  })
})
//添加景点
router.post('/material/spot', function(req, res, next) {
  var spotCity = req.body.spotCity;
  var spotContent = req.body.spotContent;
  var spotImage = req.body.spotImage;
  var spotTitle = req.body.spotTitle;
  var spotType = req.body.spotType;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into spot(spotCity,spotContent,spotImage,spotTitle,spotType) values(?,?,?,?,?)",[spotCity,spotContent,spotImage,spotTitle,spotType],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end("success");
    }
  });
});
//编辑景点
var spotId = 0;
router.post('/spot', function(req, res, next) {
  spotId = req.body.spot;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from spot",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Material/upspot', { spotList:result });
    }
  });    
});
router.post('/upspot', function(req, res, next) {
  var spotCity = req.body.spotCity;
  var spotTitle = req.body.spotTitle;
  var spotContent = req.body.spotContent;
  var spotImage = req.body.spotImage;
  var spotType = req.body.spotType;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update spot set spotCity=?,spotTitle=?,spotContent=?,spotImage=?,spotType=? where spotId=?",[spotCity,spotTitle,spotContent,spotImage,spotType,spotId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end("success");  
    }
  });
});
router.post('/spot1', function(req, res, next) {
  spotId = req.body.spot;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from spot where spotCity=?",[spotcity],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Material/upspot1', { spotList:result });
    }
  });    
});
router.get('/material/spotsuc',function(req,res,next){
  res.render('Material/spotsuc', { title:'spotsuc' });
});
//删除景点
router.get('/material/delspot', function(req, res, next) {
  var spotId = req.query.spotId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from spot where spotId=?",[spotId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Material/delspot', { title: 'delspot' });
    }
  });
});

//显示管理员信息
router.get('/system', function(req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from ainflist where adminUsername=?",[user],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('System/system', { user: result[0] });   
    }
  });
  
});
//编辑管理员信息
router.post('/system', function(req, res, next) {
  var sex = req.body.sex;
  var phone = req.body.phone;
  var email = req.body.email;
  var position = req.body.position;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update ainflist set adminSex=?,adminTel=?,adminEmail=?,adminPosition=? where adminUsername=?",[sex,phone,email,position,user],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      con.query("select * from ainflist where adminUsername=?",[user],function(err,result){
        if(err){
          console.log(err);
        }
        else{
          res.render('System/system', { user: result[0] });   
        }
      });
    }
  });
});
module.exports = router;
