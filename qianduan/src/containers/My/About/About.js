import React, { Component } from 'react'
import { NavBar,Accordion, Icon,Grid,List,Drawer} from 'antd-mobile';
const Item = List.Item;
export default class About extends Component {
    onChange = (key) => {
        console.log(key);
      }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/my'}
                    >关于我们
                </NavBar>
                {/* <List>
                    <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    arrow="horizontal"
                    onClick={() => {this.props.history.push('/introduction')}}
                    >介绍</Item>
                    <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {this.props.history.push('/contact')}}
                    arrow="horizontal"
                    >
                    联系方式
                    </Item>
                </List> */}
                <p >
                    爱游不错游App是一款为用户提供最全面旅游资讯，最真实用户分享、体验的APP。用户可以在APP上能阅读到最全攻略，各个景点的详细情况，方便用户为自身制定最合适的旅游路线。用户还可以在APP的论坛中进行交流，搜索热门话题，查看话题相关帖子，发表自己的所见所闻，相互提供旅游经验，分享自己的快乐。我们还通过积分排行榜的方法激励客户使用我们的软件。
                </p>
                <Accordion  className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="王予诺（开发工程师）" className="pad">
                        Email：928069834@qq.com
                        Github：https://github.com/wangyn1998
                    </Accordion.Panel>
                    <Accordion.Panel header="杨迪（开发工程师）" className="pad">
                        Email：736208296@qq.com
                        Github：https://github.com/YangDiaa                    
                    </Accordion.Panel>
                    <Accordion.Panel header="郑尚姿（开发工程师）" className="pad">
                        Email：1643613240@qq.com
                        Github：https://github.com/zhengshangzi
                    </Accordion.Panel>
                    <Accordion.Panel header="范钰敏（开发工程师）" className="pad">
                        Email：1668576168@qq.com
                        Github：https://github.com/fym1
                    </Accordion.Panel>
                    <Accordion.Panel header="杜瑜萌（开发工程师）" className="pad">
                        Email：272780382@qq.com
                        Github：https://github.com/duyumengdym
                    </Accordion.Panel>
                    <Accordion.Panel header="张宇娟（开发工程师）" className="pad">
                        Email：1123243305@qq.com
                        Github：https://github.com/zhangyujuan123
                    </Accordion.Panel>
                </Accordion>
            </div>
        )
    }
}
