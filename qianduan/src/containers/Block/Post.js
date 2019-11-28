import React, { Component } from 'react'
import { NavBar, Icon ,List, TextareaItem,Grid} from 'antd-mobile';
import Aite from './Aite';
import Jinghao from './Jinghao';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const data1=[{icon:'iconfont icon-tupian',path:'/'},{icon:'iconfont icon-aite',path:'/aite'},{icon:'iconfont icon-jinghao',path:'/jinghao'},{icon:'iconfont icon-smile',path:'/'}].map((item)=>({
    icon:item.icon,
    path:item.path
}))
export default class Post extends Component {
    render() {
        return (
            <div>
                 <NavBar
                    mode="light"
                    leftContent={[
                        <Link to='/'><i className='iconfont icon-guanbi' style={{color:'black'}}/></Link>
                    ]}
                    rightContent={[
                         <Link to='/'><button style={{borderRadius:'9px',backgroundColor:'blue',width:'100%',height:'70%'}}>发布</button></Link>
                    ]}
                    style={{border:'1px solid #BBBBBB'}}
                    >发帖</NavBar>
               <List>
                <TextareaItem
                    placeholder="分享你的游记和心情..."
                    clear
                    rows={10}
                />
                </List>
                <div className='post1Grid' style={{width:'100%',position:'absolute',bottom:'0px'}}>
                    <Grid data={data1}
                    columnNum={4}
                    hasLine={false}
                    square={false}
                    renderItem={dataItem => {
                        return <Link to={dataItem.path}><i className={dataItem.icon}/></Link>
                    }}
                    />
                </div>
                {/* <Aite/> */}
                {/* <Jinghao/> */}
                
            </div>
        )
    }
}
