import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './my.css'
export default class Login extends Component {
    constructor(props){
        super(props);
        //绑定this时间，如果不绑定，无法传递this
        this.register = this.register.bind(this);
        this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
        this.getConnect = this.getConnect.bind(this);
        this.state = {
            user:'',
            password:'',
        }
    }
    register(){
        console.log(this.props);
        //跳转到注册页面
        this.props.history.push('/my/register')
    }
    userChange(e){
        this.setState({ user : e.target.value })
    }

    passwordChange(e){
        this.setState({ password : e.target.value })
    }

    submit(){
        this.getConnect();
        // window.alert(this.state.user)
        // window.alert(this.state.password)
    }

    getConnect(){  //api请求函数
        let text = {user:this.state.user,password:this.state.password} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch(`http://127.0.0.1:8001/my/login`,{   //Fetch方法
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        }).then(res => res.json()).then(
            data => {
                if(data.success) window.alert('验证成功，欢迎登录');
                else window.alert('验证失败，用户名或密码错误')
            }
        )
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/my'}
                    >登录
                </NavBar>
                <div style={{width:'80px',height:'80px',borderRadius:'50%',border:'1px #708090  solid',display:'block' ,margin:'0 auto',marginTop:'80px'}}>
                    <image src=""/>
                </div>
                <form >
                    <input type='text' name='username' id='user' className='login' placeholder='账号：' onChange={this.userChange}/>
                    <input type="password" name="password" id="password" className='login' placeholder='密码：' onChange={this.passwordChange}/>
                    <input type="submit" value="登录" id="submit" className='sub' onClick={this.submit}/>
                </form>
                <div onClick={this.register} type="primary">注册</div>
            </div>
        )
    }
}

