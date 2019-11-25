import React, { Component } from 'react'
import { Table } from 'antd';
const data = [
    {
      key: '1',
      Uimage:'1.png',
      Uname: '郑尚姿',
      Uphone:'15031530670',
      Usex:'女',
      Ubirthday:'1999-02-05'
    },
    {
        key: '2',
        Uimage:'1.png',
        Uname: '郑尚姿',
        Uphone:'15031530670',
        Usex:'女',
        Ubirthday:'1999-02-05'
      },
      {
        key: '3',
        Uimage:'1.png',
        Uname: '郑尚姿',
        Uphone:'15031530670',
        Usex:'女',
        Ubirthday:'1999-02-05'
      },
      {
        key: '4',
        Uimage:'1.png',
        Uname: '郑尚姿',
        Uphone:'15031530670',
        Usex:'女',
        Ubirthday:'1999-02-05'
      },
      {
        key: '5',
        Uimage:'1.png',
        Uname: '郑尚姿',
        Uphone:'15031530670',
        Usex:'女',
        Ubirthday:'1999-02-05'
      },
     
  
  ];
  const columns = [
    {
        title: '头像',
        dataIndex: 'Uimage',
        key: 'Uimage',
    },
    {
      title: '用户名',
      dataIndex: 'Uname',
      key: 'Uname',
    },
    {
      title: '手机号',
      dataIndex: 'Uphone',
      key: 'Uphone',
    },
    {
      title: '性别',
      dataIndex: 'Usex',
      key: 'Usex',
    },
    {
        title: '生日',
        dataIndex: 'Ubirthday',
        key: 'Ubirthday',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a><button style={{backgroundColor:'white',border:'1px solid grey',padding:'5px 10px'}}>移除</button></a>
          </span>
        ),
      },
  ];
export default class Manage extends Component {
    render() {
        return (
            <div>
                <Table columns={columns} dataSource={data} style={{marginLeft:'5%',marginRight:'5%',marginTop:"4%"}} pagination={{defaultPageSize:4}}/>

                
            </div>
        )
    }
}
