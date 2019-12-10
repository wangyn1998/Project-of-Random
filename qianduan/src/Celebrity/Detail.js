import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Detail extends Component {
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
            let url = this.props.match.params.id;
            let Title = url.slice(1,);
            var data = [];
            for (var i = 0;i<res.length;i++){
                if(res[i].celebrityTitle == Title){
                    console.log(res[i]);
                    data.push(res[i]);
                }
            }
            this.setState({
                celebrity:data
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.celebrity.map((item)=>(
                        <div>
                            <NavBar
                            style={{background:'white',color:'#2278c9'}}
                            icon={<Link to="/celebrity"><Icon type="left" style={{color:'blue'}}/></Link>}
                            >{item.celebrityTitle}</NavBar>
                            <img src={item.celebrityImage} style={{width:'100%',height:'300px'}}/>
                            <div style={{marginLeft:'5%',color:'black',marginTop:'20px',fontSize:'18px',fontWeight:'bold'}}>{item.celebrityTitle}</div>
                            <div style={{width:'90%',marginLeft:'5%',marginBottom:'100px',marginTop:'20px',color:'grey',fontSize:'18px',lineHeight:'30px'}}>{item.celebrityContent}</div>
                        </div>
                    ))
                }
                
            </div>
        )
    }
}
