import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Hot extends Component {
    render() {
        return (
            <div style={{background:'#f0f0'}}>
                <NavBar
                mode="dark"
                icon={<Link to="/"><Icon type="left" style={{color:'white'}}/></Link>}
                >热门推荐</NavBar>
                <div style={{height:'200px',width:'94%',marginLeft:'3%',marginTop:'5px'}}>
                    <div style={{height:'100%',width:'47%',float:'left',borderRadius:'5px',border:'solid 1px grey'}}>
                        <div style={{height:'80%',width:'100%',background:'blue'}}></div>
                        <div style={{height:'15%',width:'100%',marginTop:'5%'}}>
                            <div style={{float:'left',fontSize:'22px',color:'black',width:'100%'}}>景点名称
                                <span className="iconfont icon-xin" style={{marginLeft:'30%'}}></span>
                            </div>
                        </div>
                    </div>
                    <div style={{height:'100%',width:'47%',marginLeft:'4%',float:'left',borderRadius:'5px',border:'solid 1px grey'}}>
                    <div style={{height:'80%',width:'100%',background:'blue'}}></div>
                        <div style={{height:'15%',width:'100%',marginTop:'5%'}}>
                            <div style={{float:'left',fontSize:'22px',color:'black',width:'100%'}}>景点名称
                                <span className="iconfont icon-xin" style={{marginLeft:'30%'}}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
