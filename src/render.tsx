import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostCallBack, RootStateType} from "./state/state";


export const rerenderState = (state: RootStateType) => {
    ReactDOM.render(
        <App
            AppState={state}
            addPostCallBack={addPostCallBack}
        />,
        document.getElementById('root')
    );
}