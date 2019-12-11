import React, { Component } from 'react'
import { Popover, NavBar, Icon,Grid,List,Drawer} from 'antd-mobile';
import { returnStatement } from '@babel/types';
const Item = List.Item;
const Brief = Item.Brief;
export default class Rank extends Component {
    constructor(){
        super();
        this.state={
            scores:[]
        }
    }
    componentDidMount(){
        // 发起请求
        fetch('http://localhost:8001/rank')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                scores:res
            })
            console.log(res);
        })
        
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/my'}
                    >积分排行榜
                </NavBar>
                {/* {
                    this.state.scores.map((item,idx)=>{   
                        return(
                            <List className="my-list">
                                <Item multipleLine extra="+ 10">
                                {item.Uimage} <Brief>{item.sum}</Brief>
                                </Item>
                            </List>
                            <List className="my-list">
                                <Item extra={item.sum} align="top" thumb={item.Uimage} multipleLine>

                                    <Brief>{item.userName}</Brief>
                                </Item>
                            </List>
                        )                    
                        
                    })
                } */}
                <Grid data={this.state.scores}
                    columnNum={1}
                    hasLine={false}
                    itemStyle={{height:'50px'}}
                    renderItem={dataItem => (
                        <div>
                            <div style={{height:'30px',width:'30px',marginTop:'3%',borderRadius:'50%',float:"left",marginLeft:'3%',overflow:'hidden',marginLeft:'5%',marginTop:'7px'}}>
                                <img src={dataItem.Uimage} alt='该用户暂时没有设置头像' style={{height:'30px',width:'30px',marginTop:'3%',borderRadius:'50%',float:"left",marginLeft:'3%',overflow:'hidden'}}/>
                            </div>
                            <p style={{float:'left',marginLeft:'10%'}}>{dataItem.userName}</p>
                            <p style={{float:'right',marginRight:'15%'}}>{dataItem.sum}分</p>
                        </div>
                    )}
                />
                
            </div>
        )
    }
}
