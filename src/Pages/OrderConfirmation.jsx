import React from 'react';
import './CSS/OrderConfirmation.css';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const orderDetails = location.state?.orderDetails || {};

    // Generate a random order ID
    const orderId = Math.floor(Math.random() * 1000000);

    return (
        <div className='order-confirmation'>
            <div className="order-confirmation-icon">✓</div>
            <h1>Thank You!</h1>
            <p>Your order #{orderId} has been placed successfully.</p>

            <div className="order-details">
                <h2>Shipping Details</h2>
                <div className="order-summary-item">
                    <span>Name:</span>
                    <span>{orderDetails.firstName} {orderDetails.lastName}</span>
                </div>
                <div className="order-summary-item">
                    <span>Email:</span>
                    <span>{orderDetails.email}</span>
                </div>
                <div className="order-summary-item">
                    <span>Address:</span>
                    <span>{orderDetails.address}, {orderDetails.city}, {orderDetails.state} {orderDetails.zip}</span>
                </div>
                <div className="order-summary-item">
                    <span>Country:</span>
                    <span>{orderDetails.country}</span>
                </div>
            </div>

            <div className="order-actions" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button className='continue-shopping-btn' onClick={() => navigate('/')}>
                    Continue Shopping
                </button>
                <button
                    className='continue-shopping-btn'
                    style={{ background: '#374151' }}
                    onClick={() => navigate('/order-tracking', { state: { orderId: orderId } })}
                >
                    Track Order
                </button>
            </div>
        </div>
    );
};

export default OrderConfirmation;
