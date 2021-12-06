import { useRef, useState } from 'react'
import { useCart } from '../contexts/Cart'
import Countries from '../helpers/countries.elements'
import Districts from '../helpers/districts.element'
import USstates from '../helpers/states.elements'
import { ugandaShillings, currencyFormatter } from '../helpers/currency.format'
import { Zones, getCountryZone } from '../helpers/shipping' 
import axios from 'axios'


function Checkout() {
    const checkoutRef = useRef()
    const { total, subTotal } = useCart()
    const [country, setCountry] = useState('Uganda')
    const [discount, setDiscount] = useState(0)
    const [tax, setTax] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [zone, setZone] = useState(null)
    const [voucher, setVoucher] = useState({})
    const [patasenteOption, setPatasenteOption] = useState(null)
    const [patasentePhone, setPatasentePhone] = useState(null)
    const [mtnSecretCode, setMtnSecretCode] = useState(null)
    const [sercetCode, setSecretCode] = useState(null)

    const vouchers = {
                        xxx: {rate: 10, status: 'active', amount: 10000},
                        yyy: {rate: 15, status: 'expired', amount: 10000},
                        zzz: {rate: 18, status: 'active', amount: null},
                        ddd: {rate: 40, status: 'active', amount: 10000},
                        www: {rate: null, status: 'active', amount: 10000},
                        nnn: {rate: null, status: 'active', amount: null}
                    }
    
    const handlePayment = async (e) => {
        e.preventDefault()
        let data = {
            'amount': total,
            'email': 'davidwampamba@gmail.com',
            'phone': patasentePhone,
            'secret_code': Number(sercetCode),
            'mobile_company-id': 1
        }

        try{
            const RESULTS = await axios.post('/patasente/send-payment', data)
            console.log(RESULTS)
        } catch(error){
            console.log(error)
        }
        
    }

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

            <form ref={checkoutRef} method="post" onSubmit='handlePayment()'>

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
                        <label>Company (optional)</label>
                        <input type="text" name="" placeholder="company"/>
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
                        <Countries onChange={({target}) => {
                                setShipping(0)
                                setCountry(target.value)
                                setZone(getCountryZone(target.value))
                            }} required id="country" />
                        


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
                            country === 'United States'
                            ?
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
                            :
                                <div>
                                    <label>Town/City</label>
                                    <input type="text" placeholder="Town/City" />
                                </div>
                            
                            
                        
                        }
                    </div>


                </fieldset>

                {zone?.error ?
                        <div>{zone.error}</div>
                        :  
                        <fieldset>
                            <legend>Shipping methods</legend>
                            {zone && zone.map(theCompany => 
                                <div>
                                    <h1>{theCompany.company}</h1>
                                    {
                                        theCompany.classes.map((companyClass, index) => 
                                        <div>
                                            <input 
                                            onChange={(event) => {
                                                setShipping(Number(event.target.getAttribute('data-cost')))
                                            }}
                                            id={`${theCompany.company}_${companyClass.label}`.toLocaleLowerCase().replace(' ', '_')} 
                                            type="radio" name="shipping_class"
                                            value={`${theCompany.company}_${companyClass.label}`} 
                                            data-cost={companyClass.cost} />

                                            <label htmlFor={`${theCompany.company}_${companyClass.label}`.toLocaleLowerCase().replace(' ', '_')}>{`${companyClass.label} ${companyClass.cost}`}</label>
                                        </div>)
                                    }
                                </div>)}
                        </fieldset>
                    }

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
                        <h1>Patasente</h1>
                        <select onChange={(event) => setPatasenteOption(Number(event.target.value))}>
                            <option>-Select-</option>
                            <option value="1">MTN</option>
                            <option value="2">Airtel</option>
                        </select>

                        {patasenteOption === 1 ?
                        <>
                            <p>
                                <input onChange={event => setPatasentePhone(event.target.value)} placeholder="Phone Number" />
                            </p>

                            {!mtnSecretCode &&

                            <button onClick={async (e) => {
                                e.preventDefault()
                                try{
                                    const data = {
                                        phone: patasentePhone,
                                        mobile_company_id: 1,
                                        username: 'davidwampamba@gmail.com'
                                    }
                                

                                    fetch('/patasente', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify(data),
                                    })
                                    .then(response => response.json())
                                    .then(data => {
                                        if(data.result == 'success') {
                                            setMtnSecretCode(true)
                                        } else {
                                            console.log(data)
                                        }
                                        console.log('Success:', data);
                                    })
                                
                                    .catch((error) => {
                                        console.error('Error:', error);
                                    })
                                } catch(error) {
                                    console.error(error)
                                }
                                
                            }}>Request Token</button>

                        }
                            {
                                mtnSecretCode && <>
                                    <input placeholder="Secret code" />
                                    <button submit>Pay</button>
                                </>
                            }
                        </> 
                        :
                            <>
                                <p>
                                    <input placeholder="Phone number" />
                                </p>
                                <p>
                                    <input placeholder="Secret code..." />
                                </p>
                                <button type="submit">Pay</button>
                            </>

                        }
                        

                    </div>

                </fieldset>
                

            </form>
            
        </div>
    )
}

export default Checkout
