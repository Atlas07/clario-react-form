import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import "./Input.css"

import { validatePassword } from '../utils/formValidation'

export const ErrorMessage = ({
    className = "",
    name,
    text,
    errorKey,
}) => {
    const { watch, formState: { dirtyFields } } = useFormContext()
    let errors = validatePassword(watch(name) || "")

    const isError = errors.length !== 0 && errors.includes(errorKey) && dirtyFields[name]
    const isSuccess = !errors.includes(errorKey) && dirtyFields[name];

    const classNames = [
        isError ? "message-error" : "",
        isSuccess ? "message-success" : "",
        className,
    ].filter(Boolean).join("")
    return (
        <p className={classNames}>{text}</p>
    )
}

const Input = ({
    className = "",
    id,
    type,
    label,
    placeholder = "",
    isDisabled = false,
    registerProps,
    icon = null,
}) => {
    const { register, formState: { errors, dirtyFields } } = useFormContext()
    const [isFocused, setIsFocused] = useState(false)
    const { onChange, onBlur, name, ref } = register(label, registerProps)

    const isError = (!!errors[label]?.message || errors[label]?.message.length !== 0) && !isFocused && dirtyFields[label]
    const isSuccess = (!errors[label]?.message || errors[label]?.message.length === 0) && !isFocused && dirtyFields[label]
    const classNames = [
        "input",
        isFocused ? "input-focus" : "",
        isSuccess ? "input-success" : "",
        isError ? "input-error" : "",
        isDisabled ? "input-disabled" : "",
    ].filter(Boolean).join(" ")

    const onFocus = (_e) => {
        setIsFocused(true)
    };

    const handleBlur = (e) => {
        setIsFocused(false)
        onBlur(e)
    };

    return (
        <div className={`input-container ${className}`}>
            <input
                className={classNames}
                id={id}
                type={type}
                placeholder={placeholder}
                ref={ref}
                name={name}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={handleBlur}
            />
            {icon}
        </div>
    )
}

export default Input