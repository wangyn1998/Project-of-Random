import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';

export default class Spot extends Component {
    render() {
        return (
            <div style={{background:'#f0f0'}}>
                <NavBar
                mode="dark"
                icon={<Icon type="left" style={{color:'white'}}/>}
                >周边景点</NavBar> 
                <div style={{height:'350px',borderRadius:'5px',marginTop:'5px',width:'94%',marginLeft:'3%',background:'white'}}>
                    <div  style={{height:'160px',borderRadius:'5px',width:'100%',background:'blue'}}></div>
                    <div style={{height:'140px',width:'94%',marginLeft:'3%'}}>
                        <p style={{color:'black',fontSize:'18px',fontWeight:'bold'}}>阿那亚黄金海岸|一种情怀，一种生活方式</p>
                        <p style={{color:'grey',fontSize:'18px',lineHeight:'30px'}}>阿那亚黄金海岸社区，是一个全自愿还频率有独家综合题，坐落于河北秦皇岛昌黎县黄金海岸中区，是北中国一线亲海的全资源玩家胜地</p>
                        <p style={{fontSize:'10px',color:'#62c1df'}}>推荐指数：
                            <span style={{color:'yellow'}} className="iconfont icon-shoucang"></span>
                            <span style={{color:'yellow'}} className="iconfont icon-shoucang"></span>
                            <span style={{color:'yellow'}} className="iconfont icon-shoucang"></span>
                            <span style={{color:'yellow'}} className="iconfont icon-shoucang"></span>
                            <span style={{color:'yellow'}} className="iconfont icon-shoucang"></span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
