import React, { Component } from 'react'
import { Table } from 'antd';
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
    },
    
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
    },
];
export default class Spot extends Component {
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
                    <p style={{fontSize:'22px',fontWeight:'bold'}}>爱游不错游景点管理
                        <i style={{marginLeft:'30px'}}className="iconfont icon-wuuiconxiangjifangda"/>
                        <span style={{fontWeight:'lighter',fontSize:'20px',marginLeft:'10px'}}>添加</span>                        
                    </p>
                </div>
                <Table columns={columns} dataSource={data} style={{marginLeft:'5%',marginRight:'5%',marginTop:"1%"}} pagination={{defaultPageSize:4}}/>   
            </div>
        )
    }
}
