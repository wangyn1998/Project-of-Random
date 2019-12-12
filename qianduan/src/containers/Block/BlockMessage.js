import React, { Component } from 'react'
import { NavBar, Icon,Card,List, Accordion,InputItem } from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {con} from './Context'

const Item = List.Item;
export default class BlockMessage extends Component {
    constructor(){
        super();
        this.handleInput=this.handleInput.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            post:[],
            reply:[],
            username:'',
            v:''
        }
    }
    componentWillMount(){
        fetch('http://localhost:8001/clickpost/'+this.props.match.params.id)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                post:res[0]
            })
        })
        fetch('http://localhost:8001/reply')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            console.log('222222222');
            this.setState({
                reply:res
            })
        })
    }
    getConnect1=(e)=>{  //api请求函数
        let text = {replyContent:this.state.v,postId:this.state.post.postId,userName:this.state.username} //获取数据
        
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        
        fetch('http://localhost:8001/usermessage')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                username:res.username
            },()=>{
                var text2=text;
                text2.userName=this.state.username;
                console.log(text2);
                this.setState({
                    reply:[...this.state.reply,text2]
                })
            })
        })
        fetch(`http://localhost:8001/replypost`,{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            data => {
            }
        );
        this.setState({
            v:''
        })
    }
    handleInput = (e)=>{
        //绑定this，事件处理函数写成箭头函数，或者bind
        if(e.keyCode===13){
            this.props.add(e.target.value);
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            v:e.target.value
        })
    }
    render() {
        return (
            <div style={{marginBottom:'100px'}}>
               <NavBar
                    mode="dark"
                    icon={<Link to='/'><Icon type="left" /></Link>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >详情</NavBar>
                
                <div className='message3' style={{width:'100%'}}>
                <Card className='message2' style={{width:'100%'}}>
                    <Card.Header
                        title={<span style={{color:'white'}}>{this.state.post.userName}</span>}
                        thumb={this.state.post.Uimage}
                        thumbStyle={{borderRadius:'50%',width:'13%',height:'13%',border:'1px solid #BBBBBB'}}
                        extra={<button style={{borderRadius:'10px',height:'35px',backgroundColor:'white'}}>+关注</button>}
                    />
                    <Card.Body>
                        <div>
                            <p style={{color:'blue',margin:'5% 0'}}>{this.state.post.postTopic}</p>
                            <div style={{width:'100%',color:'white'}}><p style={{wordWrap:'break-word'}}>{this.state.post.postContent}</p><img src={this.state.post.postImage} style={{width:'40%'}}/></div>
                        </div>
                    </Card.Body>
                    <Card.Footer content={this.state.post.postPointNumber+'人赞过'} extra={<div>4小时前发布 浏览2000</div>} />
                    </Card>
                    </div>
                    <Card style={{borderRadius:'20px',minHeight:'250px'}}>
                        <p style={{margin:'6% 7%',fontSize:'20px'}}><b>评论</b></p>
                        {
                            this.state.reply.map((item,idx)=>{
                                if(idx==0){
                                    return <Card.Header
                                        title={<span>{item.userName}<br/><span style={{fontSize:'10px',marginLeft:'7px'}}>{item.replyContent}</span></span>}
                                        thumbStyle={{borderRadius:'50%',width:'13%',height:'13%',border:'1px solid #BBBBBB'}}
                                        thumb={item.Uimage}
                                        extra={<i className='iconfont icon-dianzan'>200</i>}
                                    />
                                }
                            })
                        }
                        <Card.Body style={{width:'70%',backgroundColor:'#eeeeee',margin:'30px auto',borderRadius:'6px'}}>
                        <List className="my-list block1list">
                            {
                                this.state.reply.map((item,idx)=>{
                                    if(idx>0&&idx<3){
                                        return <Item style={{minHeight:'0'}}>{item.userName}<b style={{margin:'0 3%'}}>:</b>{item.replyContent}</Item>
                                    }
                                })
                            }
                            <Accordion className="my-accordion">
                                <Accordion.Panel header="查看更多回复"  className='block1panel'>
                                    <List className="my-list">
                                    {
                                        this.state.reply.map((item,idx)=>{
                                            if(idx>=3){
                                                return <List.Item>{item.userName}<b style={{margin:'0 3%'}}>:</b>{item.replyContent}</List.Item>
                                            }
                                        })
                                    }
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </List>
                        </Card.Body>
                    </Card>
                        <div style={{width:'100%',height:'30px'}}>
                     <input className='input1'
                            placeholder="说点......"
                            value={this.state.v}
                            type='text'
                            onKeyDown={this.handleInput}
                            maxLength='10px'
                            onChange={this.handleChange}
                            style={{width:'78%',height:'95%',border:'1px solid #888888',borderRadius:'5px'}}
                        /><button style={{width:'50px',backgroundColor:'blue',borderRadius:'5px',paddingTop:'0px',height:'35px',marginLeft:'4px'}} onClick={this.getConnect1}>发送</button>
                        </div>
            </div>
        )
    }
}
