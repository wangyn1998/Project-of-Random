import React, { Component } from 'react'
import { NavBar ,Progress, List,InputItem,DatePicker,ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import {createBrowserHistory} from 'history'
const his = createBrowserHistory();
export default class Update extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent: 0,
            disabled: false,
            users:
                {userName:'',
                Uimage:'',
                Usex:'',
                Ubirthday:'',
                Uaddress:'',
                Usign:'',
                Uphone:'',
                Upercent:0
            },
            multiple: false,
            files: []
            
        };
        this.nameChange = this.nameChange.bind(this);
        this.sexChange = this.sexChange.bind(this);
        this.birthdayChange = this.birthdayChange.bind(this);
        this.placeChange = this.placeChange.bind(this);
        this.signChange = this.signChange.bind(this);
    }
    componentDidMount(){
        fetch('http://localhost:8001/updateuser')
        .then((res)=>res.json())
        .then((res)=>{
            var data={};
            console.log(res);
            console.log(res[0])
            for(var key in res[0]){
                if(res[0][key]=='-'){
                    data[key]=''
                }else{
                    data[key]=res[0][key];
                }
            }
            console.log(data);
            this.setState({
                users:{
                    userName:data.userName,
                    Uimage:data.Uimage,
                    Usex:data.Usex,
                    Ubirthday:'',
                    Uaddress:data.Uaddress,
                    Usign:data.Usign,
                    Uphone:data.Uphone,
                    Upercent:data.Upercent
                }
            })
        })
    }
    nameChange(e){
        let data=Object.assign({},this.state.users,{userName:e})
        this.setState({
            users:data
        })
    }
    sexChange(e){
        let data=Object.assign({},this.state.users,{Usex:e})
        this.setState({
            users:data
        })
    }
    birthdayChange(e){
        let data=Object.assign({},this.state.users,{Ubirthday:e})
        this.setState({
            users:data
        })
    }
    placeChange(e){
        let data=Object.assign({},this.state.users,{Uaddress:e})
        this.setState({
            users:data
        })
    }
    signChange(e){
        let data=Object.assign({},this.state.users,{Usign:e})
        this.setState({
            users:data
        })
    }
    //图片选择
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
    onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
        multiple: index === 1,
    });
    }
    getConnect=()=>{  //api请求函数
        let yuanming = this.state.users.userName
        let p = -2
        for(let key in this.state.users){
            console.log(key)
            console.log(this.state.users[key])
            if(this.state.users[key] !== '' && this.state.users[key] !=='-'){
                p ++;
            }
        }
        let pp = Math.round(p*15) 
        let data=Object.assign({},this.state.users,{Upercent:pp})
        this.setState({
            users:data
        })
        let text = {
            yuanming:yuanming,
            userName:this.state.users.userName,
            Uimage:this.state.users.Uimage,
            Usex:this.state.users.Usex,
            Ubirthday:this.state.users.Ubirthday,
            Uaddress:this.state.users.Uaddress,
            Usign:this.state.users.Usign,
            Uphone:this.state.users.Uphone,
            Upercent:pp
        }
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        console.log(text);
        fetch(`http://127.0.0.1:8001/updateuser`,{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
            
        })
        .then(res => res.json())
        .then(
            data => {
                if(data.success){
                    window.alert('修改成功');
                    // his.push('/my')
                    // window.location.reload();
                }
                else{
                    window.alert('验证失败，用户名或密码错误')
                }
            }
        )
    }
    render() {
        const { files } = this.state;
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/my'}
                    >编辑资料
                </NavBar>  
                <div className="progress-container">
                    <div className="show-info">
                        <div className="progress"><Progress percent={this.state.users.Upercent} position="normal"/></div>
                        <div aria-hidden="true">{this.state.users.Upercent}%</div>
                    </div>
                </div>
                <WingBlank>
                    {/* <div className='touxiang'> */}
                    <div style={{margin:"0 auto"}}>
                        <ImagePicker
                            name='Uimage'
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 1}
                            multiple={this.state.multiple}                        
                        />
                    </div>                   
                </WingBlank>
                {/* <button style={{width:'30%',height:'25px',borderRadius:'5px',border:'1px #708090 solid',display: 'block',margin: '0 auto',marginTop:'20px'}}>更换头像</button> */}
                <List style={{marginTop:'20px'}}>
                    <InputItem
                        name='userName'
                        id='userName'
                        title="昵称"
                        placeholder="用户名"
                        clear
                        value={this.state.users.userName}
                        onChange={this.nameChange}
                    >昵称</InputItem>
                    <InputItem
                        name='Usex'
                        id='Usex'
                        title="性别"
                        placeholder="女"
                        clear
                        value={this.state.users.Usex}
                        onChange={this.sexChange}
                    >性别</InputItem>
                    <DatePicker
                        mode="date"
                        title="Select Date"
                        extra={this.state.users.Ubirthday}
                        value={this.state.users.Ubirthday}
                        onChange={this.birthdayChange}
                        >
                        <List.Item arrow="horizontal" name='Ubirthday' id='Ubirthday'>生日</List.Item>
                    </DatePicker>
                    <InputItem
                        name='Uaddress'
                        id='Uaddress'
                        title="所在地"
                        placeholder="你来自哪里"
                        value={this.state.users.Uaddress}
                        clear
                        onChange={this.placeChange}
                    >所在地</InputItem>
                    <InputItem
                        name='Usign'
                        id='Usign'
                        title="签名"
                        autoHeight
                        clear
                        placeholder="介绍下自己吧"
                        value={this.state.users.Usign}
                        onChange={this.signChange}
                    >签名</InputItem>
                </List>
                <button style={{height:'30px',width:'70%',borderRadius:'5px',display: 'block',margin: '0 auto',marginTop:'20px',backgroundColor:'rgb(55, 96, 230)',border:'none',color:'white'}} onClick={this.getConnect}>确认</button>
            </div>
        )
    }
}

