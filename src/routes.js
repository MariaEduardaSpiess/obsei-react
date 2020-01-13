import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Projetos from './pages/projetos';
import Links from './pages/links';
import Pesquisadores from './pages/pesquisadores';
import Questionarios from './pages/questionarios';
import Artigos from './pages/artigos';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projetos" component={Projetos} />
            <Route path="/links" component={Links} />
            <Route path="/pesquisadores" component={Pesquisadores} />
            <Route path="/questionarios" component={Questionarios} />
            <Route path="/artigos" component={Artigos} />
        </Switch>
    </BrowserRouter>
);

export default Routes;