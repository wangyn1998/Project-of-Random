import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './Post.css';
export default class Post extends Component {
    render() {
        return (
            <div >
                <div className="Postbox1">
                    <b><h1 className='Posttitle'>帖子记录</h1></b>
                     <div className='Postsearch'>
                         <input  className='PostsearchBar' placeholder="搜索"/>
                         <i className="iconfont icon-sousuo da"></i>
                     </div>
                </div>
                <div className='Postbox2'>
                    <p style={{float:'left',marginTop:'10px'}}>操作时间</p>
                    <div className='Postdate'>
                        <input type="date" value="2015-09-24"/>
                        <i className="iconfont icon-date"></i>
                    </div>
                    <p style={{float:'left',marginTop:'10px',marginLeft:'20px'}}>至</p>
                    <div className='Postdate'>
                        <input type="date" value="2015-09-24"/>
                        <i className="iconfont icon-date"></i>
                    </div>
                </div>
                <div className='Postbox3'>
                        <ul>
                            <li className='Posthead'>
                                <h2 className='Posthead1'>帖子内容</h2>
                                <h2 className='Posthead2'>操作</h2>
                                <h2 className='Posthead2'>操作人</h2>
                                <h2 className='Posthead2'>操作时间</h2>
                            </li> 
                            <li>
                                <img className="Postimg" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2973069531,657782944&fm=26&gp=0.jpg"/>
                                <div className="Postarticle">
                                    <h3>一只兔子</h3>
                                    <p>啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈....</p>
                                </div>
                                <button className='Postdel'>移除</button>
                                <p style={{float:'left',marginLeft:'100px',marginTop:'5px',fontSize:'20px'}}>user1</p>
                                <p style={{float:'left',marginLeft:'78px',marginTop:'5px',fontSize:'20px'}}>2019-10-20 11:01</p>
                            </li>    
                        </ul>
                </div>
                <div className='Postbox4'> 
                    <div style={{marginLeft:'400px'}}>
                        <p>&lt;</p>
                        <p>1</p>
                        <p>&gt;</p>
                    </div>
                </div>
            </div>
        )
    }
}
