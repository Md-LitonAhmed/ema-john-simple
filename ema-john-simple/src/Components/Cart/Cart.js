import React from 'react';

export default function Cart(props) {
    const cart=props.cart;
    let price=0
    for(let i=0; i<cart.length; i++){
      price=price + cart[i].price;
    }
    const formated=(value)=>{
      const presicion=value.toFixed(2)
        return Number(presicion);
    }
    let shippingCost=0;
if(price >35){
  shippingCost=0;
}
else if(price > 15){
  shippingCost=4.99;
}
else if(price > 0){
  shippingCost=12.9;
}
const TaxVAT=price/10;
const TotalPrice=price+shippingCost+TaxVAT;
  return (
    <div>
        <h3>Order Summary</h3>
        <p>Total Ordered Items: {cart.length}</p>
        <p>Product Price: {formated(price)}</p>
        <p>Tax + VAT : {formated(TaxVAT)}</p>
        <p>Shipping Cost: {formated(shippingCost)}</p>
        <p> Total price:{formated(TotalPrice)}</p> 
    </div>
  )
}
