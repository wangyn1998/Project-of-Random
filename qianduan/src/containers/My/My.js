import React, { Component } from 'react'
import { Popover, NavBar, Icon,Grid,List,Drawer} from 'antd-mobile';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import './my.css'
import {con} from './context'
const his = createBrowserHistory();
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const Item1 = List.Item;
const times = 0;
export default class App extends Component {
    constructor(props){
        super(props);
        console.log("初始化")
        const logif =  sessionStorage.getItem("logif") == 'true';
        this.state = {
            visible: false,
            selected: '',
            data1:[
                {class:'iconfont icon-aite',tit:'关注',num:5},
                {class:'iconfont icon-xin',tit:'粉丝',num:5},
                {class:'iconfont icon-dianzan',tit:'获赞',num:5},
            ],
            // 积分排名
            data2:[
                {class:'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-',tit:'用户名1',img:'',score:0,color:'#A0522D '},
                {class:'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-',tit:'用户名2',img:'',score:0,color:'#C0C0C0'},
                {class:'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-',tit:'用户名3',img:'',score:0,color:'#F4A460'}
            ],
            //我的收藏等
            data3:[
                {class:'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1',tit:'我的收藏'},
                {class:'iconfont icon-shijianzhongbiao',tit:'浏览历史'},
                {class:'iconfont icon-fujinderen',tit:'附近的人'}
            ],
            //抽屉
            open: true,
            username:'',
            first:{},
            second:{},
            third:{},
            touxiang:'',
            logif:logif,
            sign:''
        };
        console.log(this.state.logif)
    }
    componentDidMount(){
       
        console.log(this.state.logif);
        fetch('http://localhost:8001/my')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            var d0=[];
            if(res.length<=4){
                for(var i = 1;i<res.length;i++){
                    var tupian = '';
                    (res[i].Uimage=='-')?tupian="http://img2.3png.com/eebe5ef277285d150546fd77d248786d2a9e.png":tupian=res[i].Uimage
                    d0[i-1] = Object.assign({},this.state.data2[0],{tit:res[i].userName},{score:res[i].sum},{img:tupian})
                }
            }else{
                for(var i = 1;i<4;i++){
                    var tupian = '';
                    (res[i].Uimage=='-')?tupian="http://img2.3png.com/eebe5ef277285d150546fd77d248786d2a9e.png":tupian=res[i].Uimage
                    d0[i-1] = Object.assign({},this.state.data2[0],{tit:res[i].userName},{score:res[i].sum},{img:tupian})
                }
            }
            console.log(d0);
            var tu = '';
            (res[0].Uimage=='-')?tu="http://img2.3png.com/eebe5ef277285d150546fd77d248786d2a9e.png":tu=res[0].Uimage
            this.setState({
                username:res[0].userName,
                data2:d0,
                touxiang:tu,
                sign:res[0].Usign
            })
        })
    }
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  jump(value){
    this.props.history.push(value)
  }
  jump1(value){
    localStorage.setItem("click",true)
    this.props.history.push(value)
  }
  logout(){
    this.setState({logif:false})
    sessionStorage.removeItem('user');
    sessionStorage.setItem("logif",false);
  }
  render() {
    const sidebar = (<List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
          if (index === 0) {
            return (<List.Item key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              multipleLine
            >Category</List.Item>);
          }
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          >Category{index}</List.Item>);
        })}
    </List>);
    return (
        <div style={{backgroundColor:'#fff'}}>
            <NavBar
                mode="dark"
                leftContent="&lt;"
                onLeftClick={()=>window.location.href='/'}
                rightContent={
                <Popover mask="true"
                    overlayClassName="fortest"
                    overlayStyle={{ color: 'currentColor' }}
                    visible={this.state.visible}
                    overlay={[
                    (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                    (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                    (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                        <span style={{ marginRight: 5 }}>Help</span>
                    </Item>),
                    ]}
                    align={{
                    overflow: { adjustY: 0, adjustX: 0 },
                    offset: [-10, 0],
                    }}
                    onVisibleChange={this.handleVisibleChange}
                    onSelect={this.onSelect}
                >
                    <div style={{
                    height: '100%',
                    padding: '0 15px',
                    marginRight: '-15px',
                    display: 'flex',
                    alignItems: 'center',
                    }}
                    >
                    <Icon type="ellipsis" />
                    </div>
                </Popover>
                }
            >
                我的
            </NavBar>
            <div className='block'>
                <div style={{width:'100%'}}>
                    <div>
                        <div style={{float:'left',width:'20%'}}>
                            <div style={{width:'60px',height:'60px',borderRadius:'50%',marginLeft:'auto',marginRight:'auto',overflow:'hidden',float:'left'}}>
                        <div>{this.state.logif}</div>
                                <img src={this.state.touxiang} className={this.state.logif?"touxiang0":"touxiang00"}/>
                                <img src="http://img2.3png.com/eebe5ef277285d150546fd77d248786d2a9e.png" className={this.state.logif?"touxiang00":"touxiang0"}/>
                            </div>
                            {/* <p style={{float:'left',marginLeft:'10%'}}>{this.state.username}</p> */}
                        </div>  
                        <div className={this.state.logif?'personal1':'personal2'}>
                            <div style={{marginTop:'5px'}}>{this.state.username}</div>
                            <div style={{marginTop:'10px'}}>{this.state.sign}</div>
                            <div style={{height:'20px',width:'50%',border:'1px blue solid',marginTop:'10px'}}>
                                <div style={{lineHeight:'20px'}} onClick={() => this.jump('/updateuser')}>点此完善资料</div>
                            </div>
                        </div>
                        <div className={this.state.logif?'personal2':'personal0'}>
                            <div className='deng0'>
                                <div style={{lineHeight:'20px'}} onClick={() => this.jump('/login')}>点击登录</div>
                            </div>
                            <div className='deng0'>
                                <div style={{lineHeight:'20px'}} onClick={() => this.jump('/register')}>点击注册</div>
                            </div>
                        </div>
                        <div className={this.state.logif?"qiandao":"touxiang00"}>
                            <div onClick={() => this.jump1('/getscore')} >签到领积分></div>
                        </div>
                        {/* <div style={{width:'20%',height:'20px',borderRadius:'10%',border:'1px gray solid',float:'right',marginRight:'5%',textAlign:'center',marginTop:'3%'}}>
                            <div style={{lineHeight:'20px'}} onClick={() => this.jump('/getscore')}>签到领积分</div>
                        </div> */}
                    </div>
                    {/* <div style={{float:'left',width:'30%'}}>
                        <div className={this.state.logif?'deng1':'deng0'}>
                            <div style={{lineHeight:'20px'}} onClick={() => this.jump('/login')}>去登录</div>
                        </div>
                        <div style={{height:'20px',width:'100%',border:'1px black solid',textAlign:'center',borderRadius:'2px',lineHeight:'20px',marginTop:'10px'}}>
                            <div style={{lineHeight:'20px'}} onClick={() => this.jump('/updateuser')}>点此完善资料</div>
                        </div>
                    </div>                 
                    <div style={{width:'50%',float:'left'}}>
                        <p>{this.state.sign}</p>
                    </div> */}
                </div>     
            </div>
            <div className='block'>
                <Grid data={this.state.data1}
                    columnNum={3}
                    hasLine={false}
                    itemStyle={{height:'30px'}}
                    renderItem={dataItem => (
                        <div >
                            <div style={{marginTop:'10%',float:'left'}}>
                            {
                                <i className={dataItem.class} style={{float:'left'}}></i>
                            }
                            </div>
                            <p style={{float:'left',marginLeft:'5%'}}>{dataItem.tit}</p>
                            <p style={{float:'left',marginLeft:'5%'}}>{dataItem.num}</p>
                        </div>
                    )}
                />
                {/* <div style={{width:'25%',height:'20px',borderRadius:'10%',border:'1px gray solid',float:'right',marginRight:'5%',textAlign:'center',marginTop:'3%'}}>
                    <div style={{lineHeight:'20px'}} onClick={() => this.jump('/getscore')}>签到领积分</div>
                </div>    */}
                <List className="my-list" style={{marginTop:'15px'}}>
                    <Item1 extra="查看更多" arrow="horizontal" onClick={() => this.jump('/rank')}>积分排行榜</Item1>
                </List> 
            {/* </div>
            <div className='block'> */}
                <Grid data={this.state.data2}
                    columnNum={1}
                    hasLine={false}
                    itemStyle={{height:'50px'}}
                    renderItem={dataItem => (
                        <div>
                            <div style={{marginTop:'3%',float:'left',color:`${dataItem.color}`,height:'30px',width:'30px'}}>
                            {
                                <i className={dataItem.class} style={{height:'30px',width:'30px',float:'left'}}></i>
                            }
                            </div>
                            <div style={{height:'30px',width:'30px',marginTop:'3%',borderRadius:'50%',float:"left",marginLeft:'3%',overflow:'hidden',marginLeft:'5%',marginTop:'7px'}}>
                                <img src={dataItem.img} alt="暂无" style={{height:'30px',width:'30px',marginTop:'3%',borderRadius:'50%',float:"left",marginLeft:'3%',overflow:'hidden'}}/>
                            </div>
                            <p style={{float:'left',marginLeft:'10%'}}>{dataItem.tit}</p>
                            <p style={{float:'right',marginRight:'15%'}}>{dataItem.score}分</p>
                        </div>
                    )}
                />
            </div>
            <div className='block'>
                <Grid data={this.state.data3}
                    columnNum={3}
                    hasLine={false}
                    itemStyle={{height:'50px'}}
                    renderItem={dataItem => (
                        <div >
                            <div >
                            {
                                <i className={dataItem.class} style={{height:'20px',width:'20px',color:'blue'}}></i>
                            }
                            </div>
                            <p style={{textAlign:'center'}}>{dataItem.tit}</p>
                        </div>
                    )}
                />
            </div>
            <div className='block1' style={{marginBottom:'100px'}}>
                <List>
                    <Item1 onClick={this.logout.bind(this)}>退出登录</Item1>
                    <Item1  arrow="horizontal" onClick={() => this.jump('/setup')}>设置</Item1>
                    <Item1  arrow="horizontal" onClick={() => this.jump('/help')}>帮助反馈</Item1>
                    <Item1  arrow="horizontal" onClick={() => this.jump('/about')}>关于我们</Item1>
                </List>
            </div>
        </div>
    );
  }
}
