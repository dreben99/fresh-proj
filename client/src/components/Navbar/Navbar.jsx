import { Link } from "react-router-dom"
import './Navbar.css'
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import Profile from "../Profile/Profile"




function Navbar() {

    const { user } = useContext(AuthContext)
    const [isProfileModalOpen, setProfileModalOpen] = useState(false)

    const openProfileModal = () => {
        console.log(`open`);
        setProfileModalOpen(true)
    }

    const closeProfileModal = () => {
        console.log(`close`);
        setProfileModalOpen(false)

    }

    return (

        <div className="navbar">

            <ul>
                <div className="logo"><Link to='/'><img src="https://media-cdn.tripadvisor.com/media/photo-s/14/4b/56/05/visitanos-y-disfruta.jpg" alt="" /></Link>
                </div >
                <li> <Link to='/supplements'>Supplements</Link></li>

                {user?.email
                    ?
                    <>
                        <li> <Link to='/logout'>Logout</Link></li>
                        <li className="profile-button"  onClick={openProfileModal}>
                        <i className="fa-solid fa-user"></i> Profile
                        </li>
                        <li> <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link></li>
                        <li className="welcome">  Welcome, {user.firstName} !</li>
                    </>
                    :
                    <>
                        <li> <Link to='/login'>Login</Link></li>
                        <li> <Link to='/register'>Register</Link> </li>
                    </>
                }
            </ul>

            {user?.email
            ?
            
                <Profile
                    isOpen={isProfileModalOpen}
                    onClose={closeProfileModal}
                    user={user}
                />
                :
                null
            }

            


        </div>


    )



}

export default Navbar