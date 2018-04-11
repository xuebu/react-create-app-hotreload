import React from 'react';
import { Route, Link,Switch, Redirect,BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader'; // 引入 热更新的 hot 方法

import App from '../App'
import Demo from '../containers/Demo/views/Demo';
import Login from '../containers/Login/views/Login';


const Root = () => (
      <Router>
        <div>
        <Switch>
            <Route
                path="/"
                render={props => (
                <App>
                    <Switch>
                        <Route path="/" exact component={Demo} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/demo" exact  component={Demo} />
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </App>
                )}
            />
            <Route render={() => <Redirect to="/" />} />
         </Switch>
        </div>
      </Router>
);
// react-hot-loader@4.x.x 可以在这里设置热更新模块
export default hot(module)(Root);