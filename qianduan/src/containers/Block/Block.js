import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Post from './Post';
import Block1 from './Block1';
import Aite from './Aite';
import Jinghao from './Jinghao';
import BlockMessage from './BlockMessage';
import PostMessage from './PostMessage';

export default class Block extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/post" component={Post}/>
                        <Route path='/aite' component={Aite}/>
                        <Route path='/jinghao' component={Jinghao}/>
                        <Route path="/blockmessage" component={BlockMessage}/>
                        <Route path='/postmessage' component={PostMessage}/>
                        <Route component={Block1}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
