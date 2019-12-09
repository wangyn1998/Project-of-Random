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
                        <div style={{height:'280px',width:'98%',marginLeft:'1%',borderRadius:'10px',marginTop:'48px',background:'url(./images/method/' + item.cityImage +')'}}>
                            <div style={{float:'left',width:'10px',fontSize:'48px',color:'white',marginTop:'15%',marginLeft:'18%',marginRight:'20%'}}>{item.cityName}</div>
                            <div style={{float:'left',width:'55%',height:'80%',fontSize:'20px',color:'white',marginTop:'2%',lineHeight:'28px'}}>{item.methodContent} </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
