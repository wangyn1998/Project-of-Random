import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import './Home.css';
import Spot from './Spot/Spot';
import Make from './Make/Make';
import Fun from './Fun/Fun';
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
                <Route path='/make' component={Make}/>
            </Router>
        )
    }
}
