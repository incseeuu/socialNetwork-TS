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
                addNewMessages={store.addNewMessages.bind(store)}
                updateNewMessageCallBack={store.updateNewMessageCallBack.bind(store)}
                addPostCallBack={store.addPostCallBack.bind(store)}
                updateNewPostsCallBack={store.addPostCallBack.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderState()

store.subscribe(rerenderState)