import { useCart } from '../contexts/Cart'

function Cart() {
    const {itemsInCart, setItemsInCart} = useCart()
    return (
        <div>
            {itemsInCart.map( itemInCart => 
                
                <h1>{itemInCart.name}</h1>
                
        )}
        </div>
    )
}

export default Cart
