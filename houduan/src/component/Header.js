import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <header style={{background:'#61b3ed',width:'1200px',height:'80px',float:'left'}}> 
                <img src="./images/logo.png" style={{width:'7%',height:'100%',float:'left',marginLeft:'30px'}}/>
                <p style={{float:'left',color:"white",fontSize:35,lineHeight:'75px',marginLeft:'40px'}}>爱游不错游后台管理系统</p>
            </header>
        </div>
    )
}