import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './Make.css'

export default class Make extends Component {
    render() {
        return (
            <div style={{background:'#f0f0'}}>
                <NavBar
                mode="dark"
                icon={<Link to="/"><Icon type="left" style={{color:'white'}}/></Link>}
                >周边景点</NavBar>
                <div>
                    <div className="make-dropdown" style={{float:'left'}}>
                        <div style={{position:'absolute',left:'0',color:'black'}}></div>
                        <span style={{marginLeft:"5px"}}>全部</span>
                        <div className="make-dropdown-content">

                        </div>
                    </div>
                    <div className="make-dropdown" style={{float:'left',marginLeft:'5px'}}>
                        <div style={{position:'absolute',left:'0',color:'black'}}></div>
                        <span style={{marginLeft:"5px"}}>时长</span>
                        <div className="make-dropdown-content">
                            <p>1day</p>
                            <p>2day</p>
                            <p>3day</p>
                        </div>
                    </div>
                    <div className="make-dropdown" style={{float:'left'}}>
                        <div style={{position:'absolute',left:'0',color:'black'}}></div>
                        <span style={{marginLeft:"5px"}}>地点</span>
                        <div className="make-dropdown-content">
                            <p>北京</p>
                            <p>上海</p>
                            <p>广州</p>
                        </div>
                    </div>
                    <input className="make-search" style={{marginLeft:"5px",float:'left'}} placeholder="点击搜索"/>
                </div>
                <div style={{height:'280px',width:'98%',marginLeft:'1%',borderRadius:'10px',marginTop:'48px',background:'black'}}>
                    <div style={{float:'left',width:'10px',fontSize:'48px',color:'white',marginTop:'15%',marginLeft:'18%',marginRight:'20%'}}>青岛</div>
                    <div style={{float:'left',width:'55%',height:'80%',fontSize:'20px',color:'white',marginTop:'2%',lineHeight:'28px'}}>Day1 : 中山路→天主教堂→大学路→信号山→台东路步行街<br/>Day2 : 德国监狱→啤酒博物馆→  八大关→第二海水浴场→奥帆中心→五四广场→情人坝<br/>Day3 : 崂山→石老人→万象城 </div>
                </div>
            </div>
        )
    }
}
