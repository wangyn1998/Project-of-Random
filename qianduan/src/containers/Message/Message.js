import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';

export default class Message extends Component {
    render() {
        return (
            <div>
                <NavBar
                mode="dark"
                icon={<Icon type="left" style={{color:'white'}}/>}
                rightContent={[
                    <div className="iconfont icon-search" style={{color:'white'}}></div>
                ]}
                >消息</NavBar>
                <div style={{height:'60px',borderBottom:'solid 1px grey'}}>
                    <div style={{float:'left',color:'#2278c9',marginTop:'20px',marginLeft:'10%'}}className="iconfont icon-aite"></div>
                    <div style={{float:'left',color:'black',marginTop:'16px',marginLeft:'10%',fontSize:'24px'}}>@我的</div>
                    <Icon type="right" style={{color:'black'}} style={{float:'left',position:'absolute',right:'20px',marginTop:'18px'}}/>
                </div>
                <div style={{height:'60px',borderBottom:'solid 1px grey'}}>
                    <div style={{float:'left',color:'#2278c9',marginTop:'20px',marginLeft:'10%'}}className="iconfont icon-pinglun"></div>
                    <div style={{float:'left',color:'black',marginTop:'16px',marginLeft:'10%',fontSize:'24px'}}>评论</div>
                    <Icon type="right" style={{color:'black'}} style={{float:'left',position:'absolute',right:'20px',marginTop:'18px'}}/>
                </div>
                <div style={{height:'60px',borderBottom:'solid 1px grey'}}>
                    <div style={{float:'left',color:'#2278c9',marginTop:'20px',marginLeft:'10%'}}className="iconfont icon-zan"></div>
                    <div style={{float:'left',color:'black',marginTop:'16px',marginLeft:'10%',fontSize:'24px'}}>点赞</div>
                    <Icon type="right" style={{color:'black'}} style={{float:'left',position:'absolute',right:'20px',marginTop:'18px'}}/>
                </div>
                <div style={{height:'60px',borderBottom:'solid 1px grey'}}>
                    <div style={{float:'left',color:'#2278c9',marginTop:'20px',marginLeft:'10%'}}className="iconfont icon-wenda"></div>
                    <div style={{float:'left',color:'black',marginTop:'16px',marginLeft:'10%',fontSize:'24px'}}>问答</div>
                    <Icon type="right" style={{color:'black'}} style={{float:'left',position:'absolute',right:'20px',marginTop:'18px'}}/>
                </div>
                <div style={{height:'60px',borderBottom:'solid 1px grey'}}>
                    <div style={{float:'left',color:'#2278c9',marginTop:'20px',marginLeft:'10%'}}className="iconfont icon-tubiaozhizuomoban"></div>
                    <div style={{float:'left',color:'black',marginTop:'16px',marginLeft:'10%',fontSize:'24px'}}>我的关注</div>
                    <Icon type="right" style={{color:'black'}} style={{float:'left',position:'absolute',right:'20px',marginTop:'18px'}}/>
                </div>
            </div>
        )
    }
}
