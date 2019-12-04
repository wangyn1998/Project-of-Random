import React, { Component } from 'react'
import {WhiteSpace,NavBar,Toast,Button,List} from 'antd-mobile'
import {createBrowserHistory} from 'history'
const his = createBrowserHistory();
const Item = List.Item;
export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            score:0,
            isClick:true,
            username:''
        }
    }
    successToast=()=> {       
        console.log(this.state.score);
        const isClick = this.state.isClick;
        if (isClick == true) {   //如果为true 开始执行
            Toast.success('签到成功，积分+10', 1);
            let s = this.state.score;
                s=s+10;
                this.setState({
                    score:s            
            })
            console.log(this.state.isClick)
            this.setState({ isClick: false })   //将isClick 变成false，将不会执行处理事件
            console.log(this.state.isClick)
            const that = this   // 为定时器中的setState绑定this
            const now = new Date().getHours();
            const now1 = new Date().getMinutes();
            const now2 = new Date().getSeconds();
            const hour = (23-now)*60*60*1000;
            const minutes = (59-now1)*60*1000;
            const seconds = (60-now2)*1000;
            const time = hour+minutes+seconds;
            console.log(that.state.isClick)
            localStorage.setItem('click',that.state.isClick);
            let text = {userName:this.state.username,sum:s,updateTime:new Date()} //获取数据
            let send = JSON.stringify(text);   //重要！将对象转换成json字符串
            fetch(`http://127.0.0.1:8001/getscore`,{   //Fetch方法y
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                body: send
            })
            .then(res => res.json())
            .then(
                data => {
                    if(data.success){
                        console.log('aaa')
                    }
                    else{
                        window.alert('失败')
                    }
                }
            )
            setTimeout(function () {       // 设置延迟事件，1秒后将执行
                that.setState({ isClick: true })   // 将isClick设置为true
            }, time);
            localStorage.setItem('click',this.state.isClick);
            console.log(that.state.isClick)
        }
        else{
            Toast.fail('今日已签到，明日再来叭', 1);
            // Toast.success('今日已签到，明日再来叭', 1);
        }
    }
    aaa=()=>{
        his.push('/post');
        window.location.reload();
    }
    componentDidMount(){
        fetch('http://localhost:8001/my')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                username:res[0].userName
            })
        })
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/my'}
                    >签到积分
                </NavBar>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <div style={{float:'left',width:'20%',marginLeft:'10%'}}>
                    <div style={{width:'60px',height:'60px',borderRadius:'50%',marginLeft:'auto',marginRight:'auto'}}>
                        <img src='https://img2.woyaogexing.com/2019/12/02/0f799dade52e4717a238670a5851e6a4!400x400.jpeg' style={{width:'100%',height:'100%',borderRadius:'50%'}}/>                       
                    </div>
                    <p style={{textAlign:'center'}}>{this.state.username}</p>
                </div>  
                <div style={{marginLeft:'40%',marginTop:'20px'}}>
                    <div style={{fontSize:'20px'}}>{this.state.score}分</div>
                    <button style={{fontSize:'8px',color:'#708090',border:'none'}} onClick={()=>window.location.href='my/more'}>积分></button>
                </div>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                {/* <Button onClick={this.successToast} style={{height:'40px',width:'40%'}}>签到领积分</Button> */}
                <List renderHeader={() => '每日任务'} className="my-list">
                    <div onClick={this.successToast}>
                        <Item >每日签到</Item>
                    </div>                    
                    <Item extra="去发帖" arrow="horizontal" onClick={this.aaa}>发帖</Item>
                    <Item extra="去发攻略" arrow="horizontal" onClick={this.aaa}>发攻略</Item>
                </List>
            </div>
        )
    }
}
