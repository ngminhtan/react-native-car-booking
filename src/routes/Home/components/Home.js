import React from 'react'
import { View, Text } from 'react-native'

export default class Home extends React.Component{

    componentDidMount(): void {
        this.props.setName()
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View >
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}