import React,{Component} from 'react'

export default class User extends Component {
    render() {
        return (
            <div style={{fontSize:20,textAlign:'center',marginLeft:'150px',marginTop:'130px',lineHeight:
            '45px'}}>
                <div style={{width:'200px',height:'150px',background:'#f1a0a0',float:'left',marginRight:'50px'}}>
                    <p style={{fontSize: 35}}>666</p>
                    <p>新注册用户数</p>
                </div>
                <div style={{width:'200px',height:'150px',background:'#aae5c2',float:'left',marginRight:'50px'}}>
                    <p style={{fontSize: 35}}>999</p>
                    <p>累计用户数量</p>
                </div>
                <div style={{width:'200px',height:'150px',background:'#eeeb57',float:'left'}}>
                    <p style={{fontSize: 35}}>11111</p>
                    <p>发帖量</p>
                </div>
                <p style={{color:'#4177ca',fontSize:50,marginLeft:'200px',marginTop:'40px',float:'left'}}>
                    欢迎使用!!!
                </p>
            </div>
        )
    }
}