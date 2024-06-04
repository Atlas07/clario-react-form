import "./SignupForm.css"

import Input from '../atoms/Input'

const emailRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const SignupForm = ({ className="" }) => {
    return (
        <div className={`form-wrapper ${className}`}>
            <h1 className='form-header'>Sign up</h1>
            <form>
                <Input value="something" type="email" isError={false} isDisabled={false} isSuccess={false} />
            </form>
        </div>
    )
}

export default SignupForm