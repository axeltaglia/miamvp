import {REDUCER_ACTION_TYPE, ReducerAction, AuthType} from "./types"

export const reducer = (state: AuthType, action: ReducerAction): AuthType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.SET_AUTH_TOKEN:
            return { ...state, authToken: action.payload }
        default:
            throw new Error()
    }
}