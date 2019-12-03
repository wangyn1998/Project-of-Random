const http = require('http');
var express = require('express');
var app = express();
var mysql = require("mysql");
var dbconfig = require("../DBconfig/dbconfig.json");
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
/**范 */
var phonenum='';
console.log(phonenum);
app.use(express.static('public'));
/**登录 */
app.post('/login', function (req, res) {  //接收POST请求
  /**获取请求体数据 */
  let data = req.body;   //解析body中的信息
  console.log(data);
  let message1 = {success:true}
  let message2 = {success:false}
  /**连接数据库 */
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from user where Uphone = ? and Upasswd = ?",[data.phone,data.password],function(err,result){
    phonenum=data.phone;
    if(err){
        console.log(err);
    }
    else{
        if(result == false){
            res.send(message2);
        }
        else{           
            res.send(message1);
        }
    }
  })
})
console.log(phonenum);
/**注册 */
app.post('/register',(req,res)=>{
  /**获取请求体数据 */
  let data = req.body;
  let message1 = {success:true};
  let message2 = {success:false};
  console.log('aaa')
  console.log(data);
  console.log('bbb')
  // eslint-disable-next-line eqeqeq
  if(data.password != data.repwd){
      res.send(message2);
  } 
  else{
      var con = mysql.createConnection(dbconfig);
      con.connect();
      con.query("insert into user(Uphone,Upasswd) values(?,?)",[data.phone,data.password],(err,result)=>{
          if(err){
              throw err;
          }
          else{
              res.send(message1);
          }
      })
  }
})
/**编辑资料 */
app.post('/updateuser',(req,res)=>{
    /**获取请求体数据 */
    let data = req.body;
    let message1 = {success:true};
    let message2 = {success:false};
    console.log('aaa')
    console.log(data);
    console.log('bbb')
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("update user set UserName=?,Uimage=?,Usex=?,Ubirthday=?,Uaddress=?,Usign=? where Uphone = ?",[data.name,data.img,data.sex,data.birthday,data.place,data.sign,phonenum],(err,result)=>{
        if(err){
            throw err;
        }
        else{
            if(result == false){
                res.send(message2);
            }else{
                res.send(message1);
            }
            
        }
    })
})
/**获取phone */
app.get('/my',function(req,res,next){
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from user where Uphone=?',[phonenum],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
/**获取验证码 */
app.get('/Getnum',(req,res)=>{
  function randomn(n) {
      if (n > 21) return null
      return parseInt((Math.random() + 1) * Math.pow(10,n-1))
  }
  var trueCode = randomn(6);
  let message1 = {success:true,trueNum:trueCode};
  let phoneNum = JSON.parse(req.query.mobile); 
  // let message2 = {success:false};
  var QcloudSms = require("qcloudsms_js");
  // 短信应用 SDK AppID
  var appid = 1400292647;  // SDK AppID 以1400开头
  // 短信应用 SDK AppKey
  var appkey = "70116ec55603b35283e948ed8cbdc2ef";
  // 需要发送短信的手机号码
  var phoneNumbers = [phoneNum];
  // 短信模板 ID，需要在短信控制台中申请
  var templateId = 486355;  // NOTE: 这里的模板ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
  // 签名
  var smsSign = "fymt1公众号";  // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请
  // 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
  function callback(err, res, resData) {
      if (err) {
          console.log("err: ", err);
      } else {
          console.log("request data: ", res.req);
          console.log("response data: ", resData);
      }
  }
  // 实例化 QcloudSms
  var qcloudsms = QcloudSms(appid, appkey);
  var ssender = qcloudsms.SmsSingleSender();
  var params = [trueCode];
  ssender.sendWithParam("86", phoneNumbers[0], templateId,
  params, smsSign, "", "", callback);
  res.send(message1);
})

/**张 */
app.get('/topic',function(req,res,next){
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from topic',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
app.get('/post',function(req,res,next){
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from post',function(err,result){
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
app.post('/postmessage',function(req,res,next){
    var con = mysql.createConnection(dbconfig);
    con.connect();
    console.log(req.body.postContent);
    con.query('insert into post(postContent) values(?)',[req.body.postContent],function(err,result){
        if(err){
            console.log(err);
        }
    })
})
app.post('/zhuanfa',function(req,res,next){
    var con = mysql.createConnection(dbconfig);
    con.connect();
    console.log(req.body);
    con.query('update post set postRepostNum=? where postId=?',[req.body.number,req.body.postId],function(err,result){
        if(err){
            console.log(err);
        }
    })
})

app.post('/pinglun',function(req,res,next){
    var con = mysql.createConnection(dbconfig);
    con.connect();
    console.log(req.body);
    con.query('update post set postReplyNum=? where postId=?',[req.body.number,req.body.postId],function(err,result){
        if(err){
            console.log(err);
        }
    })
})
app.post('/dianzan',function(req,res,next){
    var con = mysql.createConnection(dbconfig);
    con.connect();
    console.log(req.body);
    con.query('update post set postPointNumber=? where postId=?',[req.body.number,req.body.postId],function(err,result){
        if(err){
            console.log(err);
        }
    })
})
var clickid=0;
app.post('/clicknum',function(req,res,next){
    clickid=req.body.postId;
    console.log(clickid);
})
app.get('/clickpost',function(req,res,next){
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from post where postId=?',[clickid],function(err,result){
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
app.get('/reply',function(req,res,next){
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query('select * from reply where postId=?',[clickid],function(err,result){
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
/**王 */
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
