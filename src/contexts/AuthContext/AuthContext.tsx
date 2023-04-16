import {createContext, ReactElement, useContext, useReducer, useState} from "react"
import axios from "axios"
import {AuthType, SignInRequest, SignInResponse, ReducerAction, REDUCER_ACTION_TYPE} from "./types"
import {ChildrenType} from "../types"
import {useGlobal} from "../GlobalContext/GlobalContext"
import {reducer} from "./reducer"

const initState: AuthType = {
    authToken: window.localStorage.getItem("miaAuthToken")? window.localStorage.getItem("miaAuthToken") : ''
}

const useAuthContext = (initState: AuthType) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const {alertSuccessMsg} = useGlobal()
    
    const signIn = async (username: string, password: string) => {
        const payload: SignInRequest = {
            username,
            password
        }
        try {
            const {data} = await axios.post<SignInResponse>("http://localhost:8080/signIn", payload)
            dispatch({
                type: REDUCER_ACTION_TYPE.SET_AUTH_TOKEN, 
                payload: data.authToken
            })
            window.localStorage.setItem("miaAuthToken", data.authToken)
            alertSuccessMsg("User has signed in")
        } catch(e) {
            dispatch({
                type: REDUCER_ACTION_TYPE.SET_AUTH_TOKEN, 
                payload: ''
            })
            window.localStorage.removeItem("miaAuthToken")
            throw e
        }
    }

    const signOut = () => {
        dispatch({
            type: REDUCER_ACTION_TYPE.SET_AUTH_TOKEN, 
            payload: ''
        })
        window.localStorage.removeItem("miaAuthToken")
    }

    return { state, signIn, signOut }
}

const AuthContext = createContext({} as ReturnType<typeof useAuthContext>)

export default function AuthProvider({ children }: ChildrenType): ReactElement {
    return <AuthContext.Provider value={useAuthContext(initState)}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const {state: {authToken}, signIn, signOut} = useContext(AuthContext)
    return {authToken, signIn, signOut}
}
