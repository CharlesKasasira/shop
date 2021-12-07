import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/Cart'
import { useAuth } from '../contexts/Auth'
import { FaAppStore } from 'react-icons/fa'

function Home() {
    const { currentUser } = useAuth()
    const { itemsInCart, setItemsInCart } = useCart()

    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX',
    });
  

    const inventoryItems = [
        {
            _id: 'x01',
            name: "Blue T-shirt",
            category: "All",
            price: 35000
        },
        {
            _id: 'x02',
            name: "Black Shoes",
            category: "Men",
            price: 150000
        },
        {
            _id: 'x03',
            name: "White Dress",
            category: "Women",
            price: 105000
        },
        {
            _id: 'x04',
            name: "Macbook Air",
            category: "Tech",
            price: 45000000
        }
    ]

    const addItemtoCart = itemID => {
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id !== itemID)
        // let selectItem = inventoryItems.filter(inventoryItem => inventoryItem._id === itemID)
        // selectItem[0]['qty'] = 1
        // selectItem[0]['subtotal'] = Number(selectItem[0].price)
        let [selectItem] = inventoryItems.filter(inventoryItem => inventoryItem._id === itemID)

        selectItem['qty'] = 1
        selectItem['subtotal'] = Number(selectItem.price)

        setItemsInCart([...filteredCartItems, selectItem])
    }

    const isItemInCart = itemID => {
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id === itemID)

        return (filteredCartItems?.length > 0) ? true : false
    }


    return (
        <div>
            <ul className="item-list">
                {
                    inventoryItems.map((inventoryItem, index) => {
                        return (
                            <li className="item" key={index.toString()}>
                                <div>
                                    {inventoryItem.name}
                                </div>
                                <div className="category">{inventoryItem.category}</div>
                                <div>{formatter.format(inventoryItem.price)}</div>
                                <div>⭐⭐⭐⭐⭐</div>
                                < FaAppStore />
                                <div className="cta">
                                    <button className="btn btn-primary" style={{"margin": "10px"}}>Add to Wishlist</button>
                                    
                                    {isItemInCart(inventoryItem._id)
                                    ? <Link to="/cart">view cart</Link>
                                    : <button className="btn btn-primary" style={{"margin": "10px"}} onClick={() => addItemtoCart(inventoryItem._id)}>Add to Cart</button>
                                }
                                    <button className="btn btn-primary" style={{"margin": "10px"}}>Buy Now</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Home
