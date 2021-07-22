import React, { useContext } from 'react'
import { AlertContext } from '../alert/context/AlertContext'

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext)
    if (!alert) return null
    
    return (
        <div
            className={`alert alert-${alert.type || 'warning'} alert-dismissible`}
            role="alert"
        >
            {alert.text}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={hide}></button>
        </div>
    )
}
