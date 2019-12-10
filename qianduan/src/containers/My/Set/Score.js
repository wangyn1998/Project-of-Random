import React, { Component } from 'react'
import { NavBar,Accordion, Icon,Grid,List,Drawer} from 'antd-mobile';
import Rate from './Rate'
import './Rate.css'

export default class Score extends Component {
    render() {
        return (
            <div className='all'>
                 <NavBar
                    mode="dark"
                    leftContent="&lt;"
                    onLeftClick={()=>window.location.href='/setup'}
                    >评分
                </NavBar>
                <div style={{height:'40px',width:'80%',color:'black',fontSize:'22px',textAlign:'center',margin:'0 auto',paddingTop:'10%'}}>
                用过我们的软件，
                </div>
                <div style={{height:'40px',width:'80%',color:'black',fontSize:'22px',textAlign:'center',margin:'0 auto'}}>
               你的感受如何，
                </div>
                <div style={{height:'40px',width:'80%',color:'black',fontSize:'22px',textAlign:'center',margin:'0 auto'}}>
                请留下你最真实的感受吧！
                </div>
                <div style={{height:'40px',width:'80%',textAlign:'center',margin:'0 auto'}}>
                <Rate number={10} def={5} />

                </div>

            </div>
        )
    }
}
