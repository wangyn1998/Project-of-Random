import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Celebrity extends Component {
    constructor(){
        super();
        this.state = {
            celebrity:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:8001/celebrity')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                celebrity:res
            })
        })
    }

    render() {
        return (
            <div>
                <NavBar
                mode="dark"
                icon={<Link to="/"><Icon type="left" style={{color:'white'}}/></Link>}
                >网红打卡</NavBar>
                <div style={{width:'90%',marginLeft:'4%'}}>
                    {
                        this.state.celebrity.map((item)=>(
                            <div style={{height:'200px',width:'47%',float:'left',borderRadius:'5px',border:'solid 1px grey',marginTop:'10px',marginBottom:'10px',marginLeft:'2%'}}>
                                <div style={{height:'80%',width:'100%',background:'blue'}}>
                                    <img src={item.celebrityImage} style={{height:'100%',width:'100%',background:'blue'}}/>
                                </div>
                                <div style={{height:'15%',width:'100%',marginTop:'5%',marginBottom:'100px'}}>
                                    <div style={{float:'left',fontSize:'22px',color:'black',width:'100%'}}>{item.celebrityTitle}
                                        <span className="iconfont icon-xin" style={{marginRight:'5%'}}></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    } 
                </div>
            </div>
        )
    }
}
