import {REDUCER_ACTION_TYPE, ReducerAction} from "./types";

export const setAuthToken = (authToken: string): ReducerAction => {
    return {
        type: REDUCER_ACTION_TYPE.SET_AUTH_TOKEN,
        payload: authToken,
    }
}