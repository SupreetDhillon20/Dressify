import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const Cart = () => {
  const { state, dispatch } = useContext(StoreContext);
  const cartItems = state.cart;

  const removeFromCart = async (id) => {
    try {
      // Optionally, persist the remove action to the backend
      await axios.delete(`/api/cart/${id}`);

      // Update the local state
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return; // Prevents setting quantity below 1

    try {
      // Optionally, persist the quantity update to the backend
      await axios.put(`/api/cart/${id}`, { quantity });

      // Update the local state
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id, quantity } });
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-700">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 text-center border rounded-md"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
