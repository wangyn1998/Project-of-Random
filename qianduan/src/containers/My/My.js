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
export default class App extends Component {
    constructor(props){
        super(props);
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
                {class:'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-',tit:'用户名1',img:'',score:100,color:'#A0522D '},
                {class:'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-',tit:'用户名2',img:'',score:100,color:'#C0C0C0'},
                {class:'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-',tit:'用户名3',img:'',score:100,color:'#F4A460'}
            ],
            //我的收藏等
            data3:[
                {class:'iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1',tit:'我的收藏'},
                {class:'iconfont icon-shijianzhongbiao',tit:'浏览历史'},
                {class:'iconfont icon-fujinderen',tit:'附近的人'}
            ],
            //抽屉
            open: true,
            username:''
        };
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
  a=()=>{
    his.push('/a');
    window.location.reload();
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
        <div>
            <NavBar
                mode="dark"
                leftContent="&lt;"
                onLeftClick={()=>window.location.href='/'}
                // onLeftClick={this.onOpenChange}
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
                        <div style={{float:'left',width:'20%'}} onClick={this.onOpenChange}>
                            <div style={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'red',marginLeft:'auto',marginRight:'auto'}}></div>
                            {/* <con.Consumer>
                                {value=><p style={{textAlign:'center'}}>{value}</p>}
                            </con.Consumer> */}
                            <p style={{textAlign:'center'}}>{this.state.username}</p>
                        </div>  
                    </div>
                    <div style={{float:'left',width:'30%'}}>
                        <div style={{height:'20px',width:'50%',border:'1px blue solid',margin:'10px 0 0 10px',textAlign:'center',borderRadius:'2px',lineHeight:'20px'}}>
                            <Link to='/login' >去登录</Link>
                        </div>
                        <div style={{height:'20px',width:'100%',border:'1px black solid',margin:'10px 0 0 10px',textAlign:'center',borderRadius:'2px',lineHeight:'20px'}}>
                            <Link to='/updateuser' >点此完善资料></Link>
                        </div>
                    </div>                 
                    <div style={{width:'50%',float:'left'}}>
                        <p>读万卷书不如行万里路</p>
                    </div>
                </div>     
            </div>
            <div className='block'>
                <Grid data={this.state.data1}
                    columnNum={3}
                    hasLine={false}
                    itemStyle={{height:'40px'}}
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
                <div style={{width:'25%',height:'25%',borderRadius:'10%',border:'1px gray solid',float:'right',marginRight:'5%',textAlign:'center',marginTop:'3%'}}>
                    <Link to='/getscore' style={{lineHeight:'25%'}}>签到领积分</Link>
                </div>   
                <div style={{fontSize:'15px',marginTop:'10%'}}>积分排行榜</div>       
            </div>
            <div className='block'>
                <Grid data={this.state.data2}
                    columnNum={1}
                    hasLine={false}
                    itemStyle={{height:'50px'}}
                    renderItem={dataItem => (
                        <div>
                            <div style={{marginTop:'3%',float:'left',color:`${dataItem.color}`}}>
                            {
                                <i className={dataItem.class} style={{height:'20px',width:'20px',float:'left'}}></i>
                            }
                            </div>
                            <div style={{height:'20px',width:'20px',marginTop:'3%',borderRadius:'50%',backgroundColor:'red',float:"left",marginLeft:'3%'}}>
                                <image src={dataItem.img}/>
                            </div>
                            <p style={{float:'left',marginLeft:'5%'}}>{dataItem.tit}</p>
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
                    <Item1 onClick={() => this.jump('/my')}>退出登录</Item1>
                    <Item1  arrow="horizontal" onClick={() => this.jump('/setup')}>设置</Item1>
                    <Item1  arrow="horizontal" onClick={() => this.jump('/help')}>帮助反馈</Item1>
                    <Item1  arrow="horizontal" onClick={() => this.jump('/about')}>关于我们</Item1>
                </List>
            </div>
        </div>
    );
  }
}
