import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './Method.css'

export default class Make extends Component {
    constructor(){
        super();
        this.state = {
            method:[],
            time:"",
            city:""
        }
    }
    componentDidMount(){
        
        fetch('http://localhost:8001/method')
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
                if(res[i].cityName == city){
                    console.log(res[i]);
                    
                    data.push(res[i]);
                }
            }
            console.log(data);
            this.setState({
                method:data
            })
        })
        fetch('http://localhost:8001/method')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                method:res
            })
        })
    }
    showAll= ()=>{
        fetch('http://localhost:8001/method')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                method:res
            })
        })
    }
    changeTime= (e)=>{
        var data = [];
        var time = e.target.value;
        this.setState({
            time:time
        })
    }
    changeCity= (e)=>{
        var data = [];
        var city = e.target.value;
        this.setState({
            city:city
        })
    }
    searchMethod= (e)=>{
        var data = [];
        var time = this.state.time;
        var city = this.state.city;
        fetch('http://localhost:8001/method')
        .then((res)=>res.json())
        .then((res)=>{
            for (var i = 0;i<res.length;i++){
                if(res[i].cityName == city && res[i].methodDay == time){
                    console.log(res[i]);
                    data.push(res[i]);
                }
            }
            this.setState({
                method:data
            })
        })
    }
    render() {
        return (
            <div style={{background:'#f0f0',marginBottom:'100px'}}>
                <NavBar
                mode="dark"
                icon={<Link to="/"><Icon type="left" style={{color:'white'}}/></Link>}
                >纯享定制</NavBar>
                <div style={{width:'100%',height:'40px'}}>
                    <div style={{width:'20%',height:'40px',marginLeft:'4%',float:'left'}}>
                        <button onClick={this.showAll} style={{width:'100%',height:'100%',border:'solid grey 1px',borderRadius:'5px',background:"white",color:'black'}}>全部</button>
                    </div>
                    <div className="method-search">
                        <input onChange={this.changeTime} style={{width:'100%',height:'100%',border:'solid grey 1px',borderRadius:'5px',background:"white",color:'black'}} placeholder="时长(天)"/>
                    </div>
                    <div className="method-search">
                        <input onChange={this.changeCity} style={{width:'100%',height:'100%',border:'solid grey 1px',borderRadius:'5px',background:"white"}} placeholder="地点"/>
                    </div>
                    <div style={{width:'30%',height:'40px',marginLeft:'1%',float:'left'}}>
                        <button onClick={this.searchMethod} style={{bordre:'none',width:'100%',height:'100%',border:'solid grey 1px',borderRadius:'5px',background:"white"}}>点击搜索</button>
                    </div>
                    
                </div>
                {
                    this.state.method.map((item)=>(
                        <div>
                            <div style={{height:'420px',borderRadius:'5px',marginTop:'20px',width:'94%',marginLeft:'3%',background:'white'}}>
                                <div  style={{height:'160px',borderRadius:'5px',width:'100%',background:'blue'}}>
                                    <img src={'./images/method/'+item.cityImage} style={{height:'160px',borderRadius:'5px',width:'100%'}}/>
                                </div>
                                <div style={{height:'140px',width:'94%',marginLeft:'3%'}}>
                                    <p style={{color:'black',fontSize:'18px',fontWeight:'bold'}}>{item.cityName}</p>
                                    <p style={{color:'grey',fontSize:'18px',lineHeight:'30px'}}>{item.methodContent}</p>
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
