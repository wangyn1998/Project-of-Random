import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default function Left2() {
    return (
        <div>
            <div className="nav">
                <Link to='/score/list'>积分表管理</Link>
            </div>
            <div className="nav">
                <Link to='/score/manage'>积分对照表管理</Link>
            </div>
            <div className="nav">
                <Link to='/'>返回</Link>
            </div> 
        </div>
    )
}