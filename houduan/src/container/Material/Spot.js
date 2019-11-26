import React, { useState } from 'react';
import { Table} from 'antd';
import Model from './Model'
import './Material.css'

const data = [
    {
        key: '1',
        Sid:'01',
        Scity: '北京',
        Sname:'太仆寺旗',
        Scontent:'01.txt',
        Simage:'01.png',
        Stype:'玩乐'
    },
    {
        key: '1',
        Sid:'02',
        Scity: '北京',
        Sname:'太仆寺旗',
        Scontent:'01.txt',
        Simage:'01.png',
        Stype:'玩乐'
    },
    {
        key: '2',
        Sid:'03',
        Scity: '北京',
        Sname:'太仆寺旗',
        Scontent:'01.txt',
        Simage:'01.png',
        Stype:'玩乐'
    }  
];
const columns = [
    {
        title: '景点编号',
        dataIndex: 'Sid',
        key: 'Sid',
    },
    {
        title: '城市名',
        dataIndex: 'Scity',
        key: 'Scity',
    },
    {
        title: '景点名',
        dataIndex: 'Sname',
        key: 'Sname',
    },
    {
        title: '景点介绍',
        dataIndex: 'Scontent',
        key: 'Scontent',
    },
    {
        title: '景点照片',
        dataIndex: 'Simage',
        key: 'Simage',
    },
    {
        title: '类别',
        dataIndex: 'Stype',
        key: 'Stype',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a><button style={{backgroundColor:'#61b3ed',border:'1px solid #dfdfdf',padding:'5px 10px',color:'white'}}>编辑</button></a>
                <a><button style={{backgroundColor:'white',border:'1px solid #dfdfdf',padding:'5px 10px'}}>移除</button></a>
            </span>
        ),
    }
];
export default function Spot(){     
    const [isShowPop,changeShowPop] = useState(false);
    function handleInClick(){
        changeShowPop(!isShowPop);
    }
    return (
        <div style={{position:'relative'}}>
            <div className="Materialbox1">
                <div className='Materialsearch'>
                    <input  className='MaterialBar' placeholder="请输入要查找的关键字"/>
                    <i className="iconfont icon-sousuo da"/>
                </div>
            </div>
            <div className="Materialbox2">
                <p style={{fontSize:'22px',fontWeight:'bold'}}>爱游不错游景点管理
                    <i style={{marginLeft:'30px'}}className="iconfont icon-wuuiconxiangjifangda"/>
                    {(isShowPop == true)?<Model isShow={isShowPop} closeModel={handleInClick}/>:null}
                    <button style={{background:'white',border:'none',fontSize:'20px',marginLeft:'10px'}} onClick={handleInClick}>添加</button>
                </p>
            </div>
            <Table columns={columns} dataSource={data} style={{marginLeft:'5%',marginRight:'5%',marginTop:"0.6%"}} pagination={{defaultPageSize:4}}/>
            <div id={"model-root"} style={{position:"absolute",top:'10px',zIndex:'100',}}></div>
            <div id="popLayer" style={{position: "absolute",display:"none",left:"0",top:"0",right:'0',zIndex:"0",background:"white",opacity:"0.8",filter: "alpha(opacity=80)",/* 只支持IE6、7、8、9 */}} ></div>
        </div>
    )
}
