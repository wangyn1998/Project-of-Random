import React, { Component } from 'react'
import { NavBar,Accordion, Icon,Grid,List,Drawer} from 'antd-mobile';
export default class Personal extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/setup'}
                    >隐私
                </NavBar>
                隐私
            </div>
        )
    }
}
