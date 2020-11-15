import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Categories from './pages/Categories';
import Alternative from './pages/Alternative';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Categories } exact />
                <Route path="/alternativa/:theme" component={ Alternative } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;