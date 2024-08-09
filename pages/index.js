// pages/index.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data.products.slice(0, 3)))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Dressify</h1>
        <p className="text-xl mb-8">Your one-stop shop for the latest fashion trends</p>
        <Link href="/products">
          <a className="custom-button hover:bg-primary-dark">
            Shop Now
          </a>
        </Link>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-foreground p-6 rounded-xl shadow-card">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-muted mb-2">{product.description}</p>
              <p className="text-lg font-bold text-primary mb-4">${product.price}</p>
              <Link href={`/products/${product.id}`}>
                <a className="custom-button">
                  View Details
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/products">
            <a className="custom-button bg-secondary hover:bg-secondary-dark">
              View All Products
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
