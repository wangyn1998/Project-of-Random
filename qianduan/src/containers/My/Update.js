import React, { Component } from 'react'
import { NavBar ,Progress, List,InputItem,DatePicker,ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
const Item = List.Item;
const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  }, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
  }];
export default class Update extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent: 0,
            disabled: false,
            users:
                {name:'',
                img:'',
                sex:'',
                birthday:'',
                place:'',
                sign:''},
            multiple: false,
            files: []
            
        };
        this.nameChange = this.nameChange.bind(this);
        this.sexChange = this.sexChange.bind(this);
        this.birthdayChange = this.birthdayChange.bind(this);
        this.placeChange = this.placeChange.bind(this);
        this.signChange = this.signChange.bind(this);
    }
    nameChange(e){
        let data=Object.assign({},this.state.users,{name:e})
        this.setState({
            users:data
        })
    }
    sexChange(e){
        let data=Object.assign({},this.state.users,{sex:e})
        this.setState({
            users:data
        })
    }
    birthdayChange(e){
        let data=Object.assign({},this.state.users,{birthday:e})
        this.setState({
            users:data
        })
    }
    placeChange(e){
        let data=Object.assign({},this.state.users,{place:e})
        this.setState({
            users:data
        })
    }
    signChange(e){
        let data=Object.assign({},this.state.users,{sign:e})
        this.setState({
            users:data
        })
    }
    add = () => {
        let p = 0
        for(let key in this.state.users){
            console.log(key)
            console.log(this.state.users[key])
            if(this.state.users[key] !== ''){
                p ++;
            }
        }
        let pp = Math.round(p*16.6) 
        this.setState({ percent: pp });
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
    render() {
        const { percent } = this.state;
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
                        <div className="progress"><Progress percent={percent} position="normal" /></div>
                        <div aria-hidden="true">{percent}%</div>
                    </div>
                </div>
                {/* <div style={{width:'80px',height:'80px',borderRadius:'50%',border:'1px #708090  solid',display:'block' ,margin:'0 auto',marginTop:'50px'}}>
                    <image src=""/>                   
                </div>
                <button style={{width:'30%',height:'25px',borderRadius:'5px',border:'1px #708090 solid',display: 'block',margin: '0 auto',marginTop:'20px'}}>更换头像</button> */}
                <WingBlank>
                    <div className='touxiang'>
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 1}
                            multiple={this.state.multiple}                            
                        />
                    </div>                   
                </WingBlank>
                <button style={{width:'30%',height:'25px',borderRadius:'5px',border:'1px #708090 solid',display: 'block',margin: '0 auto',marginTop:'20px'}}>更换头像</button>
                <List style={{marginTop:'20px'}}>
                    <InputItem
                        title="昵称"
                        placeholder="用户名"
                        clear
                        value={this.state.users.name}
                        onChange={this.nameChange}
                    >昵称</InputItem>
                    <InputItem
                        title="性别"
                        placeholder="女"
                        clear
                        value={this.state.users.sex}
                        onChange={this.sexChange}
                    >性别</InputItem>
                    <DatePicker
                        mode="date"
                        title="Select Date"
                        extra="Optional"
                        value={this.state.users.birthday}
                        onChange={this.birthdayChange}
                        >
                        <List.Item arrow="horizontal">生日</List.Item>
                    </DatePicker>
                    <InputItem
                        title="所在地"
                        placeholder="你来自哪里"
                        value={this.state.users.place}
                        clear
                        onChange={this.placeChange}
                    >所在地</InputItem>
                    <InputItem
                        title="签名"
                        autoHeight
                        clear
                        placeholder="介绍下自己吧"
                        value={this.state.users.sign}
                        onChange={this.signChange}
                    >签名</InputItem>
                </List>
                <button style={{height:'30px',width:'70%',borderRadius:'5px',display: 'block',margin: '0 auto',marginTop:'20px',backgroundColor:'rgb(55, 96, 230)',border:'none',color:'white'}} onClick={this.add}>确认</button>
            </div>
        )
    }
}

