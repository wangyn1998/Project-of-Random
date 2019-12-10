import React, { Component } from 'react'
import { NavBar, Icon ,List, TextareaItem,Grid} from 'antd-mobile';
import Aite from './Aite';
import Jinghao from './Jinghao';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {createBrowserHistory} from 'history'

const his = createBrowserHistory();


const data1=[{icon:'iconfont icon-tupian',path:'/'},{icon:'iconfont icon-aite',path:'/aite'},{icon:'iconfont icon-jinghao',path:'/jinghao'},{icon:'iconfont icon-smile',path:'/'}].map((item)=>({
    icon:item.icon,
    path:item.path
}))
let data="";
export default class Post extends Component {
    
    getConnect=()=>{  //api请求函数
        let text = {postContent:this.inp.state.value} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://localhost:8001/postmessage`,{   //Fetch方法y
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
    score=()=>{
        his.push('/block');
        window.location.reload();
      }
      test(e){
        console.log(e.target.placeholder)
      }
    render() {
        let friend =(this.props.location.state)==undefined?"":'@'+this.props.location.state;
        let topic = (this.props.location.state1)==undefined?"":this.props.location.state1;
        data=friend+topic;
        console.log(data);
        data=data==undefined?"":data;
        console.log(data)
        return (
            <div>
                 <NavBar
                    mode="light"
                    leftContent={[
                        <Link to='/block'><i className='iconfont icon-guanbi' style={{color:'black'}}/></Link>
                    ]}
                    rightContent={[
                         <div onClick={this.score}><button style={{borderRadius:'9px',backgroundColor:'blue',width:'100%',height:'70%'}} onClick={this.getConnect}>发布</button></div>
                    ]}
                    style={{border:'1px solid #BBBBBB'}}
                    >发帖</NavBar>
               <List>
                <TextareaItem
                    defaultValue={data}
                    rows={10}
                    ref={(inp)=>{this.inp=inp}}
                    onClick={(e)=>{this.test(e)}}/>
                </List>
                <div className='post1Grid' style={{width:'100%',position:'absolute',bottom:'100px'}}>
                    <Grid data={data1}
                    columnNum={4}
                    hasLine={false}
                    square={false}
                    renderItem={dataItem => {
                        return <Link to={dataItem.path}><i className={dataItem.icon}/></Link>
                    }}
                    />
                </div>
            </div>
        )
    }
}
