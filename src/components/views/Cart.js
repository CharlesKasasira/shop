import { useCart } from '../contexts/Cart'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Cart() {
    const {itemsInCart, setItemsInCart, total, setTotal} = useCart()

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX',
    });

    const returnTotal = (items) => {
        let sum = 0;
        items.forEach( item => sum += item.subtotal)
        return sum;
    }

    const removeCartItem = itemID => {
        let newCart = itemsInCart.filter(itemInCart => itemInCart._id !== itemID)
        return newCart        
    }

    useEffect(() => {
        setTotal(returnTotal(itemsInCart))
    },[])

    if(itemsInCart?.length > 0)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>item</th>
                            <th>QTY</th>
                            <th>unit cost</th>
                            <th>Sub total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsInCart.map( (itemInCart, index) => 
                            <tr key={itemInCart._id}>
                                <td>
                                    {itemInCart.name}<br />
                                    <button onClick={() => {
                                        let newItemsInCart = removeCartItem(itemInCart._id)
                                        setItemsInCart([...newItemsInCart])
                                        setTotal(returnTotal(newItemsInCart))
                                    }}>Remove item</button>
                                </td>
                                <td>
                                    <input 
                                        type="number"
                                        min="1"
                                        defaultValue={itemInCart.qty}
                                        onChange={ (event) => {
                                            // const item = itemsInCart[index]
                                            // item.qty = Number(event.target.value)
                                            // item.subtotal = Number(item.qty) * Number(item.price)
                                            // itemsInCart[index] = item
                                            // setItemsInCart([...itemsInCart])
                                            // const subTotals = itemsInCart.map(itemInCart => itemInCart.subtotal)
                                            // const reducer = (currentValue, previousValue) => {
                                            //     return currentValue + previousValue
                                            // }
                                            // setTotal(subTotals.reduce(reducer))

                                            let { value: quantity } = event.target

                                            itemInCart.qty = quantity > 0 ? quantity : 1;
                                            itemInCart.subtotal = itemInCart.qty * itemInCart.price;

                                            setItemsInCart([...itemsInCart])

                                            let newTotal = 0
                                            itemsInCart.forEach(itemInCart => newTotal += itemInCart.subtotal)
                                            setTotal(newTotal)
                                        }}
                                    />
                                </td>
                                <td>{formatter.format(itemInCart.price)}</td>
                                <td>{formatter.format(itemInCart.subtotal || itemInCart.price)}</td>
                            </tr>
                        
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total {formatter.format(total)}</th>  
                        </tr>
                    </tfoot>
                </table>
                
            </div>
        )
    return (
        <>
            <h1>Your Basket is empty</h1>
            <p><Link to="/">Shop Now</Link></p>
        </>
    )
}

export default Cart
