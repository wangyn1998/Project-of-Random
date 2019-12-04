import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,NavBar} from 'antd-mobile'
import {createBrowserHistory} from 'history';
const his = createBrowserHistory();
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone:'',
            password:'',
            repwd: '', // 确认密码
            type: 'worker', // 用户类型 默认求职者
        }
    }
     /*
    *     去登录
    * */
   handleGoLogin() {
    this.props.history.push('/login')
    }
    /*
    *     绑定表单值
    * */
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    /**
     * 登录验证
     */
    submit(){
        this.getConnect();
        // window.alert(this.state.phone)
        // window.alert(this.state.password)
    }
    getConnect(){ //api请求函数
        let text = {phone:this.state.phone,password:this.state.password,repwd:this.state.repwd,Uday:new Date()} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://127.0.0.1:8001/register`,{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            data => {
                if(data.success){
                    his.push('/login');
                    window.location.reload();
                }
                else{
                    window.alert('注册失败，两次输入密码不一致')
                }
            }
        )
    }
    render() {
        return (
            <div className="page-register">
                <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/login'}
                    >注册
                </NavBar>
                <p style={{fontSize:'20px',marginLeft:'15px'}}>手机号码注册</p>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <List>
                    <InputItem onChange={value => this.handleChange('phone', value)} type='text' name='phone' id='phone'>手机号</InputItem>
                    <InputItem onChange={value => this.handleChange('password', value) }type='password' name="password" id="password">密码</InputItem>
                    <InputItem onChange={value => this.handleChange('repwd', value)} type='password' name='repwd' id='repwd'>确认</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary" onClick={this.submit.bind(this)}>下一步</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.handleGoLogin.bind(this)} type="primary">已有账号，去登录</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register