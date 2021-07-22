import React, { useReducer } from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../type'
import { AlertContext } from './AlertContext'
import { AlertReducer } from './AlertReducer'

export const AlertState = ({ children }) => {
    const [ state, dispatch ] = useReducer(AlertReducer,null)

    const hide = () => dispatch({ type: HIDE_ALERT })
    const show = (text, type = 'warning') => {
        dispatch({ type: SHOW_ALERT, payload: { text, type } })
    }
    
    return (
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}