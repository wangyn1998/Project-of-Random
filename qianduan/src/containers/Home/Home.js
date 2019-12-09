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
import HotDetail from './Hot/Detail';
import HistoricDetail from './Historic/Detail';
import CelebrityDetail from './Celebrity/Detail';

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
                <Route path='/hot:id' component={HotDetail}/>
                <Route path='/historic' component={Historic}/>
                <Route path='/historic:id' component={HistoricDetail}/>
                <Route path='/celebrity' component={Celebrity}/>
                <Route path='/celebrity:id' component={CelebrityDetail}/>
            </Router>
        )
    }
}
