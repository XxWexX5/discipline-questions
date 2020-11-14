import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Categories from './pages/Categories';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Categories } exact />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;