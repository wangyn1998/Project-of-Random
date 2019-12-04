import React, { Component } from 'react'
import { NavBar, Icon,SearchBar ,Card,SegmentedControl} from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Item from 'antd-mobile/lib/popover/Item';


export default class PostMessage extends Component {
    constructor(){
        super();
        this.state={
            topic:[]
        }
    }
    color=()=>{
        var r = Math.floor((Math.random()+0.3)*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor((Math.random()+0.1)*255);
        var color = 'rgba('+ r +','+ g +','+ b +',0.6)';
        return color;
    }
    componentDidMount(){
        fetch('http://localhost:8001/topic')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                topic:res
            })
        })
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Link to='/'><Icon type="left" /></Link>}
                    onLeftClick={() => console.log('onLeftClick')}
                    >话题</NavBar>
                <SearchBar placeholder="搜索话题" ref={ref => this.autoFocusInst = ref} />
                <SegmentedControl selectedIndex={1} values={['全部', '热门话题', '最新推荐']} className='message1'/>
                <div style={{position:'relative',width:'100%',height:'500px'}}>
                    <div style={{width:'100%',height:'100%'}}>
                    {
                        this.state.topic.map((item)=>{
                            var color=this.color();
                            var l=Math.random()*200;
                            var r=Math.random()*350;
                            var w=(Math.random()+0.2)*230;
                            console.log(color);
                        return <div  style={{backgroundColor:color,width:w,height:w,position:'absolute',top:r,left:l,borderRadius:'50%',textAlign:'center'}}><p style={{marginTop:w*0.4,fontSize:w*0.1}}>{item.topicContent}</p></div>
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}
