import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Categories from './pages/Categories';
import Alternative from './pages/Alternative';
import Result from './pages/Result';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Categories } exact />
                <Route path="/alternativa/:theme" component={ Alternative } />
                <Route path="/resultado/:theme" component={ Result } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;