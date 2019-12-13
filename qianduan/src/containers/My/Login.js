import React, { Component } from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button, Toast,NavBar } from 'antd-mobile';
import {createBrowserHistory} from 'history'
import './my.css'
import {con} from './context'
const his = createBrowserHistory();
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone:'',
            password:'',
        }
    }
    register(){
        console.log(this.props);
        //跳转到注册页面
        this.props.history.push('/register')
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    submit(){
        this.getConnect();
    }

    getConnect(){  //api请求函数
        let text = {phone:this.state.phone,password:this.state.password} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://127.0.0.1:8001/login`,{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            data => {
                if(data.success){
                    sessionStorage.setItem("user",text.phone);
                    sessionStorage.setItem("logif",true);
                    Toast.success('登录成功，即将跳转到我的页面', 1);
                    his.push('/my')
                    window.location.reload();
                }
                else{
                    Toast.fail('手机号或密码错误，请重新登录', 1);
                }
            }
        )
    }
    componentDidMount(){
        sessionStorage.setItem("logif",false);
    }
    render() {
        return (
            <div className="page-register">
                <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/my'}
                    >登录
                </NavBar>
                {/* <div style={{width:'80px',height:'80px',borderRadius:'50%',border:'1px #708090  solid',display:'block' ,margin:'0 auto',marginTop:'80px'}}>
                    <image src=""/>
                </div> */}
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <List style={{backgroundColor:"#fff",opacity:'0.7',width:'90%',margin:'0 auto'}}>
                    <InputItem onChange={value => this.handleChange('phone', value)} type='text' name='phone' id='phone'>手机号</InputItem>
                    <InputItem onChange={value => this.handleChange('password', value) }type='password' name="password" id="password">密码</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary" onClick={this.submit.bind(this)} style={{backgroundColor:"#fff",opacity:'0.7',color:'#000',width:'70%',margin:'0 auto'}}>下一步</Button>
                    {/* <con.Provider value={this.state.phone}/> */}
                </WingBlank>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary" onClick={this.register.bind(this)} style={{backgroundColor:"#fff",opacity:'0.7',color:'#000',width:'70%',margin:'0 auto'}}>去注册</Button>
                    {/* <con.Provider value={this.state.phone}/> */}
                </WingBlank>
                {/* <div onClick={this.register.bind(this)} type="primary">注册</div> */}
                
            </div>
        )
    }
}

