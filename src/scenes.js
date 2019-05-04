import React from 'react'
import { Actions, Scence } from 'react-native-router-flux'
import HomeContainer from "./routes/Home/conatiners/HomeContainer";

const scenes = Actions.create(
    <Scence key={'root'}>
        <Scence key={'home'} component={HomeContainer} title={'Home'} initial />
    </Scence>
)

export default scenes