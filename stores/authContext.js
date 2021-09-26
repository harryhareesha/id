import {  createContext, useEffect, useState } from "react";
import netlifyIdentity from 'netlify-identity-widget'
export const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
})

import React from 'react'

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authReady, setAuthReady] = useState(false)
    useEffect(() => {
        netlifyIdentity.on('init', (user) => {
            setAuthReady(true)
            setUser(user)
            console.log('init event');
        })
        netlifyIdentity.on('login', (user) => {
            setUser(user)
            setAuthReady(true)
            netlifyIdentity.close()
            console.log('login event handled successfully...');
        })
        netlifyIdentity.on('logout', () => {
            setUser(null)
            setAuthReady(false)
            console.log('log OUT event handled successfully...');
        })
        
        netlifyIdentity.init()

        return () => {
            netlifyIdentity.off('login')
            netlifyIdentity.off('logout')
        }
    }, [])
    const login = () => {
        netlifyIdentity.open()
    }
    const logout = () => {
        netlifyIdentity.logout()
    }
    const context = { user, login, logout, authReady}
    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
