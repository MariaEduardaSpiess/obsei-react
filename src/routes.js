import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Projetos from './pages/projetos';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projetos" component={Projetos} />
            <Route path="/" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;