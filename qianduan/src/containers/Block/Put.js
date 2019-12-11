import React, { Component } from 'react'
import { NavBar, Icon,SearchBar ,Card,WingBlank,Grid} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const data3=['iconfont icon-zhuanfa-','iconfont icon-pinglun','iconfont icon-dianzan'].map((item)=>({
    icon:item
}))
const data1= Array.from(new Array(3)).map((_val, i) => ({
    idx: i
  }));
export default class Put extends Component {
    constructor(){
        super();
        this.state={
            post:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:8001/put')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                post:res
            })
        })
    }
    addNum(num,path,id){
        if(num==null)
            num=1;
        else{
            num++;
        }
        console.log(num);
        let text = {number:num,postId:id} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://localhost:8001/`+path,{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            data => {
                
            }
        )
        this.setState({number:num});
    }
    clicknum(id){
        console.log(id);
        let text = {postId:id} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://localhost:8001/clicknum`,{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            data => {
                
            }
        )
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Link to='/block'><Icon type="left" /></Link>}
                    >详情</NavBar>
                {
                    this.state.post.map((item)=>(
                        <Link to='/blockmessage' onClick={this.clicknum.bind(this,item.postId)}>
                        <WingBlank style={{height:'100%',borderRadius:'5px',border:'1px solid #BBBBBB',marginTop:'1%',backgroundColor:'#ffffff',padding:'4%',position:'relative',paddingBottom:'0',color:'black'}} >
                            <img src={item.Uimage} style={{borderRadius:'50%',width:'13%',height:'13%',border:'1px solid #BBBBBB'}}/>
                            <span style={{marginLeft:'5%',position:'absolute',top:'10%'}}>{item.userName}</span>
                            <div>
                    <p style={{color:'blue',margin:'5% 0'}}>{item.postTopic}</p>
                                <div style={{width:'100%'}}><p style={{wordWrap:'break-word'}}>{item.postContent}</p><img src={item.postImage} style={{width:'40%'}}/></div>
                            </div>
                            <div style={{width:'100%',border: '1px solid #d0d0d0'}}></div>
                            <div className='blockGrid1'>
                            <Grid data={data1} columnNum={3} square={false}
                            itemStyle={{padding:'0 0',textAlign:'left'}}
                            className='blockGrid1'
                            renderItem={dataItem=>{
                                if(dataItem.idx==0){
                                    var num1=item.postRepostNum;
                                    var id=item.postId;
                                    return <i className='iconfont icon-zhuanfa-' onClick={this.addNum.bind(this,num1,'zhuanfa',id)}><span style={{marginLeft:'4%'}} >{item.postRepostNum}</span></i>
                                }
                                else if(dataItem.idx==1){
                                    var num1=item.postReplyNum;
                                    var id=item.postId;
                                    return <i className='iconfont icon-pinglun' onClick={this.addNum.bind(this,num1,'pinglun',id)}><span style={{marginLeft:'4%'}}>{item.postReplyNum}</span></i>
                                }
                                else{
                                    var num1=item.postPointNumber;
                                    var id=item.postId;
                                    return <i className='iconfont icon-dianzan' onClick={this.addNum.bind(this,num1,'dianzan',id)}><span style={{marginLeft:'4%'}}>{item.postPointNumber}</span></i>
                                }
                            }}/>
                            </div>
                        </WingBlank>
                        </Link>
                    ))
                }
                
            </div>
        )
    }
}
