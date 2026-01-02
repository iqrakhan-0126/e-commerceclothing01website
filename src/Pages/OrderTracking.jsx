import React, { useState, useEffect } from 'react';
import './CSS/OrderTracking.css';
import { useLocation } from 'react-router-dom';

const OrderTracking = () => {
    const location = useLocation();
    const [orderId, setOrderId] = useState('');
    const [isTracking, setIsTracking] = useState(false);

    // If navigated here with an ID (e.g., from OrderConfirmation)
    useEffect(() => {
        if (location.state?.orderId) {
            setOrderId(location.state.orderId);
            setIsTracking(true);
        }
    }, [location.state]);

    const handleTrack = () => {
        if (orderId) {
            setIsTracking(true);
        }
    };

    // Simulated status logic
    // For demo purposes, we'll just show a fixed progress: "Processing"
    const steps = [
        { label: 'Order Placed', status: 'completed' },
        { label: 'Processing', status: 'active' },
        { label: 'Shipped', status: 'pending' },
        { label: 'Out for Delivery', status: 'pending' },
        { label: 'Delivered', status: 'pending' },
    ];

    return (
        <div className='order-tracking'>
            <h1>Track Your Order</h1>

            <div className="tracking-input-container">
                <input
                    type="text"
                    placeholder="Enter Order ID"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                />
                <button onClick={handleTrack}>Track</button>
            </div>

            {isTracking && (
                <div className="tracking-result">
                    <h3>Order Status for #{orderId}</h3>
                    <div className="tracking-timeline">
                        <div className="timeline-track">
                            <div className="timeline-progress" style={{ width: '35%' }}></div>
                        </div>
                        <div className="timeline-steps">
                            {steps.map((step, index) => (
                                <div key={index} className={`timeline-step ${step.status}`}>
                                    <div className="step-icon">
                                        {step.status === 'completed' ? '✓' : index + 1}
                                    </div>
                                    <div className="step-label">{step.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderTracking;
