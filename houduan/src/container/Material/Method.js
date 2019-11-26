import React, { Component } from 'react'
import { Table } from 'antd'
import './Material.css'
const data = [
    {
        key: '1',
        Mid:'01',
        Mcity: '苏州',
        Mday:'3',
        Mcontent:'01.txt',
        Mimage:'01.png',
        Method:'01.doc'
    },
    {
        key: '2',
        Mid:'02',
        Mcity: '苏州',
        Mday:'3',
        Mcontent:'01.txt',
        Mimage:'01.png',
        Method:'01.doc'
    },
    {
        key: '3',
        Mid:'03',
        Mcity: '苏州',
        Mday:'3',
        Mcontent:'01.txt',
        Mimage:'01.png',
        Method:'01.doc'
    },
    
];
  const columns = [
    {
        title: '编号',
        dataIndex: 'Mid',
        key: 'Mid',
    },
    {
        title: '城市名',
        dataIndex: 'Mcity',
        key: 'Mcity',
    },
    {
        title: '天数',
        dataIndex: 'Mday',
        key: 'Mday',
    },
    {
        title: '城市介绍',
        dataIndex: 'Mcontent',
        key: 'UsexMcontent',
    },
    {
        title: '城市照片',
        dataIndex: 'Mimage',
        key: 'Mimage',
    },
    {
        title: '攻略',
        dataIndex: 'Method',
        key: 'Method',
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
    },
];
export default class Method extends Component {
    render() {
        return (
            <div>
                <div className="Materialbox1">
                     <div className='Materialsearch'>
                        <input  className='MaterialBar' placeholder="请输入要查找的关键字"/>
                        <i className="iconfont icon-sousuo da"/>
                     </div>
                </div>
                <div className="Materialbox2">
                    <p style={{fontSize:'22px',fontWeight:'bold'}}>爱游不错游攻略管理
                        <i style={{marginLeft:'30px'}}className="iconfont icon-wuuiconxiangjifangda"/>
                        <span style={{fontWeight:'lighter',fontSize:'20px',marginLeft:'10px'}}>添加</span>                        
                    </p>
                </div>
                <Table columns={columns} dataSource={data} style={{marginLeft:'5%',marginRight:'5%',marginTop:"1%"}} pagination={{defaultPageSize:4}}/>   
            </div>
        )
    }
}
