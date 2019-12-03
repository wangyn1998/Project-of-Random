import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import './Home.css';
import Spot from './Spot/Spot';
import Method from './Method/Method';
import Fun from './Fun/Fun';
import Hot from './Hot/Hot';
import Historic from './Historic/Historic';
import Celebrity from './Celebrity/Celebrity';
import First from './First';

export default class Home extends Component {
    state = {
        data:['1','2','3'],
        imgHeight:180,
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                data:['1','2','3'],
            });
        },1000)
    }
    render() {
        return (
            <Router>
                <Link to='/'/> 
                <Route exact path='/' component={First}/>
                <Route path='/spot' component={Spot}/>
                <Route path='/fun' component={Fun}/>
                <Route path='/method' component={Method}/>
                <Route path='/hot' component={Hot}/>
                <Route path='/historic' component={Historic}/>
                <Route path='/celebrity' component={Celebrity}/>
            </Router>
        )
    }
}
