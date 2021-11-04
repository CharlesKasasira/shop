import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/Cart'

function Home() {

    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX',
    });

    const {itemsInCart, setItemsInCart} = useCart();
    // const [itemsInCart, setItemsInCart] = useState([])
  

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
        const selectItem = inventoryItems.filter(inventoryItem => inventoryItem._id === itemID)
        selectItem[0].qty = 1

        setItemsInCart([...filteredCartItems, ...selectItem])
    }

    const isItemInCart = itemID => {
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id === itemID)

        return (filteredCartItems?.length > 0) ? true : false
    }


    return (
        <div>
            <div className="header">
                <h1>Shop now</h1>
                <div><button>{itemsInCart?.length} basket</button></div>
            </div>
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
                                <div className="cta">
                                    <button><span>Wishlist</span></button>
                                    <button><span>rating</span></button>
                                    
                                    {isItemInCart(inventoryItem._id)
                                    ? <Link to="/cart">view cart</Link>
                                    : <button onClick={() => addItemtoCart(inventoryItem._id)}><span>Cart</span></button>
                                }
                                    <button><span>Buy Now</span></button>
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
