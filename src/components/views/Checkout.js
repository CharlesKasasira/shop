import { useRef } from 'react'
import { useCart } from '../contexts/Cart'

function Checkout() {
    const formRef = useRef('checkout')
    const { total } = useCart()
    
    const handlePayment = () => {}

    return (
        <div>
            Checkout

            <form ref={"checkout"} method="post">

                <fieldset>
                    <legend>Billing info</legend>
                    <div>
                        <label>First name</label>
                        <input type="text" placeholder="First name" />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Shipping info</legend>
                </fieldset>

                <fieldset>
                    <legend>Payment method</legend>
                    <p>subtotal {total}</p>
                    <p>Shipping {shipping}</p>
                    <P>Discount {discount}</P>
                    <p>Tax {tax}</p>
                    <p>Total {total + shipping + tax - discount}</p>

                </fieldset>

                <div>
                    <label>MoMo/MobileMoney</label>
                    <input type="radio" name="" value="momo" ref="momo" />
                    <label>Airtel</label>
                    <input type="radio" name="" value="airtel" ref="airtel" />
                    <button onClick={handlePayment}>Pay now</button>
                </div>
                

            </form>
        </div>
    )
}

export default Checkout
