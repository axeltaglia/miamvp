export type AuthType = {
    authToken: string
}

export const enum REDUCER_ACTION_TYPE {
    SET_AUTH_TOKEN
}

export type ReducerAction = {
    type: REDUCER_ACTION_TYPE
    payload: string
}
