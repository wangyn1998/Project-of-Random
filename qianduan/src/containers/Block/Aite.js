import React, { Component } from 'react'
import { NavBar, Icon,SearchBar ,Card} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
let str="";
let arr="";
let path={};
export default class Aite extends Component {
    constructor(){
        super();
        this.state={
            user:[]
        }
    }
    componentWillMount(){
        fetch('http://localhost:8001/usermessage2')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                user:res
            })
        })
    }
    post=(e)=>{
        str=e.target.innerHTML;
        arr=str.split('>');
        path = {
            pathname:'/post',
            state:arr[1]
        };
        window.localStorage.setItem('friend', JSON.stringify(arr[1]));          
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
                    >选择好友</NavBar>
                <SearchBar placeholder="搜索好友" ref={ref => this.autoFocusInst = ref} />
                {/* <Card style={{minHeight:'0'}} className='aite1'>
                    <Card.Header
                        title="This is title"
                        ref='1'
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        onClick={this.post.bind(this)}
                        />
                </Card>
                <Card style={{minHeight:'0'}} className='aite1'>
                    <Card.Header
                        title="This is title"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        onClick={this.post.bind(this)}
                    />
                </Card> */}
                <div>
                {
                    this.state.user.map((item)=>(
                        <Card style={{minHeight:'0'}} className='aite1'>
                            <Card.Header
                                title={item.userName}
                                thumb={item.Uimage}
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
