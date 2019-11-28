import React, { Component } from 'react'
import { NavBar, Icon,WingBlank ,Grid,NoticeBar} from 'antd-mobile';
import './block.css'
import Post from './Post';
import PostMessage from './PostMessage';
import BlockMessage from './BlockMessage';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const data=[1,2,3,4].map((item,idx)=>({
    text:idx
}));
const data1=['iconfont icon-zhuanfa-','iconfont icon-pinglun','iconfont icon-dianzan'].map((item)=>({
    icon:item
}))
export default class Block1 extends Component {
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
        fetch('https://localhost:3000/post')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                post:res.data
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
        fetch('https://localhost:3000/post')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                post:res.data
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
                        <Link to='/post'><i  className='icon-75bianji iconfont' style={{color:'white'}}/></Link>
                    ]}
                    >论坛</NavBar>
                <WingBlank style={{height:'100%',borderRadius:'5px',border:'1px solid #BBBBBB',marginTop:'0.3%',position:'relative'}}>
                    <img src='/images/1.jpg' style={{width:'100%',height:'50px',borderRadius:'5px'}}/>
                    <NoticeBar marqueeProps={{ loop: true,style: { padding: '0 7.5px'} }} style={{background:'rgba(255,255,255,0)'}}>
                        热门话题：网红打卡地 最后悔去的地方 十一最值得看的风景 aaaaaa
                    </NoticeBar>
                     <Grid data={data} hasLine={false} 
                     columnNum={2}
                     className='blockGrid'
                     square={false}
                     style={{width:'50%'}}
                     itemStyle={{textAlign:'left'}}
                     renderItem={dataItem=>{
                         if(dataItem.text!==3){
                             return <li style={{color:'black',fontSize:'80%'}}>#网红打卡地#</li>
                         }
                         else{
                             return <li style={{color:'black',fontSize:'80%'}}>#网红打卡地#<div style={{position:'absolute',right:'0',marginRight:'10%',bottom:'8%'}}><Link to='/postmessage'><i className='iconfont icon-gengduo'/></Link></div></li>
                         }
                        
                     }}
                     />
                </WingBlank>
                <Link to='blockmessage'>
                 <WingBlank style={{height:'100%',borderRadius:'5px',border:'1px solid #BBBBBB',marginTop:'1%',backgroundColor:'#ffffff',padding:'4%',position:'relative',paddingBottom:'0'}}>
                     <img src='/images/block2.jpg' style={{borderRadius:'50%',width:'13%',height:'13%',border:'1px solid #BBBBBB'}}/>
                     <span style={{marginLeft:'5%',position:'absolute',top:'10%'}}>一只兔子</span>
                     <div>
                         <p style={{color:'blue',margin:'5% 0'}}>#网红打卡圣地#</p>
                         <div style={{width:'100%'}}><p style={{wordWrap:'break-word'}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p><img src='/images/1.jpg' style={{width:'40%'}}/></div>
                     </div>
                     <div style={{width:'100%',border: '1px solid #d0d0d0'}}></div>
                     <div className='blockGrid1'>
                     <Grid data={data1} columnNum={3} square={false} 
                     itemStyle={{padding:'0 0',textAlign:'left'}}
                     className='blockGrid1'
                     renderItem={dataItem=>{
                     return <i className={dataItem.icon}><span style={{marginLeft:'4%'}}>123</span></i>
                     }}/>
                     </div>
                </WingBlank>
                </Link>
                {
                    this.state.post.map((item)=>(
                        <WingBlank style={{height:'100%',borderRadius:'5px',border:'1px solid #BBBBBB',marginTop:'1%',backgroundColor:'#ffffff',padding:'4%',position:'relative',paddingBottom:'0'}}>
                            <img src='/images/block2.jpg' style={{borderRadius:'50%',width:'13%',height:'13%',border:'1px solid #BBBBBB'}}/>
                            <span style={{marginLeft:'5%',position:'absolute',top:'10%'}}>{item.postName}</span>
                            <div>
                                <p style={{color:'blue',margin:'5% 0'}}>#网红打卡圣地#</p>
                                <div style={{width:'100%'}}><p style={{wordWrap:'break-word'}}>{item.postContent}</p><img src='/images/1.jpg' style={{width:'40%'}}/></div>
                            </div>
                            <div style={{width:'100%',border: '1px solid #d0d0d0'}}></div>
                            <div className='blockGrid1'>
                            <Grid data={data1} columnNum={3} square={false} 
                            itemStyle={{padding:'0 0',textAlign:'left'}}
                            className='blockGrid1'
                            renderItem={dataItem=>{
                            return <i className={dataItem.icon}><span style={{marginLeft:'4%'}}>{item.postNumber}</span></i>
                            }}/>
                            </div>
                        </WingBlank>
                    ))
                }
                {/* <Post/> */}
                {/* <PostMessage/> */}
                {/* <BlockMessage/> */}
            </div>
           
        )
    }
}
