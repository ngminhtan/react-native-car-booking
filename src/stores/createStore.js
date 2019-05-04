import { createLogger } from 'redux-logger'
import {applyMiddleware, compose, createStore} from "redux";
import { makeRootReducers } from "../reducers";

const log = createLogger({ diff: true, collapsed: true })

export default (inititalState = {}) => {

    const middleWare = [log]

    const enhancers = []

    const store = createStore(
        makeRootReducers(),
        inititalState,
        compose(
            applyMiddleware(...middleWare),
            ...enhancers
        )
    )

    return store

}