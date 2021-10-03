import { createContext, useReducer } from 'react'

export const UserContext = createContext()
const initialState = {
    isLoggedIn: false,
    isLoading: false,
    currentUser: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case 'SET_AUTHORIZED':
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                currentUser: action.payload
            }
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn:false
            }
        default:
            return state
    }
}
export const UserContextProvider = ({ children }) => {
    const value = useReducer(reducer, initialState)
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}