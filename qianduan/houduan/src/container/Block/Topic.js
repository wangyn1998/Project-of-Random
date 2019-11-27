import React, { Component,useEffect,useState} from 'react'
import ReactDOM from "react-dom"
import './Topic.css'
import Model from './Model.js'
export default function Topic() {
    const [isShowPop,changeShowPop] = useState(false);
    function handleInClick(){
        changeShowPop(!isShowPop);
        console.log("ok");
    }
        return (
            <div style={{position:'relative'}}>
                <div className="Topicbox1">
                    <div className="Topicsearch">
                        <input placeholder="请输入要查找的话题"/>
                        <i className="iconfont icon-sousuo da"></i>
                    </div>
                </div>
                <div className="Topicbox2">
                    <h1>爱游不错游话题管理</h1>
                    {(isShowPop == true)?<Model isShow={isShowPop} closeModel={handleInClick}/>:null}
                    <button type='button' onClick={handleInClick}>+</button>
                    <h2>添加</h2>
                </div>
                <div className='Topicbox3'>
                        <ul className='TopicList'>
                            <li className='Topichead'>
                                <h2 className='Topichead1'><b>话题内容</b></h2>
                                <h2 className='Topichead2'><b>操作</b></h2>
                                <h2 className='Topichead2'><b>操作人</b></h2>
                                <h2 className='Topichead2'><b>操作时间</b></h2>
                            </li>
                            <li>
                                <p className='TopicContent'>啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈....</p>
                                <div className='Topicoperation'>
                                    <button type='button' onClick={handleInClick}style={{backgroundColor:'#61b3ed',color:"white"}}>编辑</button>
                                    <button type='button'>移除</button>
                                </div> 
                                
                                <p style={{float:'left',marginLeft:'70px',marginTop:'5px',fontSize:'20px'}}>user1</p>
                                <p style={{float:'left',marginLeft:'78px',marginTop:'5px',fontSize:'20px'}}>2019-10-20 11:01</p>
                            </li>    
                        </ul>
                </div>
                <div className='box4'> 
                    <div style={{marginLeft:'400px'}}>
                        <p>&lt;</p>
                        <p>1</p>
                        <p>&gt;</p>
                    </div>
                </div>
                <div id={"model-root"} style={{position:'absolute',top:'10px',zIndex:'10'}}></div>
                <div id="popLayer" ></div>
			</div>
        )
    }
