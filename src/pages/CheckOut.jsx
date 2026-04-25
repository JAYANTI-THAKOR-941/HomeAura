import React, { useState } from "react";
import "./main.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [checkout, setCheckout] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
    payment: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCheckout({
      ...checkout,
      [e.target.name]: e.target.value,
    });
  };

  const placeOder = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:3000/orders`, checkout);
      setCheckout({
        name: "",
        email: "",
        address: "",
        city: "",
        zipcode: "",
        payment: "",
      });
      alert('Oder place successfully.!');
      navigate('/');
    } catch (err) {
      console.log("Failed to place order.!!", err);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <form className="checkout-form" onSubmit={placeOder}>
        {/* Shipping */}
        <div className="section">
          <h3>Shipping Details</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={checkout.name}
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={checkout.email}
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={checkout.address}
              name="address"
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                value={checkout.city}
                name="city"
                onChange={handleChange}
                placeholder="City"
              />
            </div>

            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="text"
                value={checkout.zipcode}
                name="zipcode"
                onChange={handleChange}
                placeholder="Zip code"
              />
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="section">
          <h3>Payment Method</h3>

          <div className="payment-options">
            <label className="radio-option">
              <input
                type="radio"
                value={checkout.payment}
                name="payment"
                onChange={handleChange}
                name="payment"
              />
              Cash on Delivery (COD)
            </label>
          </div>
        </div>

        <button className="checkout-btn" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
