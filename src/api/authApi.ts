import { api } from "./config/axiosConfig"

export type SignInRequest = {
    username: string
    password: string
}

export type SignInResponse = {
    authToken: string
}

export const AuthApi = {
    signIn: function(payload: SignInRequest) {
        return api.post<SignInResponse>("/signIn", payload);
    },
}