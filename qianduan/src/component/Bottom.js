import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from '../containers/Home/Home';
import Block from '../containers/Block/Block';
import Message from '../containers/Message/Message';
import My from '../containers/My/My';
import Login from '../containers/My/Login'
import Register from '../containers/My/Register'
import UpdateUser from '../containers/My/Update'
import Signin from '../containers/My/SignIn'
import Set from '../containers/My/Set/Set'
import About from '../containers/My/About/About'
import Help from '../containers/My/Help'
import Score from '../containers/My/Set/Score'
import Personal from '../containers/My/Set/Personal'
import Contact from '../containers/My/About/Contact'
import Introduction from '../containers/My/About/Introduction'
import Post from '../containers/Block/Post'
import More from '../containers/My/More'
import Rank from '../containers/My/Rank'
export default class Bottom extends Component {
  render() {
    return (
      <Router>
        <div style={{position:"fixed",zIndex:'999',background:'white',paddingTop:'15px',bottom:"0",width:"100%",height:"70px",color:"#2278c9"}}>
        <div className="bottom">
            <Link to="/">
              <div className="iconfont icon-xuanzhongshangcheng"></div>
              <p>首页</p>
            </Link>
          </div>
          <div className="bottom">
            <Link to="/block">
              <div className="iconfont icon-bbs"></div>
              <p>论坛</p>
            </Link>
          </div>
          <div className="bottom">
            <Link to="/message">
              <div className="iconfont icon-xiaoxi-control"></div>
              <p>消息</p>
            </Link>
          </div>
          <div className="bottom">
            <Link to="/my">
              <div className="iconfont icon-my"></div>
              <p>我的</p>
            </Link>
          </div>
        </div>
        <Route exact path='/' component={Home}/>
        <Route path='/block' component={Block}/>
        <Route path='/message' component={Message}/>
        <Route exact path='/my' component={My}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/updateuser' component={UpdateUser}/>
        <Route exact path='/getscore' component={Signin}/>
        <Route exact path='/setup' component={Set}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/help' component={Help}/>
        <Route exact path='/personal' component={Personal}/>
        <Route exact path='/score' component={Score}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/introduction' component={Introduction}/>
        <Route exact path='/post' component={Post}/>
        <Route exact path='/more' component={More}/>
        <Route exact path='/rank' component={Rank}/>
      </Router>
    )
  }
}

