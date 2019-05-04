import React from 'react'
import createStore from "./stores/createStore";
import AppContainer from "./containers";

export default class Root extends React.Component{
    renderApp(){
        const initialState = {}
        const store = createStore(initialState)

        return (
            <AppContainer store={store} />
        )
    }

    render() {
        return this.renderApp();
    }
}