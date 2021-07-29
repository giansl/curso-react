import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';
import Register from '../container/Register';
import NotFound from '../container/NotFound';
import Layout from '../components/Layout';
import Player from '../container/Player';
// <Route component={NotFound} />
const App = () => (
    <BrowserRouter >
        <Layout>
            <Switch>
                <Route component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/player/:id" component={Player} />
                
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;