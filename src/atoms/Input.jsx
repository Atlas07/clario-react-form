import { useState, useEffect } from 'react'

import "./Input.css"

const Input = ({ className = "", type, value, placeholder = "", isError = false, isDisabled = false, isSuccess = false, icon = null }) => {
    const [isFocused, setIsFocused] = useState(false)
    const classNames = [
        "input",
        isFocused ? "input-focus" : "",
        isSuccess ? "input-success" : "",
        isError ? "input-error" : "",
        isDisabled ? "input-disabled" : "",
    ].join(" ")

    const handleFocus = _e => {
        setIsFocused(true)
    }

    const handleBlur = _e => {
        setIsFocused(false)
    }

    return (
        <div className={`input-container ${className}`}>
            <input className={classNames}
                type={type}
                value={value}
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isDisabled}
            />
            
            {icon}
        </div>
    )
}

export default Input