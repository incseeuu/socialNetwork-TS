import {combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import navbarPageReducer from "./navbarPage-reducer";
import peoplePageReducer from "./peoplePage-reducer";
import {authReducer} from "./auth-reducer";


export type AppStateType = ReturnType<typeof mainReducer>


const mainReducer = combineReducers({
    mainPage: mainPageReducer,
    messagePage: messagesPageReducer,
    navbarPage: navbarPageReducer,
    peoplePage: peoplePageReducer,
    auth: authReducer
});

const store = createStore(mainReducer)


export default store;