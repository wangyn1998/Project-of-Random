import React, { Component } from 'react'
import { NavBar, Icon,SearchBar ,Card,WingBlank,Grid} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const data3=['iconfont icon-zhuanfa-','iconfont icon-pinglun','iconfont icon-dianzan'].map((item)=>({
    icon:item
}))
export default class Put extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Link to='/block'><Icon type="left" /></Link>}
                    >详情</NavBar>
                <Link to='blockmessage'>
                 <WingBlank style={{height:'100%',borderRadius:'5px',border:'1px solid #BBBBBB',marginTop:'1%',backgroundColor:'#ffffff',padding:'4%',position:'relative',paddingBottom:'0'}}>
                     <img src='/images/block2.jpg' style={{borderRadius:'50%',width:'13%',height:'13%',border:'1px solid #BBBBBB'}}/>
                     <span style={{marginLeft:'5%',position:'absolute',top:'10%'}}>一只兔子</span>
                     <div>
                         <p style={{color:'blue',margin:'5% 0'}}>#网红打卡圣地#</p>
                         <div style={{width:'100%'}}><p style={{wordWrap:'break-word'}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p><img src='/images/1.jpg' style={{width:'40%'}}/></div>
                     </div>
                     <div style={{width:'100%',border: '1px solid #d0d0d0'}}></div>
                     <div className='blockGrid1'>
                     <Grid data={data3} columnNum={3} square={false} 
                     itemStyle={{padding:'0 0',textAlign:'left'}}
                     className='blockGrid1'
                     renderItem={dataItem=>{
                     return <i className={dataItem.icon}><span style={{marginLeft:'4%'}}>123</span></i>
                     }}/>
                     </div>
                </WingBlank>
                </Link>
            </div>
        )
    }
}
