import { useRef, useState } from 'react'
import { useCart } from '../contexts/Cart'
import Countries from '../helpers/countries.elements'
import Districts from '../helpers/districts.element'
import USstates from '../helpers/states.elements'
import { ugandaShillings, currencyFormatter } from '../helpers/currency.format'

function Checkout() {
    const checkoutRef = useRef()
    const { total, subTotal } = useCart()
    const [country, setCountry] = useState('Uganda')
    const [discount, setDiscount] = useState(0)
    const [tax, setTax] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [voucher, setVoucher] = useState({})

    const vouchers = {
                        xxx: {rate: 10, status: 'active', amount: 10000},
                        yyy: {rate: 15, status: 'expired', amount: 10000},
                        zzz: {rate: 18, status: 'active', amount: null},
                        ddd: {rate: 40, status: 'active', amount: 10000},
                        www: {rate: null, status: 'active', amount: 10000},
                        nnn: {rate: null, status: 'active', amount: null}
                    }
    
    const handlePayment = () => {}

    const getVoucherInfo = (appliedVoucher) => {
        const voucher = vouchers[appliedVoucher]
        if(voucher){
            if(voucher['status'] !== 'expired'){
                if(!voucher['rate'] && !voucher['amount']){
                    return {msg: 'null voucher'}
                }
                return voucher['amount'] > 0 ? {amount: voucher['amount']} : {amount: voucher['rate']}
            }
            return {msg: 'Expired voucher'}
        }
        return {msg: 'invalid voucher'}
    }


    return (
        <div>
            <h1>Checkout</h1>

            <form ref={checkoutRef} method="post">

                <fieldset>
                    <legend>Billing info</legend>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder="name" />
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
                                    <input type="text" placeholder="town/village"  />
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

                <fieldset>
                    <legend>Cart details</legend>
                    <p>subtotal {ugandaShillings.format(total)}</p>
                    <p>Shipping {shipping}</p>
                    <p>Discount {discount}</p>
                    <p>Tax {tax}</p>
                    <p>Total {currencyFormatter((total + shipping + tax - discount), 'UGX')}</p>
                </fieldset>

                <fieldset>
                    <legend>Payment</legend>
                    <label>Voucher code</label>
                    <input type="text" placeholder="voucher code" onBlur={({target}) => {
                        const voucherInfo = getVoucherInfo(target.value)
                        if(voucherInfo?.msg){
                            target.value = voucherInfo.msg
                        } else {
                            voucherInfo?.amount ? setDiscount(voucherInfo.amount) : setDiscount((voucherInfo.rate / 100)*total)
                        }
                    }} />
                    <div>
                        <label>MoMo/MobileMoney</label>
                        <input type="radio" name="payment_method" value="momo" />
                        <label>Airtel</label>
                        <input type="radio" name="payment_method" value="airtel" />
                        <button onClick={handlePayment}>Pay now</button>
                    </div>
                </fieldset>
                

            </form>
            
        </div>
    )
}

export default Checkout
