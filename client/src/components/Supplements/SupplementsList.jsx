import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from '../../context/AuthContext'

export default function SupplementsList({ hide, data }) {

    const [show, setShow] = useState(false)
    const { addToCart } = useContext(CartContext)
    const { user} = useContext(AuthContext)

    const toggleShow = () => {
        setShow(!show)
        hide(data.name)
    }

    const [logText, setLogText] = useState('Add to Cart')
    const handleLoginText = () => {
        setLogText('Log in to BUY')
    }    


    return (
        <div>

            <div className="every-prod">
                <div className="supp-name">
                    <img src={data.img} className="protein" />
                    <h3>{data.name}</h3>
                </div>
                <div className="supp-button">

                    <button onClick={toggleShow} className="btn-info" >INFO</button>
                    {user?.email
                    ?
                    <button onClick={() => addToCart(data)} className="btn-info">Add to Cart</button>
                      :
                      <button onClick={handleLoginText} className="btn-info2">{logText}</button>
                    }
                </div>
                {show && (

                    <div className="popup">

                        <div className="pop-content">

                            <p>{data.price}$</p>
                            <p>{data.description}</p>

                            <button onClick={toggleShow} className="btn-info">Close</button>
                        </div>
                    </div>
                )}

            </div>
        </div>

    )



}



