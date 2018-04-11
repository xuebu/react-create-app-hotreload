import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import Root from './router/routes'

const render = ( Component ) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById("root")
    );
}
render(Root);
registerServiceWorker();

if(module.hot){
    module.hot.accept(Root, () => {
        render(Root)
    });
}