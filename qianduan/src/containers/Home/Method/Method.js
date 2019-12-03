import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './Method.css'

export default class Make extends Component {
    constructor(){
        super();
        this.state = {
            method:[]
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
    }

    render() {
        return (
            <div style={{background:'#f0f0',marginBottom:'100px'}}>
                <NavBar
                mode="dark"
                icon={<Link to="/"><Icon type="left" style={{color:'white'}}/></Link>}
                >纯享定制</NavBar>
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
                {
                    this.state.method.map((item)=>(
                        <div style={{height:'280px',width:'98%',marginLeft:'1%',borderRadius:'10px',marginTop:'48px',background:'black'}}>
                            <div style={{float:'left',width:'10px',fontSize:'48px',color:'white',marginTop:'15%',marginLeft:'18%',marginRight:'20%'}}>{item.cityName}</div>
                            <div style={{float:'left',width:'55%',height:'80%',fontSize:'20px',color:'white',marginTop:'2%',lineHeight:'28px'}}>{item.methodContent} </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
