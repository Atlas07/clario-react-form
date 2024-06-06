import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import "./SignupForm.css"

import IconEyeCrossed from '../icons/IconEyeCrossed'
import Input, { ErrorMessage } from '../atoms/Input'

import { ERROR_KEYS, EMAIL_REGEX, validatePassword } from '../utils/formValidation'

const SignupForm = ({ className = "" }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const methods = useForm({ mode: "onTouched" })

    const handleIsPasswordShown = e => {
        e.preventDefault()
        setIsPasswordShown(!isPasswordShown)
    }

    return (
        <div className={`form-wrapper ${className}`}>
            <h1 className="form-header">Sign up</h1>
            <FormProvider {...methods}>
                <form className="form-container" noValidate onSubmit={e => e.preventDefault()}>
                    <Input
                        id="email"
                        type="email"
                        label="email"
                        className="form-input-wrapper"
                        registerProps={{ pattern: {value: EMAIL_REGEX, message: ERROR_KEYS.EMAIL_INVALID } }}
                    />

                    <Input
                        id="password"
                        type={isPasswordShown ? "text" : "password"}
                        label="password"
                        className="form-input-wrapper"
                        registerProps={{ validate: validatePassword }}
                        icon={<IconEyeCrossed className="icon-password" onClick={handleIsPasswordShown} />}
                    />

                    <div className='form-errors-container'>
                        <ErrorMessage
                            text="Has at least 8 characters (no spaces)"
                            name="password"
                            errorKey={ERROR_KEYS.PASSWORD_LENGTH}
                        />
                        <ErrorMessage
                            text="Uppercase and lowercase letters"
                            name="password"
                            errorKey={ERROR_KEYS.PASSWORD_MIXED_CASE}
                        />
                        <ErrorMessage
                            text="1 digit minimum"
                            name="password"
                            errorKey={ERROR_KEYS.PASSWORD_DIGIT}
                        />
                    </div>

                    <button className="form-submit-btn" onClick={() => {}}>Sign Up</button>
                </form>
            </FormProvider>
        </div>
    )
}

export default SignupForm