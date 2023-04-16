import React from "react"
import Home from "../pages/Home"
import About from "../pages/About"
import SignIn from "../pages/SignIn"
import ForgotPassword from "../pages/ForgotPassword"

type RouteType = {
    key: string
    title: string
    path: string
    authenticated: boolean
    enabled: boolean
    component: React.ComponentType<any>
}

export const routes: RouteType[] = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/home',
        authenticated: true,
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        authenticated: true,
        enabled: true,
        component: About
    },
    {
        key: 'signIn-route',
        title: 'Sign In',
        path: '/',
        authenticated: false,
        enabled: true,
        component: SignIn
    },
    {
        key: 'forgotPassword-route',
        title: 'Forgot Password',
        path: '/forgotPassword',
        authenticated: false,
        enabled: true,
        component: ForgotPassword
    }
]