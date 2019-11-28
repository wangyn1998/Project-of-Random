import React, { Component } from 'react'
import { NavBar, Icon,SearchBar ,Card} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


export default class Jinghao extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Link to='/post'><Icon type="left" /></Link>}
                    rightContent={[
                        <Link to='/post'><button style={{borderRadius:'9px',backgroundColor:'white',width:'100%',height:'70%',color:'blue'}}>完成</button></Link>
                    ]}
                    >选择话题</NavBar>
                <SearchBar placeholder="#话题" ref={ref => this.autoFocusInst = ref} />
                <Card style={{minHeight:'0'}}>
                    <Card.Header
                        title="话题"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    />
                </Card>
                <Card style={{minHeight:'0'}}>
                    <Card.Header
                        title="话题"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    />
                </Card>
            </div>
        )
    }
}
