import React from 'react'
import { View, Text } from 'react-native'
import {MapContainer} from "./MapContainer";
import { Container } from 'native-base'
export default class Home extends React.Component{

    componentDidMount(): void {
        this.props.setName()
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const region = {
            latitude: 21.027763,
            longitude: 105.834160,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }

        return (
            <Container>
                <MapContainer region={region} />
            </Container>
        )
    }
}