import React, { Component } from 'react'
import {Carousel} from 'antd-mobile';
import './Home.css'

export default class Home extends Component {
    state = {
        data:['1','2','3'],
        imgHeight:180,
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                data:['1','2','3'],
            });
        },1000)
    }
    render() {
        return (
            <div>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a  key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: '100%' }}
                        >
                            <div className="dropdown">
                                <div className="iconfont icon-location" style={{position:'absolute',left:'0'}}></div>
                                <span style={{marginLeft:"5px"}}>北京</span>
                                <div className="dropdown-content">
                                    <p>北京</p>
                                    <p>上海</p>
                                    <p>廣州</p>
                                </div>
                            </div>
                            <input placeholder="请输入目的地" className="search"/>
                            <img
                                src={'./images/Carousel'+val+'.jpg'}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            <p style={{color:'white',position:'absolute',bottom:'0',right:'0',fontSize:'16px'}}>13亿人都要旅行</p>
                        </a>
                    ))}
                </Carousel>
            </div>
        )
    }
}
