import React from 'react';
import ReactDOM from 'react-dom';
import store from "./state/redux-store";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                AppState={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


// @ts-ignore
window.store = store;
