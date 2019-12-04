import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Hot extends Component {
    constructor(){
        super();
        this.state = {
            hot:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:8001/hot')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                hot:res
            })
        })
    }

    render() {
        return (
            <div>
                <NavBar
                mode="dark"
                icon={<Link to="/"><Icon type="left" style={{color:'white'}}/></Link>}
                >热门推荐</NavBar>
                <div style={{width:'90%',marginLeft:'4%'}}>
                    {
                        this.state.hot.map((item)=>(
                            <div style={{height:'200px',width:'47%',float:'left',borderRadius:'5px',border:'solid 1px grey',marginTop:'10px',marginBottom:'10px',marginLeft:'2%'}}>
                                <div style={{height:'80%',width:'100%',background:'blue'}}>
                                    <img src={item.hotImage} style={{height:'100%',width:'100%',background:'blue'}}/>
                                </div>
                                <div style={{height:'15%',width:'95%',marginTop:'5%',marginBottom:'100px',paddingLeft:'5%'}}>
                                    <div style={{float:'left',fontSize:'18px',color:'black',width:'100%'}}>{item.hotTitle}
                                        <span className="iconfont icon-xin xin" style={{marginRight:'5%',float:'right',marginTop:'5px'}}></span>
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
