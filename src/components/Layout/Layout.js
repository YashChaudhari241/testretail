import React, { Component } from 'react';
import { SnackbarProvider } from 'notistack';
import Items from '../Items/Items'
import LoginPage from '../../containers/LoginPage/LoginPage'
import RegisterPage from '../../containers/RegisterPage/RegisterPage'
import {Route} from 'react-router-dom'
class Layout extends Component {
    render() {
        return (
            
                    <SnackbarProvider autoHideDuration={2600}>
                        <Route path='/' exact component={Items} />
                        <Route path='/login' exact component={LoginPage} />
                        <Route path='/register' exact component={RegisterPage} />
                    </SnackbarProvider>
                
        )
    }
}
export default Layout;
