import update from 'react-addons-update'
import constants from './actionConstants'
const { SET_NAME } = constants;

const  ACTION_HANDLERS = {
    SET_NAME: handleSetName
}

const initialState = {
}

export function setName() {
    return {
        type: SET_NAME,
        payload: 'Huyền Trang'
    }
}

function handleSetName(state, action) {
    return update(state, {
        name: {
            $set: action.payload
        }
    })
}


export function HomeReducer(state = initialState, action) {
    const handler  = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}