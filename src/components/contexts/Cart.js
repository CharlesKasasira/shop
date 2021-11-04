import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart(){
    return useContext(CartContext)
}

export default function CartProvider({children}){
    const [itemsInCart, setItemsInCart] = useState([])

    return (
        <CartContext.Provider value={{itemsInCart, setItemsInCart}}>
            {children}
        </CartContext.Provider>
    )
}