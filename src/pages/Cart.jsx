import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty, increaseQty } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const cartItems = useSelector(state=>state.cart.cart);

    const dispatch = useDispatch();

    const navigate = useNavigate();

  return (
    <div>
       <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {cartItems.length === 0 ? <h2>Your is empty.!</h2>:cartItems.map((i)=>(
                <tr key={i.id}>
                    <td><img src={i.image} alt="" /></td>
                    <td>{i.name}</td>
                    <td>{i.description}</td>
                    <td>{i.price}</td>
                    <td><button onClick={()=>dispatch(increaseQty(i.id))}>+</button>{i.qty} <button style={{backgroundColor:"red"}} onClick={()=>dispatch(decreaseQty(i.id))} >-</button></td>
                    <td>{i.price * i.qty}</td>
                </tr>
            ))}
        </tbody>
       </table>
       <button onClick={()=>navigate('/checkout')}>Checkout</button>
    </div>
  )
}

export default Cart