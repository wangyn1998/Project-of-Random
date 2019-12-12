import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Post from './Post';
import Block1 from './Block1';
import Aite from './Aite';
import Jinghao from './Jinghao';
import BlockMessage from './BlockMessage';
import PostMessage from './PostMessage';
import Put from './Put';
import PostImg from './PostImg'
export default class Block extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/post" component={Post}/>
                        <Route path='/aite' component={Aite}/>
                        <Route path='/jinghao' component={Jinghao}/>
                        <Route path='/postImg' component={PostImg}/>
                        <Route path="/blockmessage/:id" component={BlockMessage}/>
                        <Route path='/postmessage' component={PostMessage}/>
                        <Route path='/put' component={Put}/>
                        <Route component={Block1}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
