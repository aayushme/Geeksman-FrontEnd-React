import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Contests from './Contest/Contests';
import About from './About';
import LoginPage from './HomePage/loginpage'
import NotFound from './NotFound';
import ResponsiveDrawer from './questionpage/Questiondrawer'
import UserPanel from './userpanel/userpanel'
const MainLayout = () => {
    return (
        <div className="main-layout">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/contests" component={Contests} />
                    <Route path="/about" component={About} />
                    <Route path="/livecontest" component={ResponsiveDrawer} />
                    <Route path="/userpanel" component={UserPanel} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default MainLayout;