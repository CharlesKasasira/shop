import { useRef, useState } from 'react'
import { useCart } from '../contexts/Cart'
import Countries from '../helpers/countries.elements'
import Districts from '../helpers/districts.element'
import USstates from '../helpers/states.elements'

function Checkout() {
    const checkoutRef = useRef()
    const { total } = useCart()
    const [country, setCountry] = useState('Uganda')
    
    const handlePayment = () => {}

    return (
        <div>
            <h1>Checkout</h1>

            <form ref={checkoutRef} method="post">

                <fieldset>
                    <legend>Billing info</legend>
                    <div>
                        <label>First name</label>
                        <input type="text" placeholder="First name" />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Shipping info</legend>
                    <div>
                        <label>Name<span  className="required-label">*</span></label>
                        <input type="text" />
                    </div>

                    <div>
                        <label>Company</label>
                        <input type="text" name="" id="" />
                    </div>

                    <div>
                        <label>Address line 1: <span className></span></label>
                        <span className="required-label">*</span>
                        <input type="text" name="" id="" />
                    </div>

                    <div>
                        <label>Address line 2: <span className></span></label>
                        <input type="text" name="" id="" />
                    </div>

                    <div>
                        <label>Country
                            <span className="required-label">*</span>
                        </label>
                        <Countries onChange={({target}) => setCountry(target.value)} required id="country" />
                        {country === 'Uganda' 
                        ? 
                            <>
                                <div>
                                    <label>District
                                        <span className="required-label">*</span>
                                    </label>
                                    <Districts id="district" />
                                </div>
                                <div>
                                    <label>Town/Village</label>
                                    <input type="text"  />
                                </div>
                            </>
                        :
                            <>
                                <div>
                                    <label>State
                                    <span className="required-label">*</span>
                                    </label>
                                    <USstates id="us_state" />
                                </div>
                                <div>
                                    <label>Town/City</label>
                                    <input type="text" placeholder="Town/City" />
                                </div>
                                <div>
                                    <label>Zip code/postal code</label>
                                    <input type="text" placeholder="Postal code" />
                                </div>
                            </>
                        
                        }
                    </div>


                </fieldset>

                {/* <fieldset>
                    <legend>Payment method</legend>
                    <p>subtotal {total}</p>
                    <p>Shipping {shipping}</p>
                    <p>Discount {discount}</p>
                    <p>Tax {tax}</p>
                    <p>Total {total + shipping + tax - discount}</p>
                </fieldset> */}

                <div>
                    <label>MoMo/MobileMoney</label>
                    <input type="radio" name="payment_method" value="momo" />
                    <label>Airtel</label>
                    <input type="radio" name="payment_method" value="airtel" />
                    <button onClick={handlePayment}>Pay now</button>
                </div>
                

            </form>
        </div>
    )
}

export default Checkout
