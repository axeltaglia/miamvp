export type AuthType = {
    authToken: string | null
}

export type SignInRequest = {
    username: string
    password: string
}

export type SignInResponse = {
    authToken: string
}

export const enum REDUCER_ACTION_TYPE {
    SET_AUTH_TOKEN
}

export type ReducerAction = {
    type: REDUCER_ACTION_TYPE
    payload: string | null
}
