// components/Wishlist.js
import React from 'react';

const Wishlist = ({ wishlistItems, removeFromWishlist }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-700">Your wishlist is empty</p>
      ) : (
        wishlistItems.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-700">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;

