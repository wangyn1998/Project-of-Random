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
    addNum(num,path,id,index,event){
        // if(num==null)
        //     num=1;
        // else{
        //     num++;
        // }
        var con=this.state.count[index]+1;
        var con2=this.state.count;
        con2[index]=con;
        var e=event.target;
        this.setState({
            count:con2
        },()=>{
            console.log(this.state.count);
            if(con%2==0){
                num--;
                e.style.color='black';
            }
            else{
                num++;
                e.style.color='#ff9900';
            }
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
            var item1=this.state.post;
            item1[index].postPointNumber=num;
            this.setState({
                post:item1
            })

        });

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
    delItem=(id)=>{
        let text = {postId:id} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://localhost:8001/delnum`,{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            data => {
                
            }
        )
        var post1=this.state.post.filter((item,i)=>item.postId!=id);
        console.log(post1);
        this.setState({
            post:post1
        });
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Link to='/block1'><Icon type="left" /></Link>}
                    >详情</NavBar>
                    {
                    this.state.post.map((item,index)=>(
                        
                        <WingBlank style={{height:'100%',borderRadius:'5px',border:'1px solid #BBBBBB',marginTop:'1%',backgroundColor:'#ffffff',padding:'4%',position:'relative',paddingBottom:'0',color:'black'}} >
                        
                            <img src={item.Uimage} style={{borderRadius:'50%',width:'13%',height:'13%',border:'1px solid #BBBBBB'}}/>
                            <span style={{marginLeft:'5%',position:'absolute',top:'10%'}}>{item.userName}</span>
                            <i className='iconfont icon-shanchu' style={{position:'absolute',top:'20px',right:'20px'}} onClick={this.delItem.bind(this,item.postId)}/>
                            <Link to={'/blockmessage/'+item.postId} onClick={this.clicknum.bind(this,item.postId)}>
                                <div>
                                    <p style={{color:'blue',margin:'5% 0'}}>{item.postTopic}</p>
                                    <div style={{width:'100%'}}><p style={{wordWrap:'break-word'}}>{item.postContent}</p><img src={item.postImage} style={{width:'40%'}}/></div>
                                </div>
                            </Link>
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
                                    
                                return <i className='iconfont icon-dianzan' style={{color:'black'}} onClick={this.addNum.bind(this,num1,'dianzan',id,index)} ><span style={{marginLeft:'4%'}}>{item.postPointNumber}</span></i>
                                }
                            }}/>
                            </div>
                        </WingBlank>
                    ))
                }
                
            </div>
        )
    }
}
