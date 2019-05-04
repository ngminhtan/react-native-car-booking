import React, { Component } from 'react'
import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import PropsTypes from 'prop-types'
import scenes from './../scenes'

export default class AppContainer extends Component{
    static propTypes = {
        store: PropsTypes.object,
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Provider store={this.props.store} >
                <Router scenes={ scenes  } />
            </Provider>
        )
    }
}
