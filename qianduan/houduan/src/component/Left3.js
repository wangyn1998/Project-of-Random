import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default function Left3() {
    return (
        <div>
            <div className="nav">
                <Link to='/material/method'>攻略管理</Link>
            </div>
            <div className="nav">
                <Link to='/material/spot'>景点管理</Link>
            </div>
            <div className="nav">
                <Link to='/'>返回</Link>
            </div> 
        </div>
    )
}