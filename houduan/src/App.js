import React, { Component } from 'react'
import Header from './component/Header'
import Left from './component/Left'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './container/Home'
import User from './container/User/User'
import Block from './container/Block/Block'
import Score from './container/Score/Score'
import Material from './container/Material/Material'
import System from './container/System/System'
import Post from './container/Block/Post'
import Topic from './container/Block/Topic' 
import Manage from './container/Score/Manage'
import List from './container/Score/List' 
import Method from './container/Material/Method'
import Spot from './container/Material/Spot'
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
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/user' component={User}/>   
                            <Route exact path='/block' component={Block}/>  
                            <Route exact path='/score' component={Score}/>  
                            <Route exact path='/material' component={Material}/>  
                            <Route exact path='/system' component={System}/> 
                            <Route exact path='/block/post' component={Post}/>
                            <Route exact path='/block/topic' component={Topic}/>
                            <Route exact path='/score/manage' component={Manage}/>
                            <Route exact path='/score/list' component={List}/>
                            <Route exact path='/material/method' component={Method}/>
                            <Route exact path='/material/spot' component={Spot}/>
                        </div>
                    </div>
                </div> 
                
            </Router>
        )
    }
}
