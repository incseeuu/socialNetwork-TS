import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {StateType} from "./state/state";


type AppPropsType = {
    AppState: StateType
    addNewMessages: () => void
    updateNewMessageCallBack: (value: string) => void
    addPostCallBack: () => void
    updateNewPostsCallBack: (value: string) => void
}

function App(props: AppPropsType) {

    const componentForPropsMessages = () => <Messages
        stateForMessages={props.AppState.messagesPage.stateMessages}
        stateForDialogs={props.AppState.messagesPage.stateDialogs}
        addNewMessages={props.addNewMessages}
        newMessage={props.AppState.messagesPage.newMessage}
        updateNewMessageCallBack={props.updateNewMessageCallBack}
    />

    const componentForPropsMain = () => <Main
        stateForMainPosts={props.AppState.mainPage.stateForMainPosts}
        stateForNewPost={props.AppState.mainPage.newPosts}
        addPostCallBack={props.addPostCallBack}
        updateNewPostsCallBack={props.updateNewPostsCallBack}
    />

    return (
        <div className="App__item">
            <Header/>
            <Navbar stateForNavbar={props.AppState.navbarPage}/>
            <div className={"app__wrapper-content"}>
                <Route path="/main" render={componentForPropsMain}/>
                <Route path="/messages" render={componentForPropsMessages}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
