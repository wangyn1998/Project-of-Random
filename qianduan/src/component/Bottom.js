import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Home from '../containers/Home/Home';
import Block from '../containers/Block/Block';
import Message from '../containers/Message/Message';
import My from '../containers/My/My';


export default class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }
    render() {
        return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
            <TabBar.Item
            title="首页"
            key="Home"
            icon={<i style={{'fontsize':'22px'}} className='iconfont icon-xuanzhongshangcheng'></i>}
            selectedIcon={<i style={{'fontsize':'22px'}} className='iconfont icon-xuanzhongshangcheng'></i>}
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            >
                <Home/>
            </TabBar.Item>
            <TabBar.Item
            title="论坛"
            key="Block"
            icon={<i style={{'fontsize':'22px'}} className='iconfont icon-bbs'></i>}
            selectedIcon={<i style={{'fontsize':'22px'}} className='iconfont icon-bbs'></i>}
            selected={this.state.selectedTab === 'block'}
            onPress={() => {
              this.setState({
                selectedTab: 'block',
              });
            }}
            >
                <Block/>
            </TabBar.Item>
            <TabBar.Item
            title="消息"
            key="Message"
            icon={<i style={{'fontsize':'22px'}} className='iconfont icon-xiaoxi-control'></i>}
            selectedIcon={<i style={{'fontsize':'22px'}} className='iconfont icon-xiaoxi-control'></i>}
            selected={this.state.selectedTab === 'message'}
            onPress={() => {
              this.setState({
                selectedTab: 'message',
              });
            }}
            >
                <Message/>
            </TabBar.Item>
            <TabBar.Item
            title="我的"
            key="My"
            icon={<i style={{'fontsize':'22px'}} className='iconfont icon-my'></i>}
            selectedIcon={<i style={{'fontsize':'22px'}} className='iconfont icon-my'></i>}
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
            >
                <My/>
            </TabBar.Item>
        </TabBar>
      </div>
        )
    }
}
