import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage'
import DashBoardPage from '../pages/DashBoardPage/DashBoardPage'

const SimpleRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route path='/login'>
                    <LoginPage />
                </Route>
                <Route path='/' default>
                    <DashBoardPage />
                </Route>                
            </Switch>
        </Router>
    )

}

export default SimpleRouter