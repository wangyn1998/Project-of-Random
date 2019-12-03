import React, { Component } from 'react'
import {  NavBar,Accordion, List} from 'antd-mobile';
export default class Contact extends Component {
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
                    >联系方式
                </NavBar>
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
