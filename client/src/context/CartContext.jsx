import { createContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({
    children
}) => {



    const [cart, setCart] = useLocalStorage('cart', []);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item])
    }

   const removeCart = (itemName) => {
    setCart((prevCart) => {
        const index = prevCart.findIndex(item => item.name === itemName);
        if (index !== -1) {
            return [...prevCart.slice(0, index), ...prevCart.slice(index + 1)];
        }

        return prevCart
    });
   }


    return (

        <CartContext.Provider value={{ cart, addToCart, removeCart }}>
            {children}
        </CartContext.Provider>

    );

}