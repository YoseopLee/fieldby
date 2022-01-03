import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import User from "./Reducers/user";
export const history = createBrowserHistory({
    forceRefresh : true
});
    
const rootReducer = combineReducers({
    user : User,
});

const middlewares = [thunk.withExtraArgument({ history:history })];

// 현재환경 (개발환경, 배포)
const env = process.env.NODE_ENV;

// 개발환경 - logger사용설정
if(env === "development"){
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

// 리덕스 devtool
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

            })
        : compose;

// middleware 적용
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// store에 routeReducer, middleware, devtool 적용된 enhancer 적용
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
        


