import React from 'react'

function Home() {

    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX',
    });
  

    const inventoryItems = [
        {
            name: "Blue T-shirt",
            category: "All",
            price: 35000
        },
        {
            name: "Black Shoes",
            category: "Men",
            price: 150000
        },
        {
            name: "White Dress",
            category: "Women",
            price: 105000
        },
        {
            name: "Macbook Air",
            category: "Tech",
            price: 45000000
        }
    ]
    return (
        <div>
            <div className="header">
                <h1>Shop now</h1>
                <div><button>basket</button></div>
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
                                    <button><span>Cart</span></button>
                                    <button><span>Buy Now</span></button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <button>add to cart</button>
            <button>remove from cart</button>
            <button>buy now</button>
            <button>+</button>
            <button>-</button>

        </div>
    )
}

export default Home
