import { combineReducers } from 'redux'
import { HomeReducer as home } from '../routes/Home/models/home'

export const makeRootReducers = () => {
    return combineReducers({
        home
    })
}

export default makeRootReducers;