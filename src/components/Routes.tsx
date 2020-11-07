import React from 'react';
import {Router, Switch, Route} from 'react-router';
import {history} from '../services/history';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';


const Routes = () => {
    return(
        <Router history={history}>
            <Switch>
                <Route exact component={Home} path='/'/>
                <Route component={NotFound}/>
                <PrivateRoute exact component={Login} path='/login'/>                
                <PrivateRoute exact component={Register} path='/register'/>
            </Switch>
        </Router>
    )
}

export default Routes;