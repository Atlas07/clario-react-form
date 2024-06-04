import { useState } from 'react'

import "./SignupForm.css"

import IconEyeCrossed from '../icons/IconEyeCrossed'
import Input, { ErrorMessage } from '../atoms/Input'

const emailRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const SignupForm = ({ className = "" }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    
    const handleIsPasswordShown = e => {
        e.preventDefault()
        setIsPasswordShown(!isPasswordShown)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting...")
    }

    return (
        <div className={`form-wrapper ${className}`}>
            <h1 className="form-header">Sign up</h1>
            <form className="form-container">
                <Input
                    value="something"
                    type="email"
                    className="form-input-wrapper"
                    isError={false}
                    isDisabled={false}
                    isSuccess={false} />
                <Input
                    value="pass"
                    type={isPasswordShown ? "text" : "password"}
                    className="form-input-wrapper"
                    icon={<IconEyeCrossed className="icon-password" onClick={handleIsPasswordShown} />}
                />
                <div className='form-errors-container'>
                    <ErrorMessage text="Has at least 8 characters (no spaces)" isError={true} />
                    <ErrorMessage text="Uppercase and lowercase letters" />
                    <ErrorMessage text="1 digit minimum" isSuccess={true} />
                </div>

                <button className="form-submit-btn" onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm