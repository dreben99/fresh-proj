import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css'

function Cart() {


    const { cart, removeCart } = useContext(CartContext);
    console.log(cart);

    return (

        <div className="whole">
            <h1>Your Cart</h1>
            <div className="cart">
                {cart.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <div className="pic">
                                <img src={item.img}></img>
                            </div>
                            <div className="other">
                                        <h3 className="o1">{item.name}</h3>
                                        <p className="o2">{item.price}$</p>
                                    <button className="o3" onClick={() => removeCart(item.name)}>Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Cart

