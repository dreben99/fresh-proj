import { useNavigate } from 'react-router-dom'
import * as userService from '../../../services/userService'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'

function Logout(){

const navigate = useNavigate()
const {user, userLogout} = useContext(AuthContext)

useEffect(() => {
    userService.logout(user.accessToken)
    .then(async (response) => {
        console.log(response);
        if (response.ok) {
            userLogout()
            navigate('/')
        }
        else{
            const result = await response.json()
            console.log(result);
            navigate('/login')
        }
    })
    .catch(() => {
        navigate('/')
    })
})

return null

}

export default Logout