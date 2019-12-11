import React, { Component } from 'react'
import { NavBar, Icon,SearchBar ,Card} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
let str="";
let arr="";
let path={};
export default class Jinghao extends Component {
    constructor(){
        super();
        this.state={
            topic:[]
        }
    }
    componentWillMount(){
        // 发起请求
        fetch('http://localhost:8001/topic')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                topic:res
            })
        })
    }
    post=(e)=>{
        str=e.target.innerHTML;
        arr=str.split('>');
        path = {
            pathname:'/post',
            state1:arr[1]
        };
        window.localStorage.setItem('topic', JSON.stringify(arr[1]));
    }
    
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Link to='/post'><Icon type="left" /></Link>}
                    rightContent={[
                        <Link to={path}><button style={{borderRadius:'9px',backgroundColor:'white',width:'100%',height:'70%',color:'blue'}}>完成</button></Link>
                    ]}
                    >选择话题</NavBar>
                <SearchBar placeholder="#话题" ref={ref => this.autoFocusInst = ref} />
                <div>
                {
                    this.state.topic.map((item)=>(
                        <Card style={{minHeight:'0'}} className='aite1'>
                            <Card.Header
                                title={item.topicContent}
                                onClick={this.post.bind(this)}
                            />
                        </Card>
                    ))
                }
                </div>
            </div>
        )
    }
}
