import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import views
import AView01 from './views/AView01/AView01';
import AView02 from './views/AView02/AView02';
import Form from './views/Form/Form';

export default (
    <Switch>
        <Route exact path='/' component={Form} />
        <Route path='/Form' component={Form} />
        <Route path='/2' component={AView02} />
        <Route path='/1' component={AView01} />
    </Switch>
)