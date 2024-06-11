import './Profile.css'

function Profile({isOpen, onClose, user}){

    if (!isOpen) {
        return null
    }


    return (

    <div className="prof">

     <div className="win">
        <div>
            <button className="x-btn" onClick={onClose}>X</button>
        </div>
        <h2>Profile info</h2>
        <ul>
            <li>Email: {user.email}</li>
            <li>Username: {user.firstName}</li>
            <li>Phone: {user.phoneNumber}</li>
        </ul>
     </div>

    </div>


    )
}

export default Profile