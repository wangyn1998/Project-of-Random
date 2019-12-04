import React, { Component } from 'react'
import { NavBar, Icon,WingBlank ,Grid,NoticeBar} from 'antd-mobile';
import './block.css'
import Post from './Post';
import PostMessage from './PostMessage';
import BlockMessage from './BlockMessage';
import {Link} from 'react-router-dom';

const data1= Array.from(new Array(3)).map((_val, i) => ({
    idx: i
  }));
export default class Block1 extends Component {
    constructor(){
        super();
        this.state={
            topic:[],
            post:[],
            number:0
        }
    }
    componentDidMount(){
        // 发起请求
        fetch('http://localhost:8001/topic')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                topic:res
            })
        })
        fetch('http://localhost:8001/post')
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
        let data4=[];
        let data2=this.state.topic.map((item,idx)=>{
            if(idx<4){
                var obj={item:item,idx:idx};
                data4.push(obj);
            }
            return 0;
        })
        // var data3=[0,1,2,3].map((it,idx)=>({
        //     item:this.state.topic[idx],
        //     idx:idx
        // }))
        // console.log(data3[0].item);
        return (
            <div style={{marginBottom:'100px'}}>
                <NavBar
                    mode="dark"
                    leftContent={[
                        <i className='icon-wode iconfont' style={{marginRight:'7px'}}/>,
                        <Link to='/put'><span style={{color:'white'}}>我发出的</span></Link>
                    ]}
                    rightContent={[
                        <Link to='/post'><i  className='icon-75bianji iconfont' style={{color:'white'}}/></Link>
                    ]}
                    >论坛</NavBar>
                <WingBlank style={{height:'100%',borderRadius:'5px',border:'1px solid #BBBBBB',marginTop:'0.3%',position:'relative'}}>
                    <img src='/images/block4.jpg' style={{width:'100%',height:'120px',borderRadius:'5px'}}/>
                    <NoticeBar marqueeProps={{ loop: true,style: { padding: '0 7.5px'} }} style={{background:'rgba(255,255,255,0)'}}>
                        热门话题：网红打卡地 最后悔去的地方 十一最值得看的风景 
                    </NoticeBar>
                     <Grid data={data4} 
                     hasLine={false} 
                     columnNum={2}
                     className='blockGrid'
                     square={false}
                     style={{width:'50%'}}
                     itemStyle={{textAlign:'left'}}
                     renderItem={dataItem=>{
                         console.log(dataItem);
                            if(dataItem.idx<3){
                                return <li style={{color:'black',fontSize:'14px'}}>{dataItem.item.topicContent}</li>
                            }
                            else if(dataItem.idx==3){
                                return <li style={{color:'black',fontSize:'14px'}}>{dataItem.item.topicContent}<div style={{position:'absolute',right:'0',marginRight:'5%',bottom:'5%'}}><Link to='/postmessage'><i className='iconfont icon-gengduo'/></Link></div></li>
                            }
                     }}
                     />
                </WingBlank>
                {/* <Link to='blockmessage'>
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
                </Link> */}
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
                {/* <Post/> */}
                {/* <PostMessage/> */}
                {/* <BlockMessage/> */}
            </div>
           
        )
    }
}
