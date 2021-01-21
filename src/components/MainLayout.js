import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Contests from './Contest/Contests';
import About from './About';
import LoginPage from './HomePage/loginpage'
import NotFound from './NotFound';
import Contact from './contact'
import UserPanel from './userpanel/userpanel'
import UnderConstruction from './underconstruction'
const MainLayout = () => {
    return (
        <div className="main-layout">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={UnderConstruction} />
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/contests" component={Contests} />
                    <Route path="/about" component={About} />
                    <Route path="/userpanel" component={UserPanel} />
                    <Route path="/contact" component={Contact} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default MainLayout;