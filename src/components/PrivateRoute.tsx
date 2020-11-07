import React from 'react';
import {Route, Redirect} from 'react-router';


const PrivateRoute = (props: any) =>{
    const isLogged = localStorage.getItem('app-token');

    return isLogged ? <Route {...props}/> : <Redirect to='/login'/>
}

export default PrivateRoute;