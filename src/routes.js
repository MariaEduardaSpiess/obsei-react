import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Projetos from './pages/projetos';
import Links from './pages/links';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projetos" component={Projetos} />
            <Route path="/links" component={Links} />
            <Route path="/" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;