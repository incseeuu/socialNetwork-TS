import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "./state/state";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const rerenderState = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                AppState={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderState()

store.subscribe(rerenderState)