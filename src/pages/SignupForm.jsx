import { useState } from 'react'

import "./SignupForm.css"

import IconEyeCrossed from '../icons/IconEyeCrossed'
import Input from '../atoms/Input'

const emailRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const SignupForm = ({ className = "" }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
1
    const handleIsPasswordShown = e => {
        e.preventDefault()
        setIsPasswordShown(!isPasswordShown)
    }

    return (
        <div className={`form-wrapper ${className}`}>
            <h1 className='form-header'>Sign up</h1>
            <form>
                <Input value="something" type="email" className="form-input-wrapper" isError={false} isDisabled={false} isSuccess={false} />
                <Input
                    value="pass"
                    type={isPasswordShown ? "text" : "password"}
                    className="form-input-wrapper"
                    icon={<IconEyeCrossed className="icon-password" onClick={handleIsPasswordShown} />}
                />
            </form>
        </div>
    )
}

export default SignupForm