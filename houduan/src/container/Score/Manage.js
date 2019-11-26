import React, { Component } from 'react'
import { Input } from 'antd';
import { Table, Divider, Tag } from 'antd';
import {Link,Route}from 'react-router-dom'
const { Search } = Input;
const data = [
  {
    key: '1',
    taskId: '郑尚姿',
    taskContent:'1',
    taskScore:100,
  },
  {
    key: '1',
    taskId: '郑尚姿',
    taskContent:'1',
    taskScore:100,
  },
  {
    key: '1',
    taskId: '郑尚姿',
    taskContent:'1',
    taskScore:100,
  },
  {
    key: '1',
    taskId: '郑尚姿',
    taskContent:'1',
    taskScore:100,
  },
  {
    key: '1',
    taskId: '郑尚姿',
    taskContent:'1',
    taskScore:100,
  },
  {
    key: '1',
    taskId: '郑尚姿',
    taskContent:'1',
    taskScore:100,
  },
  

];
const columns = [
  {
    title: '任务编号',
    dataIndex: 'taskId',
    key: 'taskId',
  },
  {
    title: '任务内容',
    dataIndex: 'taskContent',
    key: 'taskContent',
  },
  {
    title: '分数',
    dataIndex: 'taskScore',
    key: 'taskScore',
  },
 
  {
    title: "操作",
    key: 'action',
    render: (text, record) => (
      <span>
        <a><button style={{backgroundColor:'#61b3ed',border:'1px solid grey',padding:'5px 10px',color:'white'}}>编辑</button></a>
        <a><button style={{backgroundColor:'white',border:'1px solid grey',padding:'5px 10px'}}>移除</button></a>
      </span>
    ),
  },
];
export default class Manage extends Component {
    render() {
        return (
            <div>
               <Search
                    placeholder="请输入要查找的任务编号"
                    onSearch={value => console.log(value)}
                    style={{ width: 350,marginTop:'2%',marginLeft:'5%',}}
                    />
                <div style={{color:'black',fontSize:'26px',marginLeft:'5%',marginTop:"0.6%",}}> 爱游不错游任务管理    
                <i className='iconfont icon-jiahao'style={{marginLeft:'4%'}}></i>     
                <a><button style={{backgroundColor:'white',border:'none',padding:'5px 10px',color:'black'}}>添加</button></a>
                </div>
                <Table columns={columns} dataSource={data} style={{marginLeft:'5%',marginRight:'5%',marginTop:"0.6%"}} pagination={{defaultPageSize:4}}/>
            </div>
        )
    }
}
