import React, { Component } from 'react'
import { NavBar, Icon,Card,List, Accordion } from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


const Item = List.Item;
export default class BlockMessage extends Component {
    constructor(){
        super();
        this.state={
            post:[],
            reply:[]
        }
    }
    componentWillMount(){
        fetch('http://localhost:8001/clickpost')
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
            this.setState({
                reply:res
            })
        })
    }
    render() {
        return (
            <div>
               <NavBar
                    mode="dark"
                    icon={<Link to='/'><Icon type="left" /></Link>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >详情</NavBar>
                <div className='message3'>
                <Card className='message2'>
                    <Card.Header
                        title={this.state.post.userName}
                        thumb={this.state.post.Uimage}
                        thumbStyle={{borderRadius:'50%',width:'13%',height:'13%',border:'1px solid #BBBBBB'}}
                        extra={<button style={{borderRadius:'10px',height:'35px',backgroundColor:'white'}}>+关注</button>}
                    />
                    <Card.Body>
                        <div>
                            <p style={{color:'blue',margin:'5% 0'}}>#网红打卡圣地#</p>
                <div style={{width:'100%',color:'white'}}><p style={{wordWrap:'break-word'}}>{this.state.post.postContent}</p><img src='/images/1.jpg' style={{width:'40%'}}/></div>
                        </div>
                    </Card.Body>
                    <Card.Footer content="230人赞过" extra={<div>4小时前发布 浏览2000</div>} />
                    </Card>
                    </div>
                    <Card style={{borderRadius:'20px',minHeight:'250px'}}>
                        <p style={{margin:'6% 7%',fontSize:'20px'}}><b>评论</b></p>
                        {/* <Card.Header
                            title='在远方'
                            thumbStyle={{borderRadius:'50%'}}
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={<i className='iconfont icon-dianzan'>200</i>}
                        />
                        <Card.Body style={{width:'70%',backgroundColor:'#eeeeee',margin:'30px auto',borderRadius:'6px'}}>
                        <List className="my-list block1list">
                            <Item style={{minHeight:'0'}}>向前看：加我一个</Item>
                            <Item style={{minHeight:'0'}}>向前看：加我一个</Item>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="查看更多回复"  className='block1panel'>
                                    <List className="my-list">
                                    <List.Item>content 1</List.Item>
                                    <List.Item>content 2</List.Item>
                                    <List.Item>content 3</List.Item>
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </List>
                        </Card.Body> */}
                        {
                            this.state.reply.map((item,idx)=>{
                                if(idx==0){
                                    return <Card.Header
                                        title={item.userName}
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
                            <Accordion defaultActiveKey="0" className="my-accordion">
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
            </div>
        )
    }
}
