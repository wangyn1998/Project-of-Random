import React, { Component } from 'react'
import { Popover, NavBar, Icon,Grid,List,Drawer} from 'antd-mobile';
import './my.css'
import {createBrowserHistory} from 'history'
const his = createBrowserHistory();
export default class Help extends Component {
    a=()=>{
        his.push('/a');
        window.location.reload()
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/my'}
                    >帮助反馈
                </NavBar>
                <div className='help'  onClick={this.a.bind(this)}>
                    <div style={{color:'black',fontSize:'24px',paddingTop:'10%',margin:'0 auto',width:'60%',height:'70px',textAlign:'center'}}>当前版本暂不支持该功能。</div>
                    <div style={{color:'black',fontSize:'24px',margin:'0 auto',width:'60%',height:'40px',textAlign:'center'}}>相信你自己是可以的</div>
                    <div style={{color:'black',fontSize:'24px',margin:'0 auto',width:'60%',height:'100px',textAlign:'center'}}>加油！</div>

                </div>
            </div>
        )
    }
}
