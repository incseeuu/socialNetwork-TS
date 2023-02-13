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
import {ActionsType, MainPageType, MessagesPageType, NavbarPageType, StateType} from "./state/store";
import {AppStateType} from "./state/redux-store";
import People from "./components/People/People";

type AppPropsType = {
    AppState: AppStateType
    dispatch: (action: ActionsType) => void
}

function App(props: AppPropsType) {

    const componentForPropsMessages = () => <Messages
        stateForMessages={props.AppState.messagePage.stateMessages}
        stateForDialogs={props.AppState.messagePage.stateDialogs}
        newMessage={props.AppState.messagePage.newMessage}
        dispatch={props.dispatch}
    />

    // const componentForPropsMain = () => <ProfileContainer
    //     stateForMainPosts={props.AppState.mainPage.stateForMainPosts}
    //     stateForNewPost={props.AppState.mainPage.newPosts}
    //     dispatch={props.dispatch}
    // />

    return (
        <div className="App__item">
            <Header/>
            <Navbar stateForNavbar={props.AppState.navbarPage}/>
            <div className={"app__wrapper-content"}>
                <Route path="/main/:userId" render={() => <Main />}/>
                <Route path="/messages" render={componentForPropsMessages}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/people" render={() => <People/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
