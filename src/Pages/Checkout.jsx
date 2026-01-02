import React, { useContext, useState } from 'react';
import './CSS/Checkout.css';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { getTotalCartAmount } = useContext(ShopContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Since we have no backend, we'll just simulate passing the order details
        // In a real app, this would be an API call
        console.log("Order Placed:", formData);
        navigate('/order-confirmation', { state: { orderDetails: formData } });
    };

    return (
        <div className='checkout'>
            <div className="checkout-left">
                <h1>Delivery Information</h1>
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="checkout-field-group">
                        <input required type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
                        <input required type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
                    </div>
                    <input required type="email" name="email" placeholder="Email Address" onChange={handleChange} />
                    <input required type="text" name="address" placeholder="Street Address" onChange={handleChange} />
                    <div className="checkout-field-group">
                        <input required type="text" name="city" placeholder="City" onChange={handleChange} />
                        <input required type="text" name="state" placeholder="State" onChange={handleChange} />
                    </div>
                    <div className="checkout-field-group">
                        <input required type="text" name="zip" placeholder="Zip Code" onChange={handleChange} />
                        <input required type="text" name="country" placeholder="Country" onChange={handleChange} />
                    </div>
                </form>
            </div>

            <div className="checkout-right">
                <div className="checkout-summary-title">Cart Total</div>
                <div className="checkout-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <div className="checkout-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <div className="checkout-total-item total">
                    <p>Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <button className='checkout-btn' onClick={handleSubmit}>PLACE ORDER</button>
            </div>
        </div>
    );
};

export default Checkout;
