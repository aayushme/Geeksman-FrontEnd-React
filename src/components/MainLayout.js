import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Practice from './Practice';
import Contests from './Contest/Contests';
import About from './About';
import Ace from './Ace/Ace';
import LoginPage from './HomePage/loginpage'
import NotFound from './NotFound';
import ResponsiveDrawer from './questionpage/Questiondrawer'
const MainLayout = () => {
    return (
        <div className="main-layout">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/practice" component={Practice} />
                    <Route path="/contests" component={Contests} />
                    <Route path="/about" component={About} />
                    <Route path="/ace" component={Ace} />
                    <Route path="/questionpage" component={ResponsiveDrawer} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default MainLayout;