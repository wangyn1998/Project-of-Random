import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from '../containers/Home/Home';
import Block from '../containers/Block/Block';
import Message from '../containers/Message/Message';
import My from '../containers/My/My';

export default class Bottom extends Component {
  render() {
    return (
      <Router>
        <div style={{position:"absolute",bottom:"0",width:"100%",height:"70px",color:"#2278c9"}}>
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
        <Route path='/my' component={My}/>
      </Router>
    )
  }
}
