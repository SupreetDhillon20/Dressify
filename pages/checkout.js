import { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handleCheckout = async () => {
    const items = JSON.parse(localStorage.getItem('cart'));
    try {
      const response = await axios.post('/api/checkout', { items, shippingAddress, paymentDetails });
      alert('Order Placed Successfully');
      // Redirect to order confirmation page
      // Example: window.location.href = '/order-confirmation';
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Checkout Failed');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <input 
        type="text" 
        placeholder="Shipping Address" 
        value={shippingAddress} 
        onChange={(e) => setShippingAddress(e.target.value)} 
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <input 
        type="text" 
        placeholder="Payment Details" 
        value={paymentDetails} 
        onChange={(e) => setPaymentDetails(e.target.value)} 
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button 
        onClick={handleCheckout} 
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
