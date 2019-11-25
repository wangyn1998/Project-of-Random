import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Post from './Post'
import Topic from './Topic'

export default class Block extends Component {
    render() {
        return (
            <div style={{marginTop:'150px',marginLeft:'400px'}}>
                <div className="link">
                    <Link to='/block/post'>帖子管理</Link>
                </div>
                <div className="link">
                    <Link to='/block/topic'>话题管理</Link>
                </div>
            </div> 
        )
    }
}