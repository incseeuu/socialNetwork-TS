import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import navbarPageReducer from "./navbarPage-reducer";
import peoplePageReducer from "./peoplePage-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";


export type AppStateType = ReturnType<typeof rootReducer>


const rootReducer = combineReducers({
    mainPage: mainPageReducer,
    messagePage: messagesPageReducer,
    navbarPage: navbarPageReducer,
    peoplePage: peoplePageReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store;