// pages/_app.js
import { useState } from 'react';
import '../styles/globals.css';
import Cart from '../components/Cart';
import Wishlist from '../components/Wishlist';

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => (item.id === id ? { ...item, quantity: parseInt(quantity) } : item)));
  };

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <Component
        {...pageProps}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        wishlistItems={wishlistItems}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
      />
      {/* Example usage */}
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <Wishlist
        wishlistItems={wishlistItems}
        removeFromWishlist={removeFromWishlist}
      />
    </div>
  );
}

export default MyApp;

