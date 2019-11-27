import React, { Component } from 'react'
import { Table } from 'antd';
import {Route,Link}from 'react-router-dom'

const columns = [
    {
      title: '完成任务内容',
      dataIndex: 'taskContent',
      render: text => <a>{text}</a>,
    },
    {
      title: '积分变化',
      dataIndex: 'taskScore',
    },
    {
      title: '总积分',
      dataIndex: 'sum',
    },
  ];
  
  const data = [
    {
      key: '1',
      taskContent: 'John Brown',
      taskScore: '￥300,000.00',
      sum: 'New York No. 1 Lake Park',
    },
    {
        key: '1',
        taskContent: 'John Brown',
        taskScore: '￥300,000.00',
        sum: 'New York No. 1 Lake Park',
      },
      {
        key: '1',
        taskContent: 'John Brown',
        taskScore: '￥300,000.00',
        sum: 'New York No. 1 Lake Park',
      },
      {
        key: '1',
        taskContent: 'John Brown',
        taskScore: '￥300,000.00',
        sum: 'New York No. 1 Lake Park',
      },
      {
        key: '1',
        taskContent: 'John Brown',
        taskScore: '￥300,000.00',
        sum: 'New York No. 1 Lake Park',
      },
  ];
  
export default class ListIn extends Component {
    render() {
        return (
            <div>
                 <Table
                 style={{marginTop:'2%',marginLeft:'5%',marginRight:'5%'}}
                    columns={columns}
                    dataSource={data}
                    bordered
                    title={() => '用户: 一只小兔子'}
                    pagination={{defaultPageSize:4}}
                />
                <div style={{textAlign:'center'}}>
                <Link to='/score/list'><button style={{backgroundColor:'#61b3ed',border:'1px solid white',padding:'5px 10px',color:'white',width:'6%',height:'10%',borderRadius:'10px'}}>返回</button></Link>
                </div>
            </div>
        )
    }
}
