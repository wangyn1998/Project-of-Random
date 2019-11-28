import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio,NavBar} from 'antd-mobile'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', //账号
            pwd: '', // 密码
            pwdConfirm: '', // 确认密码
            type: 'worker', // 用户类型 默认求职者
        }
    }

    render() {
        return (
            <div className="page-register">
                <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/my/login'}
                    >注册
                </NavBar>
                <p style={{fontSize:'20px',marginLeft:'15px'}}>手机号码注册</p>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <List>
                    <InputItem onChange={value => this.handleChange('username', value)} type='phone'>手机号</InputItem>
                    <InputItem onChange={value => this.handleChange('pwd', value) }type='password'>密码</InputItem>
                    <InputItem onChange={value => this.handleChange('pwdConfirm', value)} type='password'>确认</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary" onClick={this.handleNext.bind(this)}>下一步</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.handleGoLogin.bind(this)} type="primary">已有账号，去登录</Button>
                </WingBlank>
            </div>
        )
    }

    /*
    *     去登录
    * */
    handleGoLogin() {
        this.props.history.push('/my/login')
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
    handleNext(){
        if(this.state.pwd === this.state.pwdConfirm){
            this.props.history.push('/my/login')
        }else{
            window.alert('两次密码输入不一致！！！')
        }
    }
}

export default Register