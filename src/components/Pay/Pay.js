import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';

const KEY = 'KEY'

const PayList = () => {
    const [stripeToken,setStripeToken] = useState(null) 
    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {

            const body = {
                tokenId: stripeToken.id,
                amount: 2000
            };

            try {
                const response = await fetch('http://localhost:5000/api/ckeckout/payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                })

            } catch (err) {
                console.log(err);
            }
        };

        stripeToken && makeRequest();
        
    },[stripeToken])

    return (
        <StripeCheckout
            name='My Said'
            billingAddress
            shippingAddress
            description='Your totl is $20'
            amont={ 2000 }
            token={onToken}
            stripeKey={KEY}
        >
            <button>
                PAY
            </button>

        </StripeCheckout>
    )
}

export default PayList;
