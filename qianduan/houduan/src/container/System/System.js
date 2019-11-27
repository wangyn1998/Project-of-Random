import React,{Component} from 'react'

export default class System extends Component {
    render() {
        return (
            <div style={{width:'1000px',height:'400px',margin:'20px auto',background:'#b4dcf8',fontSize:'17px'}}>
                <div style={{height:'150px'}}>
                    <p style={{textAlign:'center',color:'#4177ca'}}>当前管理员信息</p>
                    <img src="./images/logo.png" style={{width:'80px',height:'80px',float:'left',marginLeft:'40px',marginRight:'20px'}}/>
                    <p style={{marginLeft:'10px'}}>
                        用户名：
                        <span></span>
                    </p>
                    <p>
                        真实姓名：
                        <span></span>
                    </p>
                </div>
                <div style={{width:'600px',height:'210px',margin:'20px auto'}}>
                    <div style={{width:'240px',height:'40px',background:'#eef7fe',marginLeft:'50px',marginTop:'20px',textAlign:'center',color:'#5a71c5',float:'left'}}>
                        <p style={{lineHeight:'40px'}}>
                            性别：
                            <span></span>
                        </p>
                    </div>
                    <div style={{width:'240px',height:'40px',background:'#eef7fe',marginLeft:'50px',marginTop:'20px',textAlign:'center',color:'#5a71c5',float:'left'}}>
                        <p style={{lineHeight:'40px'}}>
                            手机号：
                            <span></span>
                        </p>
                    </div>
                    <div style={{width:'240px',height:'40px',background:'#eef7fe',marginLeft:'50px',marginTop:'20px',textAlign:'center',color:'#5a71c5',float:'left'}}>
                        <p style={{lineHeight:'40px'}}>
                            邮箱：
                            <span></span>
                        </p>
                    </div>
                    <div style={{width:'240px',height:'40px',background:'#eef7fe',marginLeft:'50px',marginTop:'20px',textAlign:'center',color:'#5a71c5',float:'left'}}>
                        <p style={{lineHeight:'40px'}}>
                            职位：
                            <span></span>
                        </p>
                    </div>
                    <button style={{width:'180px',height:'40px',background:'#70bdf1',border:'none',color:'#6882da',marginLeft:'210px',marginTop:'20px'}}>编辑</button>
                </div>
            </div>
        )
    }
}