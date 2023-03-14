import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import navbarPageReducer from "./navbarPage-reducer";
import peoplePageReducer from "./peoplePage-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {FormAction, reducer as formReducer} from "redux-form";


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

export type ActionsType = AuthActionsType | FormAction

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>


export default store;