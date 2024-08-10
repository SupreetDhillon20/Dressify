import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/products/${id}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => console.error('Error fetching product details:', error));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const images = [
    {
      original: product.image,
      thumbnail: product.image,
    },
    // Add more images here if available
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <ImageGallery items={images} />
        </div>
        <div className="w-full md:w-1/2 md:ml-6">
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-blue-500 mb-6">${product.price}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
