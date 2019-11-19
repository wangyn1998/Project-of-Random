import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default function Left() {
    return (
        <div>
            <div className="nav">
                <Link to='/user'>用户管理</Link>
            </div>
            <div className="nav">
                <Link to='/block'>论坛管理</Link>
            </div>
            <div className="nav">
                <Link to='/score'>积分管理</Link>
            </div>
            <div className="nav">
                <Link to='/material'>资料管理</Link>
            </div>
            <div className="nav">
                <Link to='/system'>系统管理</Link>
            </div> 
            <div className="nav">
                <Link to='/'>返回</Link>
            </div> 
        </div>
    )
}