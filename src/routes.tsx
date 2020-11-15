import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Categories from './pages/Categories';
import Question from './pages/Question';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Categories } exact />
                <Route path="/alternativa" component={ Question } exact />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;