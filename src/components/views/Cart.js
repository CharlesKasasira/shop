import { useCart } from '../contexts/Cart'

function Cart() {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX',
    });

    const {itemsInCart, setItemsInCart} = useCart()
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
                            <td>{itemInCart.name}</td>
                            <td>
                                <input 
                                    type="number"
                                    min="1"
                                    defaultValue={itemInCart.qty}
                                    onChange={ (e) => {
                                        const item = itemsInCart[index]
                                        item.qty = e.target.value
                                        item.subtotal = Number(item.qty) * Number(item.price)
                                        itemsInCart[index] = item
                                        setItemsInCart([...itemsInCart])
                                    }}
                                />
                            </td>
                            <td>{formatter.format(itemInCart.price)}</td>
                            <td>{formatter.format(itemInCart.price * itemInCart.qty)}</td>
                        </tr>
                    
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>  
                    </tr>
                </tfoot>
            </table>
            
        </div>
    )
}

export default Cart
