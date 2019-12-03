import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Fun extends Component {
    constructor(){
        super();
        this.state = {
            fun:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:8001/fun')
        .then((res)=>res.json())
        .then((res)=>{
            let url = window.location.search;
            if (url.indexOf("?") != -1) {
                var str = url.substr(1)
                var city = str.split("=")[1];
                city = decodeURI(city);
                console.log(city);
            } 
            console.log(res[0].spotCity);
            var data = [];
            for (var i = 0;i<res.length;i++){
                if(res[i].spotCity == city){
                    console.log(res[i]);
                    
                    data.push(res[i]);
                }
            }
            console.log(data);
            this.setState({
                fun:data
            })
        })
    }
    render() {
        return (
            <div style={{background:'#f0f0',marginBottom:'100px'}}>
                <NavBar
                mode="dark"
                icon={<Link to="/"><Icon type="left" style={{color:'white'}}/></Link>}
                >当地玩乐</NavBar> 
                {
                    this.state.fun.map((item)=>(
                        <div>
                            <div style={{height:'500px',borderRadius:'5px',marginTop:'20px',width:'94%',marginLeft:'3%',background:'white'}}>
                                <div  style={{height:'160px',borderRadius:'5px',width:'100%',background:'blue'}}>
                                    <img src={item.spotImage} style={{height:'160px',borderRadius:'5px',width:'100%'}}/>
                                </div>
                                <div style={{height:'140px',width:'94%',marginLeft:'3%'}}>
                                    <p style={{color:'black',fontSize:'18px',fontWeight:'bold'}}>{item.spotTitle}</p>
                                    <p style={{color:'grey',fontSize:'18px',lineHeight:'30px'}}>{item.spotContent}</p>
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
                    ))
                }
            </div>
        )
    }
}
