import React, { Component } from 'react'
import {Carousel,Grid} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Historic from './Historic/Historic';

const data = [
    {
        data:'iconfont icon-foot',
        text:'周边景点',
        link:'/spot?cityName='
    },
    {
        data:'iconfont icon-zihangche',
        text:'当地玩乐',
        link:'/fun'
    },
    {
        data:'iconfont icon-wendang',
        text:'纯享定制',
        link:'/make'
    }
]

export default class First extends Component {
    constructor(){
        super();
        this.state={
            hot:[],
            Historic:[],
            celebrity:[],
            pot:[],
            allpot:[],
            data:['1','2','3'],
            imgHeight:180,
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                data:['1','2','3'],
            });
        },1000)
        //发起请求
        fetch('https://localhost:3000/hot')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                hot:res.data
            })
        })
        fetch('http://localhost:3000/historic')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                historic:res.data
            })
        })
        fetch('http://localhost:3000/celebrity')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                celebrity:res.data
            })
        })
        fetch('https://elm.cangdu.org/v1/cities?type=guess')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                pot:res
            })
        })
        fetch('https://elm.cangdu.org/v1/cities?type=group')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.E[0].name);
            this.setState({
                allpot:res.E
            })
            console.log(this.state.allpot[0].name)
        })
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
                                <div className="iconfont icon-location" style={{position:'absolute',left:'0',color:'black'}}></div>
                                    <span style={{marginLeft:"5px"}}>{this.state.pot.name}</span>
                                <div className="dropdown-content">
                                    {/* <p>{this.state.allpot[0].name}</p> */}
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
                {/* <Grid data={data}
                style={{height:'50px'}}
                hasLine={false}
                square={false}
                columnNum={3}
                renderItem={dataItem => (
                    <div style={{ padding: '12.5px',width:'100%',height:'60px' }}>
                        <Link to={dataItem.link}>
                            <div className={dataItem.data} style={{color:'#2278c9',textAlign:'center',margin:'0 auto'}}></div>
                            <p style={{color:'#2278c9',fontSize:'16px',textAlign:'center'}}>{dataItem.text}</p>
                        </Link>
                    </div>
                )}
                /> */}
                <div style={{height:'50px'}}>
                    <Link to={'/spot?city=' + this.state.pot.name}>
                        <div style={{float:'left',width:'25%',padding:'4%'}}>
                            <div className='iconfont icon-foot' style={{color:'#2278c9',textAlign:'center',margin:'0 auto'}}></div> 
                            <p style={{color:'#2278c9',fontSize:'16px',textAlign:'center'}}>周边景点</p>
                        </div>
                    </Link>
                    <Link to={'/fun?city=' + this.state.pot.name}>
                        <div style={{float:'left',width:'25%',padding:'4%'}}>
                            <div className='iconfont icon-zihangche' style={{color:'#2278c9',textAlign:'center',margin:'0 auto'}}></div> 
                            <p style={{color:'#2278c9',fontSize:'16px',textAlign:'center'}}>当地玩乐</p>
                        </div>
                    </Link>
                    <Link to={'/make?city=' + this.state.pot.name}>
                        <div style={{float:'left',width:'25%',padding:'4%'}}>
                            <div className='iconfont icon-wendang' style={{color:'#2278c9',textAlign:'center',margin:'0 auto'}}></div> 
                            <p style={{color:'#2278c9',fontSize:'16px',textAlign:'center'}}>纯享定制</p>
                        </div>
                    </Link>
                </div>
                <div style={{width:'90',height:'180px',textAlign:'center'}}>
                    <Link to='/hot'>
                        <p style={{position:'absolute',left:'5%',fontSize:'20px',color:'black',marginTop:'15%'}}>热门推荐》</p>
                    </Link>
                    <div>
                        <div style={{marginTop:'30px',marginLeft:'5%',float:'left',width:'50%',background:'yellow',height:'140px',borderRadius:'10px',border:'0'}}></div>
                        <div style={{float:'left',width:'40%'}}>
                            <div style={{height:'68px',marginTop:'30px',marginLeft:'5px',borderRadius:'10px',border:'0',background:'yellow'}}></div>
                            <div style={{height:'68px',marginTop:'5px',marginLeft:'5px',borderRadius:'10px',border:'0',background:'yellow'}}></div>
                        </div>
                    </div>
                </div>
                <div style={{width:'90',height:'180px',textAlign:'center'}}>
                    <Link to='/historic'>
                        <p style={{position:'absolute',left:'5%',fontSize:'20px',marginTop:'12%',color:'black'}}>名胜古迹》</p>
                    </Link>
                    <div>
                        <div style={{marginTop:'30px',marginLeft:'5%',float:'left',width:'50%',background:'yellow',height:'140px',borderRadius:'10px',border:'0'}}></div>
                        <div style={{float:'left',width:'40%'}}>
                            <div style={{height:'68px',marginTop:'30px',marginLeft:'5px',borderRadius:'10px',border:'0',background:'yellow'}}></div>
                            <div style={{height:'68px',marginTop:'5px',marginLeft:'5px',borderRadius:'10px',border:'0',background:'yellow'}}></div>
                        </div>
                    </div>
                </div>
                <div style={{width:'90',height:'180px',textAlign:'center',marginBottom:'80px'}}>
                    <Link to='/celebrity'>
                        <p style={{position:'absolute',left:'5%',fontSize:'20px',marginTop:'10%',color:'black'}}>网红打卡》</p>
                    </Link>
                    <div>
                        <div style={{marginTop:'30px',marginLeft:'5%',float:'left',width:'50%',background:'yellow',height:'140px',borderRadius:'10px',border:'0'}}></div>
                        <div style={{float:'left',width:'40%'}}>
                            <div style={{height:'68px',marginTop:'30px',marginLeft:'5px',borderRadius:'10px',border:'0',background:'yellow'}}></div>
                            <div style={{height:'68px',marginTop:'5px',marginLeft:'5px',borderRadius:'10px',border:'0',background:'yellow'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
