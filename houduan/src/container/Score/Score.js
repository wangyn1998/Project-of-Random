import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

export default class Score extends Component {
    render() {
        return (
            <div style={{marginTop:'150px',marginLeft:'400px'}}>
                <div className="link">
                    <Link to='/score/manage'>积分管理</Link>
                </div>
                <div className="link">
                    <Link to='/score/list'>积分对照表</Link>
                </div>   
            </div>
        )
    }
}