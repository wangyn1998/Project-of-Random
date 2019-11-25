import React, { Component } from 'react'
import { Popover, NavBar, Icon,Grid} from 'antd-mobile';
import {Link} from 'react-router-dom'
import './my.css'
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
export default class App extends Component {
  state = {
    visible: true,
    selected: '',
    data1:[
        {class:'',tit:'关注'},
        {class:'',tit:'粉丝'},
        {class:'',tit:'获赞'},
    ]
  };
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
  render() {
    return (
        <div>
            <NavBar
                mode="dark"
                leftContent="&lt;"
                rightContent={
                <Popover mask
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
                    <div style={{float:'left',width:'20%'}}>
                        <div style={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'red',marginLeft:'auto',marginRight:'auto'}}></div>
                        <p style={{textAlign:'center'}}>用户名</p>
                    </div>  
                    <div style={{float:'left',width:'30%'}}>
                        <div style={{height:'20px',width:'50%',border:'1px blue solid',margin:'10px 0 0 10px',textAlign:'center',borderRadius:'2px',lineHeight:'20px'}}>
                            <Link to='' >去登录</Link>
                        </div>
                        <div style={{height:'20px',width:'100%',border:'1px black solid',margin:'10px 0 0 10px',textAlign:'center',borderRadius:'2px',lineHeight:'20px'}}>
                            <Link to='' >点此完善资料></Link>
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
                        <p >{dataItem.tit}</p>
                    )}
                />
            </div>
        </div>
    );
  }
}
