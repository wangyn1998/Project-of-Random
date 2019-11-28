import React, { Component } from 'react'
import {WhiteSpace,NavBar,Toast,Button,List} from 'antd-mobile'
const Item = List.Item;
export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            score:0,
            isClick:true
        }
    }
    successToast=()=> {
        let s = this.state.score;
        s=s+10;
        this.setState({
            score:s
        })
        const { isClick } = this.state
        if (isClick) {   //如果为true 开始执行
            Toast.success('签到成功，积分+10', 1);
            this.setState({ isClick: false })   //将isClick 变成false，将不会执行处理事件
            // 编写点击事件执行的代码
            const that = this   // 为定时器中的setState绑定this
            const now = new Date().getHours();
            const now1 = new Date().getMinutes();
            const now2 = new Date().getSeconds();
            const hour = (23-now)*60*60*1000;
            const minutes = (59-now1)*60*1000;
            const seconds = (60-now2)*1000;
            const time = hour+minutes+seconds
            setTimeout(function () {       // 设置延迟事件，1秒后将执行
                that.setState({ isClick: true })   // 将isClick设置为true
            }, time);
        }
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
                    <div style={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'red',marginLeft:'auto',marginRight:'auto'}}>                       
                    </div>
                    <p style={{textAlign:'center'}}>用户名</p>
                </div>  
                <div style={{marginLeft:'40%',marginTop:'20px'}}>
                    <div style={{fontSize:'20px'}}>95分</div>
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
                    <Item extra="去发帖" arrow="horizontal" onClick={()=>window.location.href='/post'}>发帖</Item>
                    {/* <Item extra="去发攻略" arrow="horizontal" onClick={()=>window.location.href='/my/login'}>发攻略</Item> */}
                </List>
            </div>
        )
    }
}
