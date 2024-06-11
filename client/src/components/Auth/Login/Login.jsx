import { useContext, useState } from 'react'
import './Login.css'
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../services/userService'

function Login() {


    const [errors, setErrors] = useState({ error: '', showError: false })
    const [values, setValues] = useState({})

    const  {userLogin}  = useContext(AuthContext)
    const navigate = useNavigate()


    const submitHandler = async (e) => {
        e.preventDefault()

        try {

            const user = await login(values);
            if (!user.message) {
                userLogin(user);
                navigate('/')
            }

        } catch (error) {
            setErrors({ error: error.message, showError: true })

            setTimeout(() => {
                setErrors({ error: '', showError: 'false' })
            }, 3000)
        }
    };

    const changeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }



    return (

        <div>

            <div className="login-form">

                <h2>Login</h2>

                <form className="login-form2" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email"> Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Enter username"
                            required
                            onChange={changeHandler}
                        />

                    </div>
                    <div>

                        <label htmlFor="password"> Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            required
                            onChange={changeHandler}
                        />
                    </div>

                    <div className='login-btn'>
                        <button>Login</button>
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

export default Login