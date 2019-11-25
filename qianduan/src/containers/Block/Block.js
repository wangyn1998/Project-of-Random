import React, { Component } from 'react'
import { NavBar, Icon,WingBlank } from 'antd-mobile';



export default class Block extends Component {
    constructor(){
        super();
        this.state={
            topic:[],
            post:[]
        }
    }
    componentDidMount(){
        // 发起请求
        fetch('https://localhost:3000/topic')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                topic:res.data
                // console.log(res)
            })

        })
    }
    componentDidUpdate(prevProps,prevState){
        fetch('https://localhost:3000/topic')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                topic:res.data
                // console.log(res)
            })

        })
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent={[
                        <i className='icon-wode iconfont'/>,
                        <span style={{margin:'0 4%'}}>我发出的</span>
                    ]}
                    rightContent={[
                        <i  className='icon-75bianji iconfont'/>
                    ]}
                    >论坛</NavBar>
                <WingBlank style={{height:'100%',borderRadius:'5px',border:'1px solid #eeeeee',marginTop:'0.3%'}}>
                    <img src='/images/1.jpg' style={{width:'100%',height:'50px',borderRadius:'5px'}}/>
                    <ul style={{height:'55px'}}>
                        {/* {
                            this.state.topic.map((item,idx)=>{
                                if(idx==0){
                                return <li style={{float:'left',color:'red',padding:'5px',width:'38%',fontSize:'80%'}}>{item.topic_content}</li>
                                }
                                if(idx<4){
                                    return <li style={{float:'left',color:'black'}}>#网红打卡地#</li>
                                }
                            })
                        } */}
                        <li style={{float:'left',color:'red',padding:'5px',width:'40%',fontSize:'80%'}}>#网红打卡地#<i className='iconfont icon-huo'/></li>
                        <li style={{float:'left',color:'black',padding:'5px',width:'40%',fontSize:'80%'}}>#网红打卡地#</li>
                        <li style={{float:'left',color:'black',padding:'5px',width:'40%',fontSize:'80%'}}>#33333#</li>
                        <li style={{float:'left',color:'black',padding:'5px',width:'40%',fontSize:'80%',paddingBottom:'0'}}>#网红打卡地#</li>
                        <i className='iconfont icon-gengduo'style={{float:'right',paddingLeft:'30%',paddingRight:'5%'}}/>
                    </ul>
                </WingBlank>
                
            </div>
        )
    }
}
