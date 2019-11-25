import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default function Left1() {
    return (
        <div>
            <div className="nav">
                <Link to='/block/post'>帖子管理</Link>
            </div>
            <div className="nav">
                <Link to='/block/topic'>话题管理</Link>
            </div>
            <div className="nav">
                <Link to='/'>返回</Link>
            </div> 
        </div>
    )
}