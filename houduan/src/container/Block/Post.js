import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './Post.css';
export default class Post extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         data:[]
    //     }
    // }
    // componentDidMount(){
    //     let page = this.props.match.params.id;
    //     fetch('https://cnodejs.org/api/v1/topics?page='+page+'&tab=good')
    //         .then((res)=>res.json())
    //         .then((res)=>{
    //             console.log(res)
    //             this.setState({
    //                 data: res.data
    //             });
    //         })
    // }
    // componentDidUpdate(prevProps,prevState){
    //     if(prevProps.match.params.id!==this.props.match.params.id){
    //         let page = this.props.match.params.id;
    //         fetch('https://cnodejs.org/api/v1/topics?page='+page+'&tab=good')
    //             .then((res)=>res.json())
    //             .then((res)=>{
    //                 console.log(res)
    //                 this.setState({
    //                     data: res.data
    //                 });
    //             })
    //     }
    // }
    render() {
        return (
            <div >
                <div className="box1">
                    <b><h1 className='title'>帖子记录</h1></b>
                     <div className='search'>
                         <input  className='searchBar' placeholder="搜索"/>
                         <i className="iconfont icon-sousuo da"></i>
                     </div>
                </div>
                <div className='box2'>
                    <p style={{float:'left',marginTop:'10px'}}>操作时间</p>
                    <div className='date'>
                        <input type="date" value="2015-09-24"/>
                        <i className="iconfont icon-date"></i>
                    </div>
                    <p style={{float:'left',marginTop:'10px',marginLeft:'20px'}}>至</p>
                    <div className='date'>
                        <input type="date" value="2015-09-24"/>
                        <i className="iconfont icon-date"></i>
                    </div>
                </div>
                <div className='box3'>
                        <ul>
                            <li className='head'>
                                <h2 className='head1'>帖子内容</h2>
                                <h2 className='head2'>操作</h2>
                                <h2 className='head2'>操作人</h2>
                                <h2 className='head2'>操作时间</h2>
                            </li>
                            <li>
                                <img className="img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2973069531,657782944&fm=26&gp=0.jpg"/>
                                <div className="article">
                                    <h3>一只兔子</h3>
                                    <p>啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈....</p>
                                </div>
                                <button className='del'>移除</button>
                                <p style={{float:'left',marginLeft:'100px',marginTop:'5px',fontSize:'20px'}}>user1</p>
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
            </div>
        )
    }
}
