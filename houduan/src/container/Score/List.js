import React, { Component } from 'react'
import { Table } from 'antd';
const data = [
    {
      key: '1',
      userName: '郑尚姿',
      scoreRank:'1',
      sum:100,
      updateTime:'1999-02-05'
    },
    {
        key: '1',
        userName: '郑尚姿',
        scoreRank:'1',
        sum:100,
        updateTime:'1999-02-05'
      },
      {
        key: '1',
        userName: '郑尚姿',
        scoreRank:'1',
        sum:100,
        updateTime:'1999-02-05'
      },
      {
        key: '1',
        userName: '郑尚姿',
        scoreRank:'1',
        sum:100,
        updateTime:'1999-02-05'
      },
      {
        key: '1',
        userName: '郑尚姿',
        scoreRank:'1',
        sum:100,
        updateTime:'1999-02-05'
      },
     
  
  ];
  const columns = [
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
    {
      title: '总分',
      dataIndex: 'sum',
      key: 'sum',
    },
    {
        title: '排名',
        dataIndex: 'scoreRank',
        key: 'scoreRank',
      },
      {
        title: '个人积分',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>个人积分明细</a>
          </span>
        ),
      },
  ];

export default class List extends Component {
    render() {
        return (
            <div>
                 <Table columns={columns} dataSource={data} style={{marginLeft:'5%',marginRight:'5%',marginTop:"4%"}} pagination={{defaultPageSize:4}}/>

                
            </div>
        )
    }s
}
