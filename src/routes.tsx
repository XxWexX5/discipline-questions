import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Introduction from './pages/introduction';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={ Introduction } exact />
        </BrowserRouter>
    );
}

export default Routes;