import { useNavigate } from 'react-router-dom';
import './Register.css'
import { useState } from 'react';
import { register } from '../../../services/userService'

function Register() {

    const [errors, setErrors] = useState({ error: '', showError: false })

    const [values, setValues] = useState({
        email: '',
        firstName: '',
        phoneNumber: '',
        password: '',
        rePassword: '',
    });

    const navigate = useNavigate()


    const submitHandler = async (e) => {

        e.preventDefault()

        try {

            const user = await register(values);
            if (!user.message) {
                navigate('/login')
            }

        } catch (error) {

            setErrors({ error: error.message, showError: true })

            setTimeout(() => {
                setErrors({ error: '', showError: false })
            }, 3000);
        }
    }

    const changeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }



    return (

        <div>

            <div className="register-form">

                <h2>Register</h2>



                <form className="register-form2" onSubmit={submitHandler}>
                    <div>

                        <label htmlFor="firstName">Username</label>
                        <input
                            htmlFor='firstName'
                            name="firstName"
                            id="firstName"
                            placeholder="enter firstName"
                            required
                            onChange={changeHandler}
                            value={values.firstName}
                        />
                    </div>
                    <div>

                        <label htmlFor="email">Email</label>
                        <input
                            htmlFor='email'
                            name="email"
                            id="email"
                            placeholder="enter email"
                            required
                            onChange={changeHandler}
                            value={values.email}
                        />
                    </div>


                    <div>

                        <label htmlFor="phoneNumber">Number</label>
                        <input
                            htmlFor='phoneNumber'
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="enter number"
                            required
                            onChange={changeHandler}
                            value={values.phoneNumber}
                        />
                    </div>

                    <div>

                        <label htmlFor="password">Password</label>
                        <input
                            htmlFor='password'
                            type='password'
                            name="password"
                            id="password"
                            placeholder="enter password"
                            required
                            onChange={changeHandler}
                            value={values.password}
                        />
                    </div>

                    <div>

                        <label htmlFor="rePassword">Repeat password</label>
                        <input
                            htmlFor='rePassword'
                            type='password'
                            name="rePassword"
                            id="rePassword"
                            placeholder="re-enter password"
                            required
                            onChange={changeHandler}
                            value={values.rePassword}
                        />
                    </div>
                    <div className="register-button">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
            {errors.error &&
                <div className='error-msg'>
                    <p>{errors.error}</p>
                </div>
            }
        </div>

    )


}

export default Register