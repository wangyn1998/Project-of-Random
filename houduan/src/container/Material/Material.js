import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

export default class Material extends Component {
    render() {
        return (
            <div style={{marginTop:'150px',marginLeft:'400px'}}>
                <div className="link">
                    <Link to='/material/method'>攻略管理</Link>
                </div>
                <div className="link">
                    <Link to='/material/spot'>景点管理</Link>
                </div>
            </div>
        )
    }
}