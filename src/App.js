import React from "react";
import CounterContainer from "./containers/CounterContainer";
import { Route, Switch, Link } from 'react-router-dom'
import Home  from './containers/HomeContainer'
import Films  from './containers/FilmsContainer'

const App = () => (
    <div>
        <nav>
            <Link to='/'>Home</Link>{' '}
            <Link to='/counter'>Counter</Link>{' '}
            <Link to='/films'>Films</Link>{' '}
        </nav>
        <Switch>
            <Route path='/counter' component={CounterContainer} />
            <Route path='/films' component={Films} />
            <Route path='/' component={Home} />
        </Switch>
        
    </div>
);

export default App;