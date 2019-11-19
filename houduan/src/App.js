import React, { Component } from 'react'
import Header from './component/Header'
import Left from './component/Left'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home'
import User from './container/User/User'
import Block from './container/Block/Block'
import Score from './container/Score/Score'
import Material from './container/Material/Material'
import System from './container/System/System'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div style={{width:'1200px',height:'530px',background:'white',margin:'0 auto'}}>
                    <div>
                        <Header/>
                    </div>
                    <div className="content">
                        <div className="left">
                            <Left/>
                        </div>
                        <div className="right">
                            <Route  exact path='/' component={Home}/>
                            <Route path='/user' component={User}/>   
                            <Route path='/block' component={Block}/>  
                            <Route path='/score' component={Score}/>  
                            <Route path='/material' component={Material}/>  
                            <Route path='/system' component={System}/> 
                        </div>
                    </div>
                </div>   
            </Router>
        )
    }
}
